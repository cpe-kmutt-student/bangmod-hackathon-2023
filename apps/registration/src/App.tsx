import { HomePage } from '@/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
