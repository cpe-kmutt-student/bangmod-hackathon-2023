import { Welcome } from '@/components/Welcome';
import { Navbar } from '@/components/Navbar';
import { Background } from '@/components/Hero';

export const HomePage = () => {
  return (
    <div className="relative w-full h-[100vh] bg-gradient-to-b from-[#3E245D] via-[#EF4D91] to-[#FEEFA0]">
      <Navbar />
      <Background />
      <Welcome />
    </div>
  );
};
