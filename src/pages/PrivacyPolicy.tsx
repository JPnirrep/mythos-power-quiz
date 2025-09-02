import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
        
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Collecte des informations</h2>
            <p>
              Nous collectons les informations que vous nous fournissez directement, telles que votre nom, 
              votre adresse e-mail et votre numéro de téléphone lorsque vous utilisez notre quiz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Utilisation des informations</h2>
            <p>
              Nous utilisons vos informations pour :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Personnaliser votre expérience du quiz</li>
              <li>Vous fournir vos résultats</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Partage des informations</h2>
            <p>
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers 
              sans votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Sécurité</h2>
            <p>
              Nous prenons des mesures appropriées pour protéger vos informations personnelles 
              contre l'accès, la modification, la divulgation ou la destruction non autorisés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Vos droits</h2>
            <p>
              Vous avez le droit d'accéder, de modifier ou de supprimer vos informations personnelles. 
              Pour exercer ces droits, contactez-nous.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, 
              veuillez nous contacter à [votre-email@example.com].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;