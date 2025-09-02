import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
      const body = await req.json()
      
      // Log the deletion request
      console.log('Data deletion request received:', body)
      
      // In a real implementation, you would:
      // 1. Verify the request is from Facebook
      // 2. Extract user ID from the request
      // 3. Delete user data from your database
      // 4. Return appropriate response
      
      return new Response(
        JSON.stringify({
          url: `https://jrmmqjmmbelwpojntlmz.supabase.co/functions/v1/data-deletion`,
          confirmation_code: `deletion_${Date.now()}`,
          status: 'pending'
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      )
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