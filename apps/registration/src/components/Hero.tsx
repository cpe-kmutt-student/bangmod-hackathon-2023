import { useNavbar } from '@/contexts/NavbarContext';
import useInView from '@/hooks/useInView';
import { useEffect, useRef } from 'preact/hooks';

export const Hero = () => {
  const { setVisibleSection } = useNavbar();
  const [isVisible, ref] = useInView<HTMLDivElement>();

  useEffect(() => {
    isVisible && setVisibleSection('none');
  }, [isVisible]);

  const backMountain = useRef<any>(null);
  const logo = useRef<HTMLHeadingElement>(null);

  const scrollParallax = () => {
    if (!backMountain.current || !logo.current) return;
    const y = window.scrollY;

    backMountain.current.style.transform = `scale(${((y * 0.0025) + 1)})`;

    if (window.innerWidth > 1024) return;
    logo.current.style.top = `${((y) * 1.05)}px`;
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollParallax);
    return () => {
      window.removeEventListener('scroll', scrollParallax);
    };
  }, [])

  return (
    <div ref={ref} className="w-full h-screen relative bg-gradient-to-b from-[#3E245D] via-[#EF4D91] to-[#FEEFA0]">
      <div
        ref={logo}
        className="
          z-20 w-full h-full absolute transform translate-y-48 2xl:-translate-y-36 2xl:flex 2xl:justify-center
          lg:z-20
          xl:z-40
        "
      >
        <img className="w-2/3 md:w-2/5 2xl:w-1/3 m-auto" src="logo.webp" alt="" />
      </div>
      <div className="absolute w-full h-screen">
        <div className="relative w-full h-full z-0 flex justify-center items-end">
          <img
            id="khoomBack1"
            className="absolute khoam scale-[2] md:scale-100"
            src="KHOOM-Back.svg"
            alt=""
          />
          <img
            id="khoomBack2"
            className="absolute khoam scale-[2] md:scale-100"
            src="KHOOM-Back.svg"
            alt=""
          />
          <img
            id="khoomMid"
            className="absolute khoam scale-[1.5] md:scale-100"
            src="KHOOM-Front.svg"
            alt=""
          />
          <img
            id="khoomFront"
            className="absolute khoam scale-[1.5] md:scale-100"
            src="KHOOM-Front1.svg"
            alt=""
          />
        </div>
      </div>
      <div className="absolute w-full bottom-0
        transform scale-[2.0] -translate-y-32 z-10
        md:scale-[1.5] md:-translate-y-24
        lg:scale-[1.0] lg:-translate-y-2
      ">
        <img
          ref={backMountain}
          className="w-full z-10"
          src="bg1.webp"
          alt=""
        />
        <div className="w-full -mt-2 h-8 md:h-32 lg:h-64 bg-[#8F4581]" />
      </div>
    </div>
  )
};
