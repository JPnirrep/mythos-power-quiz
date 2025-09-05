import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

// Attention : La création d'un client admin ne doit se faire que dans un contexte sécurisé côté serveur (Edge Functions, etc.)
// Assurez-vous que vos variables d'environnement SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont bien configurées dans votre projet Supabase.
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

Deno.serve(async (req) => {
  // Gérer la requête pre-flight CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Obtenir le token d'authentification de l'utilisateur depuis les en-têtes.
    const authHeader = req.headers.get('Authorization')!;
    const jwt = authHeader.split('Bearer ')[1];

    // 2. Récupérer les informations de l'utilisateur à partir du token.
    const { data: { user }, error: userError } = await createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: `Bearer ${jwt}` } } },
    ).auth.getUser();

    if (userError) {
      console.error("Erreur lors de la récupération de l'utilisateur:", userError);
      return new Response(JSON.stringify({ error: userError.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    if (!user) {
      return new Response(JSON.stringify({ error: 'Utilisateur non trouvé' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }

    // 3. Utiliser le client admin pour supprimer l'utilisateur.
    // La suppression en cascade (ON DELETE CASCADE) dans la base de données
    // se chargera de supprimer le profil et les réponses au quiz associés.
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(user.id);

    if (deleteError) {
      console.error("Erreur lors de la suppression de l'utilisateur:", deleteError);
      throw deleteError;
    }

    // 4. Renvoyer une réponse de succès.
    return new Response(JSON.stringify({ message: 'Utilisateur et données supprimés avec succès' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});