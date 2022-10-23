import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import InformationSection from "@/components/InformationSection";
import { Navbar } from "@/components/Navbar";
import { Qualification } from "@/components/Qualification";
import { Reward } from "@/components/Reward";
import { ScopeSection } from "@/components/ScopeSection";
import { TimeLineSection } from '@/components/TimeLineSection';

export const HomePage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />

      <Hero />

      <div className="w-full h-full">
        {/* <img
          src="bg2.webp"
          alt=""
          className="
            w-full absolute bottom-0 z-40 transform md:translate-y-[6rem]
          "
        /> */}

        <div
          className="
            relative bg-gradient-to-b from-[#3E245D] via-[#B04F9C] to-[#40245E] z-30
            md:mt-[5.75rem]
          "
        >
          <div className="w-full container space-y-48 py-24">
            <InformationSection />
            <Qualification />
            <Reward />
            <TimeLineSection />
            <ScopeSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};
