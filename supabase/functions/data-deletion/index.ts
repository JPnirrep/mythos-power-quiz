import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { createHmac } from "https://deno.land/std@0.168.0/node/crypto.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Verify Facebook signature
function verifyFacebookSignature(data: string, signature: string, appSecret: string): boolean {
  const expectedSignature = createHmac('sha256', appSecret)
    .update(data)
    .digest('hex')
  return `sha256=${expectedSignature}` === signature
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (req.method === 'GET') {
      // Return HTML page with deletion instructions
      const html = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Instructions de Suppression des Données</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            .container { max-width: 800px; margin: 0 auto; }
            h1 { color: #333; }
            h2 { color: #555; margin-top: 30px; }
            ul, ol { margin: 10px 0; padding-left: 30px; }
            .contact { background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Instructions de Suppression des Données</h1>
            
            <h2>Suppression de vos données personnelles</h2>
            <p>Si vous souhaitez supprimer vos données personnelles de notre application, veuillez suivre les instructions ci-dessous :</p>
            
            <h2>Comment supprimer vos données</h2>
            <ol>
              <li>Envoyez un email à notre équipe support</li>
              <li>Incluez votre adresse email utilisée pour l'inscription</li>
              <li>Précisez votre demande de suppression complète des données</li>
              <li>Nous traiterons votre demande sous 30 jours</li>
            </ol>
            
            <h2>Données concernées</h2>
            <p>La suppression comprendra :</p>
            <ul>
              <li>Vos informations de profil (nom, prénom, email, téléphone)</li>
              <li>Vos réponses au quiz</li>
              <li>Vos résultats et préférences</li>
              <li>Toutes les données associées à votre compte</li>
            </ul>
            
            <h2>Délai de traitement</h2>
            <p>Votre demande sera traitée dans un délai maximum de 30 jours calendaires à compter de la réception de votre demande. Vous recevrez une confirmation par email une fois la suppression effectuée.</p>
            
            <div class="contact">
              <h2>Contact</h2>
              <p>Pour toute demande de suppression de données, contactez-nous à :</p>
              <p><strong>[votre-email@example.com]</strong></p>
            </div>
          </div>
        </body>
        </html>
      `
      
      return new Response(html, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'text/html; charset=utf-8',
        },
      })
    }

    if (req.method === 'POST') {
      // Handle deletion request from Facebook
      const appSecret = Deno.env.get('FACEBOOK_APP_SECRET')
      if (!appSecret) {
        console.error('Facebook app secret not configured')
        return new Response('Server configuration error', { status: 500, headers: corsHeaders })
      }

      const signature = req.headers.get('x-hub-signature-256')
      if (!signature) {
        console.error('Missing Facebook signature')
        return new Response('Unauthorized', { status: 401, headers: corsHeaders })
      }

      const body = await req.text()
      
      // Verify Facebook signature
      if (!verifyFacebookSignature(body, signature, appSecret)) {
        console.error('Invalid Facebook signature')
        return new Response('Unauthorized', { status: 401, headers: corsHeaders })
      }

      let parsedBody
      try {
        parsedBody = JSON.parse(body)
      } catch (e) {
        console.error('Invalid JSON body')
        return new Response('Bad request', { status: 400, headers: corsHeaders })
      }

      // Extract user ID from Facebook's signed request
      const userId = parsedBody.user_id || parsedBody.psid
      if (!userId) {
        console.error('No user ID found in deletion request')
        return new Response('Bad request', { status: 400, headers: corsHeaders })
      }

      console.log(`Processing deletion request for user ID: ${userId}`)

      // Initialize Supabase client with service role key for admin operations
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
      const supabase = createClient(supabaseUrl, supabaseServiceKey)

      try {
        // Delete user data from our database
        // Note: In a real app, you'd need to map Facebook user_id to your internal user_id
        
        // For now, we'll log the deletion request and return success
        // In production, implement the actual deletion logic here
        
        const confirmationCode = `deletion_${Date.now()}_${userId}`
        
        return new Response(
          JSON.stringify({
            url: `https://jrmmqjmmbelwpojntlmz.supabase.co/functions/v1/data-deletion`,
            confirmation_code: confirmationCode
          }),
          {
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          }
        )
      } catch (error) {
        console.error('Error deleting user data:', error)
        return new Response('Internal server error', { status: 500, headers: corsHeaders })
      }
    }

    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    })

  } catch (error) {
    console.error('Error in data-deletion function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    )
  }
})