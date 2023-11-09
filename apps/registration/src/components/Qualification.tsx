import Card from "@/components/Card";
import { useNavbar } from "@/contexts/NavbarContext";
import useInView from "@/hooks/useInView";
import { useEffect } from "preact/hooks";

export const Qualification = () => {
  const { setVisibleSection } = useNavbar();
  const [isVisible, ref] = useInView<HTMLElement>({ threshold: 0.9 });

  useEffect(() => {
    isVisible && setVisibleSection("qualification");
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="flex flex-col justify-around items-center py-12 lg:py-24"
    >
      <div
        id="qualification-section"
        className="pt-24 w-full flex justify-center h-full"
      >
        <span className="w-fit mx-auto mb-8 px-8 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
          คุณสมบัติผู้สมัคร
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-wrap justify-center">
          <Card
            img="qualification/team.svg"
            desc1="รับสมัครเป็นทีม "
            desc2="ทีมละ 2-3 คน"
            section="qua"
          />
          <Card
            img="qualification/student.svg"
            desc1="ผู้สมัครต้องเป็นนักเรียนระดับชั้นมัธยมศึกษาตอนปลาย หรือ นักศึกษาอาชีวศึกษาในระดับ  ปวช. หรือเทียบเท่า"
            section="qua"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <Card
            img="qualification/teacher.svg"
            desc1="อาจารย์ที่ปรึกษาทีมละ 1 คน "
            desc2="โดยอาจารย์ที่ปรึกษาต้องสอนในสถานศึกษาเดียวกันกับผู้เข้าแข่งขัน"
            section="qua"
          />
          <Card
            img="qualification/school.svg"
            desc1="แต่ละสถานศึกษาสามารถ"
            desc2="ส่งผู้เข้าแข่งขันได้ 2 ทีม"
            desc3="ต่อ 1 สถานศึกษาเท่านั้น"
            section="qua"
          />
        </div>
      </div>

      <div
        id="qualification-section"
        className="pt-24 w-full flex justify-center h-full"
      >
        <span className="w-fit mx-auto mb-8 px-8 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
          เอกสารที่ใช้ในการรับสมัคร
        </span>
      </div>

      <div className='flex flex-col justify-center items-center gap-8'>
        <span className="w-fit mx-auto px-8 py-4 bg-blue-600/50 rounded-xl text-2xl text-white font-bold shadow-xl">
          อาจารย์ที่ปรึกษา
        </span>
        <div className="flex flex-wrap justify-center">
          <Card
            img="qualification/idcard.svg"
            desc1="บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา"
            desc2="หรือบัตรประจำตัวสำหรับบุคคล"
            desc3="ที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)"
            section="docs"
          />
          <Card
            img="qualification/teacher_docs.svg"
            desc1="เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์"
            desc2="ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์, "
            desc3="บัตรข้าราชการครูและบุคลากรทางการศึกษา)"
            section="docs"
          />
        </div>

        <span className="w-fit mx-auto px-8 py-4 bg-blue-600/50 rounded-xl text-2xl text-white font-bold shadow-xl">
          นักเรียน
        </span>
        <div className="flex flex-wrap justify-center">
          <Card
            img="qualification/idcard.svg"
            desc1="บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคล ที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)"
            section="qua"
          />
          <Card
            img="qualification/student_docs.svg"
            desc1="ปพ.7 ของผู้เข้าแข่งขันฉบับจริง"
            section="qua"
          />
          <Card
            img="qualification/portrait.svg"
            desc1="รูปถ่ายนักเรียนผู้เข้าแข่งขัน"
            section="qua"
          />
        </div>
      </div>
    </section>
  );
};
