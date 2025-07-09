-- Créer la table des membres de l'équipe
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  portable TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Créer la table des statuts de disponibilité
CREATE TABLE public.availability_status (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  member_id UUID NOT NULL REFERENCES public.team_members(id) ON DELETE CASCADE,
  is_available BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(member_id)
);

-- Activer Row Level Security
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability_status ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour team_members (accès public en lecture, modification pour admin seulement)
CREATE POLICY "Public can view team members" ON public.team_members FOR SELECT USING (true);
CREATE POLICY "Admin can manage team members" ON public.team_members FOR ALL USING (true);

-- Politiques RLS pour availability_status (accès public en lecture, modification pour les membres et admin)
CREATE POLICY "Public can view availability" ON public.availability_status FOR SELECT USING (true);
CREATE POLICY "Anyone can update availability" ON public.availability_status FOR ALL USING (true);

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour updated_at
CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_availability_status_updated_at
  BEFORE UPDATE ON public.availability_status
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Fonction pour créer automatiquement un statut de disponibilité pour chaque nouveau membre
CREATE OR REPLACE FUNCTION public.create_default_availability()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.availability_status (member_id, is_available)
  VALUES (NEW.id, false);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour créer automatiquement la disponibilité
CREATE TRIGGER create_availability_on_member_insert
  AFTER INSERT ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.create_default_availability();