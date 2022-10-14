import Card from "@/components/Card";
import { useNavbar } from '@/contexts/NavbarContext';
import useInView from '@/hooks/useInView';
import { useEffect } from 'preact/hooks';

export const Reward = () => {
  const { setVisibleSection } = useNavbar();
  const [isVisible, ref] = useInView<HTMLElement>();

  useEffect(() => {
    isVisible && setVisibleSection('reward');
  }, [isVisible]);

  return (
    <section ref={ref} id="reward-section" className="h-full">
      <div className="w-fit mx-auto mb-8 px-16 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
        รางวัล
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
        <Card
          img="reward/champion.webp"
          title="รางวัลชนะเลิศ"
          desc1="30,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="reward/first-medal.webp"
          title="รางวัลรองชนะเลิศอันดับหนึ่ง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="reward/second-medal.webp"
          title="รางวัลรองชนะเลิศอันดับสอง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
        <Card
          img="reward/bronze-medal.webp"
          title="รางวัลชมเชย"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
      </div>
    </section>
  );
};
