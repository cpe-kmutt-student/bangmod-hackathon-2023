import { useNavbar } from '@/contexts/NavbarContext';
import useInView from '@/hooks/useInView';
import { useEffect } from 'preact/hooks';

const InformationSection = () => {
  const { setVisibleSection } = useNavbar();
  const [isVisible, ref] = useInView<HTMLElement>();

  useEffect(() => {
    isVisible && setVisibleSection('info');
  }, [isVisible]);

  return (
    <section ref={ref} id="information-section" className="flex flex-col h-screen md:flex-row justify-center items-center md:space-x-8 text-white py-12 lg:py-24">
      <div className="md:hidden w-fit mb-8 px-16 py-4 text-xl font-bold bg-yellow-600 rounded-xl">
        รายละเอียด
      </div>

      <div className="mb-4 md:mb-0 mx-auto">
        <img className="bg-white p-3 rounded-[2.5rem]" src="bmh-old-photo.webp" alt="" />
      </div>

      <div className="w-fit flex flex-col">
        <div className="hidden md:block w-fit px-8 py-4 text-xl font-bold bg-yellow-600 rounded-xl">
          Bangmod Hackathon 2024 คืออะไร ?
        </div>
        <p className="mt-4 text-center md:text-left text-sm tracking-wider leading-8 max-w-xl">
          โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2024
          เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลาย
          นักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียนโปรแกรม
          โดยใช้ ภาษา C หรือ C++  ซึ่งกิจกรรมนี้จะช่วยทําให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ 
          ในการเขียนโปรแกรม และฝึกการทํางานร่วมกันเป็นทีมอีกด้วย
        </p>
      </div>
    </section>
  );
};

export default InformationSection;
