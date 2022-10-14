import { Hero } from '@/components/Hero';
import InformationSection from "@/components/InformationSection";
import { Navbar } from "@/components/Navbar";
import { Qualification } from "@/components/Qualification";
import { Reward } from "@/components/Reward";
import { ScopeSection } from "@/components/ScopeSection";
import { ContactSection } from '@/components/ContactSection';

export const HomePage = () => {
  return (
    <div className="h-full bg-[#8C4380] overflow-hidden">
      <Navbar />

      <Hero />

      <img className="hidden md:block 2xl:hidden relative transform translate-y-2 z-30 pt-96 overflow-hidden" src="bg2.webp" alt="" />

      <div className="relative bg-gradient-to-b from-[#3E245D] via-[#B04F9C] to-[#40245E] z-40">
        <div className="w-full container space-y-24 py-24">
          <InformationSection />
          <Qualification />
          <Reward />
          <ScopeSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};
