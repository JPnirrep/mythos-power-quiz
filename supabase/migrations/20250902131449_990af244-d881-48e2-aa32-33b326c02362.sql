-- Add DELETE policies for user self-service data deletion

-- Allow users to delete their own profile
CREATE POLICY "Users can delete their own profile" 
ON public.profiles 
FOR DELETE 
USING (auth.uid() = user_id);

-- Allow users to delete their own quiz responses
CREATE POLICY "Users can delete their own quiz responses" 
ON public.quiz_responses 
FOR DELETE 
USING (auth.uid() = user_id);