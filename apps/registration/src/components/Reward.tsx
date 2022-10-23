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
    <section ref={ref} id="reward-section" className="min-h-screen flex flex-col justify-center items-center py-12 lg:py-24">
      <div className="w-fit mx-auto mb-8 px-16 py-4 bg-yellow-600 rounded-xl text-2xl text-white font-bold shadow-xl">
        รางวัล
      </div>
      <div className="flex flex-row flex-wrap justify-center">
      <div className='flex flex-wrap justify-center'>
          <Card
            img="reward/champion.webp"
            title="รางวัลชนะเลิศ"
            desc1="30,000 บาท"
            desc2="พร้อมโล่รางวัลประกาศเกียรติคุณ"
            section="reward"
          />
          <Card
            img="reward/first-medal.webp"
            title="รางวัลรองชนะเลิศอันดับ 1"
            desc1="15,000 บาท"
            desc2="พร้อมโล่รางวัลประกาศเกียรติคุณ"
            section="reward"

        />
        </div>
        <div className='flex flex-wrap justify-center'>
          <Card
            img="reward/second-medal.webp"
            title="รางวัลรองชนะเลิศอันดับ 2"
            desc1="5,000 บาท"
            desc2="พร้อมโล่รางวัลประกาศเกียรติคุณ"
            section="reward"
          />
          <Card
            img="reward/bronze-medal.webp"
            title="รางวัลชมเชย 2 รางวัล"
            desc1="รางวัลละ 2,000 บาท"
            section="reward"
          />
        </div>
      </div>
    </section>
  );
};
