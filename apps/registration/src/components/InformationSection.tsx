const InformationSection = () => {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <div className="flex mx-12 w-80 h-80 bg-white items-center justify-center border-2 border-white rounded-3xl">
        <img className="" src="./" alt="" />
      </div>
      <div>
        <div className="my-4 mx-4 py-3 px-2 max-w-3xl bg-yellow-600 rounded-xl border-8 border-yellow-600 text-center">
          <h1 className="text-4xl font-bold tracking-wider">
            Bangmod Hackathon 2023 คืออะไร ?
          </h1>
        </div>
        <div className="max-w-3xl p-4 my-4">
          <p className="text-xl tracking-wider leading-8">
            โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2023<br/>
            เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนต้น และตอนปลาย<br/>
            รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน<br/>
            โปรแกรม โดยใช้ภาษาซี ซึ่งการแข่งขันนั้นจะเป็นการแข่งขันในรูปแบบทีม<br/>
            ทำให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม<br/>
            และฝึกการทำงานร่วมกันเป็นทีมอีกด้วย
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
