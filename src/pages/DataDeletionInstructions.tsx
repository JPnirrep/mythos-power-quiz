import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DataDeletionInstructions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          ← Retour
        </Button>
        
        <h1 className="text-3xl font-bold mb-8">Instructions de Suppression des Données</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Suppression de vos données personnelles</h2>
            <p>
              Si vous souhaitez supprimer vos données personnelles de notre application, 
              veuillez suivre les instructions ci-dessous :
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Comment supprimer vos données</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Envoyez un email à notre équipe support</li>
              <li>Incluez votre adresse email utilisée pour l'inscription</li>
              <li>Précisez votre demande de suppression complète des données</li>
              <li>Nous traiterons votre demande sous 30 jours</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Données concernées</h2>
            <p>La suppression comprendra :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Vos informations de profil (nom, prénom, email, téléphone)</li>
              <li>Vos réponses au quiz</li>
              <li>Vos résultats et préférences</li>
              <li>Toutes les données associées à votre compte</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Délai de traitement</h2>
            <p>
              Votre demande sera traitée dans un délai maximum de 30 jours calendaires 
              à compter de la réception de votre demande. Vous recevrez une confirmation 
              par email une fois la suppression effectuée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>
              Pour toute demande de suppression de données, contactez-nous à :
            </p>
            <p className="font-medium text-foreground mt-2">
              [votre-email@example.com]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionInstructions;