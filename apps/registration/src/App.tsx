import { AuthProvider } from '@/contexts/AuthContext';
import { NavbarProvider } from '@/contexts/NavbarContext';
import { HomePage } from '@/pages/HomePage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<NavbarProvider><HomePage /></NavbarProvider>} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" />} />        
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

