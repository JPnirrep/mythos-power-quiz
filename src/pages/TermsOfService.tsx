import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
        
        <h1 className="text-3xl font-bold mb-8">Conditions d'Utilisation</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptation des conditions</h2>
            <p>
              En utilisant notre application de quiz, vous acceptez d'être lié par ces conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description du service</h2>
            <p>
              Notre service propose un quiz interactif conçu pour évaluer différents aspects de votre personnalité 
              et vous fournir des résultats personnalisés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Utilisation acceptable</h2>
            <p>Vous vous engagez à :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Fournir des informations exactes et à jour</li>
              <li>Utiliser le service de manière responsable</li>
              <li>Ne pas tenter de contourner ou d'endommager le système</li>
              <li>Respecter les droits d'autrui</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Propriété intellectuelle</h2>
            <p>
              Tout le contenu de cette application, y compris les questions du quiz, les algorithmes de notation 
              et les résultats, est protégé par les droits d'auteur et autres droits de propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation de responsabilité</h2>
            <p>
              Les résultats du quiz sont fournis à titre informatif uniquement et ne constituent pas 
              des conseils professionnels. Nous ne sommes pas responsables des décisions prises 
              sur la base de ces résultats.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. 
              Les modifications prendront effet dès leur publication sur cette page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              Pour toute question concernant ces conditions d'utilisation, 
              veuillez nous contacter à [votre-email@example.com].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;