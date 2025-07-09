import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Copy } from 'lucide-react';
import { MemberForm } from '@/components/MemberForm';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TeamMember {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  portable: string;
  created_at: string;
}

interface AvailabilityStatus {
  id: string;
  member_id: string;
  is_available: boolean;
  updated_at: string;
}

export default function AdminEquipe() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [availabilityStatus, setAvailabilityStatus] = useState<AvailabilityStatus[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchMembers();
    fetchAvailabilityStatus();
  }, []);

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les membres",
        variant: "destructive",
      });
    } else {
      setMembers(data || []);
    }
  };

  const fetchAvailabilityStatus = async () => {
    const { data, error } = await supabase
      .from('availability_status')
      .select('*');

    if (error) {
      console.error('Error fetching availability:', error);
    } else {
      setAvailabilityStatus(data || []);
    }
  };

  const handleAddMember = async (memberData: Omit<TeamMember, 'id' | 'created_at'>) => {
    setIsLoading(true);
    const { error } = await supabase
      .from('team_members')
      .insert([memberData]);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter le membre",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Membre ajouté avec succès",
      });
      fetchMembers();
      fetchAvailabilityStatus();
      setIsFormOpen(false);
    }
    setIsLoading(false);
  };

  const handleEditMember = async (memberData: Omit<TeamMember, 'id' | 'created_at'>) => {
    if (!editingMember) return;
    
    setIsLoading(true);
    const { error } = await supabase
      .from('team_members')
      .update(memberData)
      .eq('id', editingMember.id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de modifier le membre",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Membre modifié avec succès",
      });
      fetchMembers();
      setIsFormOpen(false);
      setEditingMember(undefined);
    }
    setIsLoading(false);
  };

  const handleDeleteMember = async (memberId: string) => {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', memberId);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer le membre",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Membre supprimé avec succès",
      });
      fetchMembers();
      fetchAvailabilityStatus();
    }
  };

  const copyMemberUrl = (memberId: string) => {
    const url = `${window.location.origin}/equipe/${memberId}`;
    navigator.clipboard.writeText(url);
    toast({
      title: "URL copiée",
      description: "L'URL de disponibilité a été copiée dans le presse-papier",
    });
  };

  const getAvailabilityForMember = (memberId: string) => {
    return availabilityStatus.find(status => status.member_id === memberId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Gestion de l'équipe</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un membre
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nom complet</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Portable</TableHead>
              <TableHead>Disponibilité</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => {
              const availability = getAvailabilityForMember(member.id);
              return (
                <TableRow key={member.id}>
                  <TableCell className="font-mono text-xs">
                    {member.id.slice(0, 8)}...
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2 h-6 w-6 p-0"
                      onClick={() => copyMemberUrl(member.id)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    {member.prenom} {member.nom}
                  </TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.portable}</TableCell>
                  <TableCell>
                    <Badge variant={availability?.is_available ? "default" : "secondary"}>
                      {availability?.is_available ? "Disponible" : "Indisponible"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingMember(member);
                          setIsFormOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                            <AlertDialogDescription>
                              Êtes-vous sûr de vouloir supprimer {member.prenom} {member.nom} ?
                              Cette action est irréversible.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteMember(member.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <MemberForm
        open={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingMember(undefined);
        }}
        onSubmit={editingMember ? handleEditMember : handleAddMember}
        member={editingMember}
        isLoading={isLoading}
      />
    </div>
  );
}