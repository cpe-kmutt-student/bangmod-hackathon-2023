import { HomePage } from '@/pages/HomePage';
import { RegisterPage } from '@/pages/RegisterPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" />} />        
      </Routes>
    </BrowserRouter>
  );
};
