import { Welcome } from '@/components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};
