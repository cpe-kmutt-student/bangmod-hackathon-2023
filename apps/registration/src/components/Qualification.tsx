import Card from "@/components/Card";

export const Qualification = () => {
  return (
    <>
      <div className="p-20 grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8 -mb-16">

        <div className="md:col-start-1 md:col-span-2 lg:col-start-1 lg:col-end-1 max-w-full mb-2">
          <span className="px-4 py-4 bg-[#DB9116] rounded-3xl text-2xl block text-white font-bold text-center shadow-xl">
            คุณสมบัติผู้สมัคร
          </span>
        </div>
        <div className="md:col-start-1 md:col-span-2 lg:col-start-2 lg:col-end-5"></div>
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          desc1="รับสมัครเป็นทีม"
          desc2="ทีมละ 2-3 คน"
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          desc1="ผู้สมัครต้องเป็นนักเรียนระดับชั้น"
          desc2="มัธยมศึกษาตอนต้น, มัธยมศึกษาตอนปลาย "
          desc3="หรือ นักศึกษาอาชีวศึกษาในระดับ  ปวช. หรือเทียบเท่า"
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          desc1="อาจารย์ที่ปรึกษาทีม 1 คน "
          desc2="โดยอาจารย์ที่ปรึกษาต้องเป็น"
          desc3="อาจารย์ที่สอนในสถานศึกษานั้น ๆ"
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          desc1="แต่ละสถานศึกษาสามารถ"
          desc2="ส่งผู้เข้าแข่งขันได้มากที่สุด 2 ทีม"
        />
      </div>
    </>
  );
};
