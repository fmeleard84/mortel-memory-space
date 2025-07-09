
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DemarchesAdministratives from "./pages/DemarchesAdministratives";
import BlogHome from "./pages/BlogHome";
import BlogArticle from "./pages/BlogArticle";
import AdminBlog from "./pages/AdminBlog";
import BlogForm from "./pages/BlogForm";
import NotFound from "./pages/NotFound";
import { ConseillerProvider } from './components/contexts/ConseillerContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { AdminLayout } from './components/AdminLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import AdminLogin from './pages/AdminLogin';
import AdminEquipe from './pages/AdminEquipe';
import EquipeDisponibilite from './pages/EquipeDisponibilite';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    <AdminAuthProvider>
      <ConseillerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demarches-administratives" element={<DemarchesAdministratives />} />
            
            {/* Routes Blog */}
            <Route path="/souffle" element={<BlogHome />} />
            <Route path="/souffle/article/:slug" element={<BlogArticle />} />
            
            {/* Routes Admin */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route path="equipe" element={<AdminEquipe />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="blog/nouveau" element={<BlogForm />} />
              <Route path="blog/modifier/:id" element={<BlogForm />} />
            </Route>
            
            {/* Route disponibilité (non-référencée) */}
            <Route path="/equipe/:userId" element={<EquipeDisponibilite />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ConseillerProvider>
    </AdminAuthProvider>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
