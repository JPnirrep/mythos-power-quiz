import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(userInfo);
  };

  const handleChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="screen-transition screen-visible">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 font-pepps-title text-primary">
        Le Grand Quiz Miroire des Mythes
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
        <Button 
          type="submit" 
          variant="pepps" 
          size="lg" 
          className="w-full text-lg"
        >
          Commencer le Quiz
        </Button>
      </form>
    </div>
  );
}