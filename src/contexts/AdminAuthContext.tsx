import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminAuthContextType {
  isAdminAuthenticated: boolean;
  adminLogin: (email: string, password: string) => Promise<boolean>;
  adminLogout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Vérification de l'état d'authentification au montage
    const checkAuthState = () => {
      try {
        const savedAuth = localStorage.getItem('admin_authenticated');
        if (savedAuth === 'true') {
          setIsAdminAuthenticated(true);
        }
      } catch (error) {
        console.warn('Erreur lors de la vérification de l\'auth admin:', error);
        setIsAdminAuthenticated(false);
      }
    };

    checkAuthState();

    // Écouter les changements dans localStorage (pour la synchronisation entre onglets)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'admin_authenticated') {
        setIsAdminAuthenticated(e.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const adminLogin = async (email: string, password: string): Promise<boolean> => {
    if (email === 'francis@vaya.rip' && password === 'R@ymonde7510') {
      setIsAdminAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminAuthenticated, adminLogin, adminLogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};