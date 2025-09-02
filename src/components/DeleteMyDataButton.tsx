import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Trash2 } from "lucide-react";

export const DeleteMyDataButton = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteData = async () => {
    setIsDeleting(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Erreur",
          description: "Vous devez être connecté pour supprimer vos données.",
          variant: "destructive",
        });
        return;
      }

      // Delete quiz responses first (foreign key constraint)
      const { error: quizError } = await supabase
        .from('quiz_responses')
        .delete()
        .eq('user_id', user.id);

      if (quizError) {
        console.error('Error deleting quiz responses:', quizError);
        throw quizError;
      }

      // Delete profile
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('user_id', user.id);

      if (profileError) {
        console.error('Error deleting profile:', profileError);
        throw profileError;
      }

      // Sign out the user
      await supabase.auth.signOut();

      toast({
        title: "Données supprimées",
        description: "Toutes vos données ont été supprimées avec succès. Vous avez été déconnecté.",
      });

      // Redirect to home page after a short delay
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (error) {
      console.error('Error deleting user data:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la suppression de vos données. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm" className="gap-2">
          <Trash2 className="h-4 w-4" />
          Supprimer mes données
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action ne peut pas être annulée. Cela supprimera définitivement
            toutes vos données personnelles, y compris :
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Vos informations de profil</li>
              <li>Vos réponses au quiz</li>
              <li>Vos résultats</li>
            </ul>
            Vous serez automatiquement déconnecté après la suppression.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteData}
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? "Suppression..." : "Oui, supprimer mes données"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};