import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TeamMember {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  portable: string;
}

interface AvailabilityStatus {
  id: string;
  member_id: string;
  is_available: boolean;
  updated_at: string;
}

export default function EquipeDisponibilite() {
  const { userId } = useParams<{ userId: string }>();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [availability, setAvailability] = useState<AvailabilityStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (userId) {
      fetchMemberAndAvailability();
    }
  }, [userId]);

  const fetchMemberAndAvailability = async () => {
    if (!userId) return;

    try {
      // Fetch member data
      const { data: memberData, error: memberError } = await supabase
        .from('team_members')
        .select('*')
        .eq('id', userId)
        .single();

      if (memberError) {
        toast({
          title: "Erreur",
          description: "Membre introuvable",
          variant: "destructive",
        });
        return;
      }

      setMember(memberData);

      // Fetch availability status
      const { data: availabilityData, error: availabilityError } = await supabase
        .from('availability_status')
        .select('*')
        .eq('member_id', userId)
        .single();

      if (availabilityError) {
        console.error('Error fetching availability:', availabilityError);
      } else {
        setAvailability(availabilityData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setPageLoading(false);
    }
  };

  const updateAvailability = async (isAvailable: boolean) => {
    if (!userId) return;

    setIsLoading(true);
    
    const { error } = await supabase
      .from('availability_status')
      .upsert({
        member_id: userId,
        is_available: isAvailable,
      }, {
        onConflict: 'member_id'
      });

    if (error) {
      console.error('Error updating availability:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la disponibilité",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: `Vous êtes maintenant ${isAvailable ? 'disponible' : 'indisponible'}`,
      });
      
      // Update local state
      setAvailability(prev => prev ? { ...prev, is_available: isAvailable, updated_at: new Date().toISOString() } : null);
    }
    
    setIsLoading(false);
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-destructive">Erreur</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Membre introuvable. Vérifiez l'URL et réessayez.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Bonjour {member.prenom} !
          </CardTitle>
          <CardDescription>
            Gérez votre disponibilité en temps réel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">État actuel :</p>
            <Badge 
              variant={availability?.is_available ? "default" : "secondary"}
              className="text-sm px-4 py-2"
            >
              {availability?.is_available ? "Disponible" : "Indisponible"}
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <Button
              onClick={() => updateAvailability(true)}
              disabled={isLoading || availability?.is_available === true}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isLoading && availability?.is_available !== true ? 'Mise à jour...' : 'Je suis disponible'}
            </Button>
            
            <Button
              onClick={() => updateAvailability(false)}
              disabled={isLoading || availability?.is_available === false}
              variant="outline"
              className="w-full border-red-600 text-red-600 hover:bg-red-50"
            >
              {isLoading && availability?.is_available !== false ? 'Mise à jour...' : 'Je suis indisponible'}
            </Button>
          </div>

          {availability?.updated_at && (
            <p className="text-xs text-muted-foreground text-center">
              Dernière mise à jour : {new Date(availability.updated_at).toLocaleString('fr-FR')}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}