import { Contact } from '@/components/Contact';
import InformationSection from '@/components/InformationSection';
import { Navbar } from '@/components/Navbar';
import { Qualification } from '@/components/Qualification';
import { Reward } from '@/components/Reward';

export const HomePage = () => {
  return (
    <div className="h-full bg-gradient-to-b from-[#3E245D] via-[#EF4D91] to-[#FEEFA0]">
      <Navbar />

      <div className="h-full container">
        <InformationSection />
        <Qualification />
        <Reward />
        <Contact />
      </div>
    </div>
  );
};
