import Card from "@/components/Card";

export const Qualification = () => {
  return (
    <section className="h-full py-12">
      <div className="w-fit mx-auto mb-8 px-8 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
        คุณสมบัติผู้สมัคร
      </div>
      <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
        <Card
          img="qualification/team.png"
          desc1="รับสมัครเป็นทีม"
          desc2="ทีมละ 2-3 คน"
        />
        <Card
          img="qualification/student.png"
          desc1="ผู้สมัครต้องเป็นนักเรียนระดับชั้น มัธยมศึกษาตอนต้น, มัธยมศึกษาตอนปลาย หรือ นักศึกษาอาชีวศึกษาในระดับ  ปวช. หรือเทียบเท่า"
        />
        <Card
          img="qualification/teacher.png"
          desc1="อาจารย์ที่ปรึกษาทีม 1 คน "
          desc2="โดยอาจารย์ที่ปรึกษาต้องเป็น"
          desc3="อาจารย์ที่สอนในสถานศึกษานั้น ๆ"
        />
        <Card
          img="qualification/school.png"
          desc1="แต่ละสถานศึกษาสามารถ"
          desc2="ส่งผู้เข้าแข่งขันได้มากที่สุด 2 ทีม"
        />
      </div>
    </section>
  );
};
