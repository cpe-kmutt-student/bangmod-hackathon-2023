import Card from "@/components/Card";

export const Reward = () => {
  return (
    <section className="h-full py-12">
      <div className="w-fit mx-auto mb-8 px-16 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
        รางวัล
      </div>
      <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
        <Card
          img="reward/champion.png"
          title="รางวัลชนะเลิศ"
          desc1="30,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="reward/first-medal.png"
          title="รางวัลรองชนะเลิศอันดับหนึ่ง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="reward/second-medal.png"
          title="รางวัลรองชนะเลิศอันดับสอง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="reward/bronze-medal.png"
          title="รางวัลชมเชย"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
      </div>
    </section>
  );
};
