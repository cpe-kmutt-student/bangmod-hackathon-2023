import Card from "@/components/Card";

export const Reward = () => {
  return (
    <>
      <div className="p-20 grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8 -mb-16">

        <div className="md:col-start-1 md:col-end-3 lg:col-start-4 lg:col-end-4 max-w-full mb-2">
          <span className="px-4 py-4 bg-[#DB9116] rounded-3xl text-2xl block text-white font-bold text-center shadow-xl">
            รางวัล{" "}
          </span>

        </div>
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          title="รางวัลชนะเลิศ"
          desc1="30,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          title="รางวัลรองชนะเลิศอันดับหนึ่ง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          title="รางวัลรองชนะเลิศอันดับสอง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="https://cdn-icons-png.flaticon.com/512/1157/1157014.png"
          title="รางวัลชมเชย"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
      </div>
    </>
  );
};
