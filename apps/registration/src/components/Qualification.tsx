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
    <section ref={ref} className="flex flex-col justify-around items-center py-12 lg:py-24">
      
      <div id="qualification-section" className="pt-24 w-full flex justify-center h-full">
        <span className="w-fit mx-auto mb-8 px-8 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
        คุณสมบัติผู้สมัคร
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <div className='flex flex-wrap justify-center'>
          <Card
            img="qualification/team.webp"
            desc1="รับสมัครเป็นทีม "
            desc2="ทีมละ 2-3 คน"
            section = "qua"
          />
          <Card
          img="qualification/student.webp"
          desc1="ผู้สมัครต้องเป็นนักเรียนระดับชั้นมัธยมศึกษาตอนปลาย หรือ นักศึกษาอาชีวศึกษาในระดับ  ปวช. หรือเทียบเท่า"
          section = "qua"
        />
        </div>
        <div className='flex flex-wrap justify-center'>
            <Card
              img="qualification/teacher.webp"
              desc1="อาจารย์ที่ปรึกษาทีม 1 คน "
              desc2="โดยอาจารย์ที่ปรึกษาต้องเป็น อาจารย์ที่สอนในสถานศึกษานั้นๆ"
              section = "qua"

            />
            <Card
              img="qualification/school.webp"
              desc1="แต่ละสถานศึกษาสามารถ ส่งผู้เข้าแข่งขันได้มากที่สุด 2 ทีม"
              section = "qua"
            />
        </div>
      </div>

      <div className="bg-white p-3 md:p-10 rounded-3xl mb-8 mt-5 ">
        <div className="flex justify-center mx-auto py-4 bg-violet-400 rounded-xl md:text-2xl text-white font-bold shadow-xl">
          เอกสารที่ต้องใช้ในการสมัคร
        </div>
        <ul className="list-decimal p-3 ml-2 md:p-5 leading-loose text-purple-700 md:text-xl md:space-y-3">
          <li>รูปนักเรียนขนาด 1.5 นิ้ว</li>
          <li>สำเนาบัตรปชชผู้เข้าร่วมเฉพาะด้านหน้า / บัตรนักเรียน พร้อมลงชื่อสำเนาถูกต้องให้เรียบร้อย</li>
          <li>ปพ.7 ของผู้เข้าแข่งขันตัวจริง</li>
          <li>หนังสือรับรองของอาจารย์ที่ปรึกษาตัวจริง</li>
        </ul>
      </div> 
    </section>
  );
};
