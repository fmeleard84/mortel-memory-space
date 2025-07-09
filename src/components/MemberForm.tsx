import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface TeamMember {
  id?: string;
  prenom: string;
  nom: string;
  email: string;
  portable: string;
}

interface MemberFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<TeamMember, 'id'>) => void;
  member?: TeamMember;
  isLoading?: boolean;
}

export function MemberForm({ open, onClose, onSubmit, member, isLoading }: MemberFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<TeamMember, 'id'>>({
    defaultValues: member ? {
      prenom: member.prenom,
      nom: member.nom,
      email: member.email,
      portable: member.portable,
    } : {
      prenom: '',
      nom: '',
      email: '',
      portable: '',
    },
  });

  React.useEffect(() => {
    if (member) {
      reset({
        prenom: member.prenom,
        nom: member.nom,
        email: member.email,
        portable: member.portable,
      });
    } else {
      reset({
        prenom: '',
        nom: '',
        email: '',
        portable: '',
      });
    }
  }, [member, reset]);

  const handleFormSubmit = (data: Omit<TeamMember, 'id'>) => {
    onSubmit(data);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {member ? 'Modifier le membre' : 'Ajouter un membre'}
          </DialogTitle>
          <DialogDescription>
            {member 
              ? 'Modifiez les informations du membre de l\'équipe.' 
              : 'Ajoutez un nouveau membre à l\'équipe.'
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input
                id="prenom"
                {...register('prenom', { required: 'Le prénom est requis' })}
              />
              {errors.prenom && (
                <p className="text-sm text-destructive">{errors.prenom.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input
                id="nom"
                {...register('nom', { required: 'Le nom est requis' })}
              />
              {errors.nom && (
                <p className="text-sm text-destructive">{errors.nom.message}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { 
                required: 'L\'email est requis',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Format d\'email invalide'
                }
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="portable">Numéro de portable</Label>
            <Input
              id="portable"
              {...register('portable', { required: 'Le numéro de portable est requis' })}
            />
            {errors.portable && (
              <p className="text-sm text-destructive">{errors.portable.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Sauvegarde...' : (member ? 'Modifier' : 'Ajouter')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}