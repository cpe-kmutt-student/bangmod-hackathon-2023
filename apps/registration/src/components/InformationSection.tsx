const InformationSection = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center md:space-x-8 text-white">
      <div className="md:hidden w-fit mb-8 px-16 py-4 text-xl font-bold bg-yellow-600 rounded-xl">
        รายละเอียด
      </div>

      <div className="w-2/4 mb-4 md:mb-0 md:w-1/3 mx-auto">
        <img className="bg-white p-3 rounded-[2.5rem]" src="bmh-old-photo.png" alt="" />
      </div>

      <div className="w-3/4 md:w-2/3 flex flex-col">
        <div className="hidden md:block w-fit px-8 py-4 text-xl font-bold bg-yellow-600 rounded-xl">
          Bangmod Hackathon 2023 คืออะไร ?
        </div>
        <p className="mt-4 text-center md:text-left text-base tracking-wider leading-8">
          โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2023
          เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนต้น และตอนปลาย
          รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน
          โปรแกรม โดยใช้ภาษาซี ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันในรูปแบบทีม
          ทำให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม
          และฝึกการทำงานร่วมกันเป็นทีมอีกด้วย
        </p>
      </div>
    </div>
  );
};

export default InformationSection;
