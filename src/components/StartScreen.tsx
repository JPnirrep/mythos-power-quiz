import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface StartScreenProps {
  onStart: (userInfo: UserInfo) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    consent: false,
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(userInfo);
  };

  const handleChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialAuth = async (provider: 'google' | 'facebook') => {
    console.log('🔵 Début de handleSocialAuth avec provider:', provider);
    
    try {
      console.log('🔵 Tentative de connexion OAuth...');
      console.log('🔵 URL de redirection:', `${window.location.origin}/`);
      console.log('🔵 Client Supabase disponible:', !!supabase);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          skipBrowserRedirect: true, // Récupère l'URL au lieu de rediriger
        },
      });
      
      console.log('🔵 Réponse OAuth complète:', { data, error });
      
      if (error) {
        console.error('🔴 Erreur OAuth:', error);
        toast({
          title: "Erreur de connexion",
          description: `Erreur: ${error.message}`,
          variant: "destructive",
        });
      } else {
        console.log('🟢 OAuth initié avec succès, redirection en cours...');
        toast({
          title: "Redirection en cours",
          description: "Une nouvelle fenêtre va s'ouvrir pour Google...",
        });
        
        // Si nous avons une URL, l'ouvrir dans une nouvelle fenêtre
        if (data?.url) {
          console.log('🔵 Ouverture de:', data.url);
          window.open(data.url, '_blank', 'width=500,height=600,scrollbars=yes');
        }
      }
    } catch (error) {
      console.error('🔴 Erreur catch complète:', error);
      toast({
        title: "Erreur de connexion",
        description: `Erreur technique: ${error}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="screen-transition screen-visible">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 font-pepps-title text-primary">
        Le Grand Quiz Miroir des Mythes
      </h1>
      <p className="text-center text-lg mb-2 text-accent font-medium">
        Découvrez vos Super-Pouvoirs de Sensibles
      </p>
      <p className="text-center mb-8 text-muted-foreground font-pepps-body">
        Bienvenue ! Avant de commencer cette expérience ludique, merci de nous laisser vos coordonnées pour recevoir votre rapport personnalisé.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Prénom"
            value={userInfo.firstname}
            onChange={(e) => handleChange("firstname", e.target.value)}
            required
            className="focus:ring-secondary focus:border-secondary"
          />
          <Input
            type="text"
            placeholder="Nom"
            value={userInfo.lastname}
            onChange={(e) => handleChange("lastname", e.target.value)}
            required
            className="focus:ring-secondary focus:border-secondary"
          />
        </div>
        <Input
          type="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
          className="focus:ring-secondary focus:border-secondary"
        />
        <Input
          type="tel"
          placeholder="Téléphone"
          value={userInfo.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          required
          className="focus:ring-secondary focus:border-secondary"
        />
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox 
            id="consent" 
            checked={userInfo.consent}
            onCheckedChange={(checked) => 
              setUserInfo(prev => ({ ...prev, consent: checked === true }))
            }
          />
          <Label htmlFor="consent" className="text-sm text-muted-foreground">
            J'accepte de recevoir des communications de La Fabrique Pepps
          </Label>
        </div>
        <Button 
          type="submit" 
          variant="pepps" 
          size="lg" 
          className="w-full text-lg"
        >
          Commencer le Quiz
        </Button>
      </form>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Ou connectez-vous avec
            </span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-3">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => {
              console.log('🔵 Clic sur le bouton Google détecté!');
              handleSocialAuth('google');
            }}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continuer avec Google
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => handleSocialAuth('facebook')}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continuer avec Facebook
          </Button>
        </div>
      </div>
    </div>
  );
}