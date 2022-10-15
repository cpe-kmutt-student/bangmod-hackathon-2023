import Card from "@/components/Card";
import { useNavbar } from '@/contexts/NavbarContext';
import useInView from '@/hooks/useInView';
import { useEffect } from 'preact/hooks';

export const Qualification = () => {
  const { setVisibleSection } = useNavbar();
  const [isVisible, ref] = useInView<HTMLElement>({ threshold: 0.9 });

  useEffect(() => {
    isVisible && setVisibleSection('qualification');
  }, [isVisible]);

  return (
    <section ref={ref} id="qualification-section" className="h-full py-12 lg:py-24">
      <div className="w-fit mx-auto mb-8 px-8 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
        คุณสมบัติผู้สมัคร
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
        <Card
          img="qualification/team.webp"
          desc1="รับสมัครเป็นทีม "
          desc2="ทีมละ 2-3 คน"
        />
        <Card
          img="qualification/student.webp"
          desc1="ผู้สมัครต้องเป็นนักเรียนระดับชั้น มัธยมศึกษาตอนต้น, มัธยมศึกษาตอนปลาย หรือ นักศึกษาอาชีวศึกษาในระดับ  ปวช. หรือเทียบเท่า"
        />

        <div className="hidden md:block">
          <Card
            img="qualification/teacher.webp"
            desc1="อาจารย์ที่ปรึกษาทีม 1 คน "
            desc2="โดยอาจารย์ที่ปรึกษาต้องเป็น"
            desc3="อาจารย์ที่สอนในสถานศึกษานั้น ๆ"
          />
        </div>
        <div className="block md:hidden">
          <Card
            img="qualification/teacher.webp"
            desc1="อาจารย์ที่ปรึกษาทีม 1 คน โดยอาจารย์ที่ปรึกษาต้องเป็น อาจารย์ที่สอนในสถานศึกษานั้น ๆ"
          />
        </div>

        <div className="hidden md:block">
          <Card
            img="qualification/school.webp"
            desc1="แต่ละสถานศึกษาสามารถ"
            desc2="ส่งผู้เข้าแข่งขันได้มากที่สุด 2 ทีม"
          />
        </div>
        <div className="block md:hidden">
          <Card
            img="qualification/school.webp"
            desc1="แต่ละสถานศึกษาสามารถ ส่งผู้เข้าแข่งขันได้มากที่สุด 2 ทีม"
          />
        </div>
      </div>
    </section>
  );
};
