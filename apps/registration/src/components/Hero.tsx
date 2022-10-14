import { useEffect, useRef, useState } from 'preact/hooks';

export const Hero = () => {
  const [needParallax, setNeedParallax] = useState<boolean>(false);
  const backMountain = useRef<HTMLHeadingElement>(null);
  const logo = useRef<HTMLHeadingElement>(null);

  const scrollParallax = () => {
    if (!needParallax) return;
    let value = window.scrollY;
    backMountain.current && value < 1200 && (backMountain.current.style.transform = "scale(" + ((value * 0.0025 )+1).toString() + ")");
    logo.current && value < 1200 && (logo.current.style.top =  ((value)*1.05).toString() + "px");
  }

  useEffect(() => {
    const checkParallax = () => {
      if (window.innerWidth < 820 && needParallax) {
        setNeedParallax(false);
      }
      if (window.innerWidth >= 820 && !needParallax) {
        setNeedParallax(true);
      }
    };
    checkParallax();
    window.addEventListener('resize', checkParallax);
    window.addEventListener('scroll', scrollParallax);
    return () => {
      window.removeEventListener('resize', checkParallax);
      window.removeEventListener('scroll', scrollParallax);
    };
  }, [needParallax])

  return (
    <div className="w-full h-screen relative md:absolute 2xl:relative bg-gradient-to-b from-[#3E245D] via-[#EF4D91] to-[#FEEFA0] z-10 overflow-hidden">
      <div className="w-full h-full absolute transform translate-y-48 2xl:translate-y-24 2xl:flex 2xl:justify-center 2xl:-translate-y-4" ref={logo}>
        <img className="w-2/3 md:w-2/5 2xl:w-1/3 m-auto" src="KHOOM-Back.svg" alt="" />
      </div>
      <div className="w-full h-full absolute transform translate-y-48 2xl:translate-y-24 2xl:flex 2xl:justify-center 2xl:-translate-y-4" ref={logo}>
        <img className="w-2/3 md:w-2/5 2xl:w-1/3 m-auto" src="logo.webp" alt="" />
      </div>
      <div className="relative w-full h-full 2xl:hidden" ref={backMountain}>
        <img className="absolute bottom-0 transform md:relative md:translate-y-48" src="bg1.webp" alt="" />
        <div className="hidden md:block absolute w-full h-48 bg-[#3E245D] transform translate-y-48" />
      </div>
    </div>
  )
};
