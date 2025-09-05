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

  const handleSocialAuth = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          skipBrowserRedirect: true,
        },
      });
      
      if (error) {
        toast({
          title: "Erreur de connexion",
          description: `Erreur: ${error.message}`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Redirection en cours",
          description: "Une nouvelle fenêtre va s'ouvrir...",
        });
        
        if (data?.url) {
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
    <div className="screen-transition screen-visible min-h-screen flex items-center justify-center px-4 animate-fade-in">
      <div className="max-w-2xl w-full">
        {/* Hero Section with Pepps branding */}
        <div className="text-center mb-12 animate-zoom-in">
          <div className="mb-6">
            <div className="inline-block p-4 bg-pepps-yellow/10 rounded-2xl mb-4">
              <div className="w-16 h-16 mx-auto bg-pepps-indigo rounded-full flex items-center justify-center">
                <span className="text-2xl font-pepps-title font-bold text-white">P</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-pepps-title font-bold text-pepps-indigo mb-6 leading-tight">
            Le Grand Quiz<br />
            <span className="text-pepps-blue">Miroir des Mythes</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-pepps-title font-semibold text-pepps-yellow mb-4">
            Découvrez vos Super-Pouvoirs de Sensibles
          </h2>
          <p className="text-lg md:text-xl text-pepps-gray leading-relaxed max-w-xl mx-auto mb-8">
            Bienvenue dans cette expérience bienveillante ! <br />
            Laissez-nous vos coordonnées pour recevoir votre <strong className="text-pepps-indigo">rapport personnalisé</strong> et découvrir vos forces uniques.
          </p>
        </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pepps-mint/30 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstname" className="text-pepps-indigo font-pepps-body font-medium">Prénom *</Label>
            <Input
              id="firstname"
              type="text"
              placeholder="Votre prénom"
              value={userInfo.firstname}
              onChange={(e) => handleChange("firstname", e.target.value)}
              required
              className="h-12 border-pepps-mint/40 focus:border-pepps-blue focus:ring-pepps-blue/20 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname" className="text-pepps-indigo font-pepps-body font-medium">Nom *</Label>
            <Input
              id="lastname"
              type="text"
              placeholder="Votre nom"
              value={userInfo.lastname}
              onChange={(e) => handleChange("lastname", e.target.value)}
              required
              className="h-12 border-pepps-mint/40 focus:border-pepps-blue focus:ring-pepps-blue/20 rounded-xl"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-pepps-indigo font-pepps-body font-medium">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="votre@email.com"
            value={userInfo.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className="h-12 border-pepps-mint/40 focus:border-pepps-blue focus:ring-pepps-blue/20 rounded-xl"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-pepps-indigo font-pepps-body font-medium">Téléphone *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="06 XX XX XX XX"
            value={userInfo.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className="h-12 border-pepps-mint/40 focus:border-pepps-blue focus:ring-pepps-blue/20 rounded-xl"
          />
        </div>
        
        <div className="flex items-start space-x-3 p-4 bg-pepps-mint/10 rounded-xl">
          <Checkbox 
            id="consent" 
            checked={userInfo.consent}
            onCheckedChange={(checked) => 
              setUserInfo(prev => ({ ...prev, consent: checked === true }))
            }
            className="mt-1 border-pepps-blue data-[state=checked]:bg-pepps-blue"
          />
          <Label htmlFor="consent" className="text-sm text-pepps-gray leading-relaxed font-pepps-body">
            J'accepte de recevoir les communications bienveillantes de <strong className="text-pepps-indigo">La Fabrique Pepps</strong> et de découvrir mes super-pouvoirs de sensible ! ✨
          </Label>
        </div>
        
        <Button 
          type="submit" 
          variant="pepps"
          size="lg" 
          className="w-full text-xl h-14 rounded-xl font-pepps-title font-semibold"
        >
          🌟 Commencer mon Quiz Miroir 🌟
        </Button>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full border-pepps-mint/30" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-pepps-gray font-pepps-body">
              Ou connectez-vous simplement avec
            </span>
          </div>
        </div>
        
        <div className="mt-6">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full h-12 border-pepps-blue/30 text-pepps-indigo hover:bg-pepps-blue/10 hover:border-pepps-blue rounded-xl"
            onClick={handleSocialAuth}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
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
            <span className="font-pepps-body font-medium">Continuer avec Google</span>
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <p className="text-sm text-pepps-gray/70 font-pepps-body">
            🔒 Vos données sont <strong className="text-pepps-indigo">sécurisées</strong> et traitées avec la plus grande bienveillance
          </p>
        </div>
      </div>
      </form>
      </div>
    </div>
  );
}