import Card from '@/components/Card';

export const Reward = () => 
{
    return <>
    <div className="p-20 grid grid-cols-4 gap-8">
        <div className="col-start-4 col-end-4 max-w-full pb-3">
            <span className="px-4 py-4 bg-amber-500 rounded-lg text-2xl block text-white font-bold text-center shadow-xl">รางวัล </span>
        </div>
      <Card
          img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medal-design-template-89182c980b9f3214cca1dca00b3d27b4_screen.jpg?ts=1621433255"
          title="รางวัลชนะเลิศ"
          desc1="30,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
          <Card
          img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medal-design-template-89182c980b9f3214cca1dca00b3d27b4_screen.jpg?ts=1621433255"
          title="รางวัลรองชนะเลิศอันดับหนึ่ง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
          <Card
          img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medal-design-template-89182c980b9f3214cca1dca00b3d27b4_screen.jpg?ts=1621433255"
          title="รางวัลรองชนะเลิศอันดับสอง"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
          <Card
          img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medal-design-template-89182c980b9f3214cca1dca00b3d27b4_screen.jpg?ts=1621433255"
          title="รางวัลชมเชย"
          desc1="15,000 บาท"
          desc2="พร้อมโล่ประกาศเกียรติคุณ"
        />
      </div>
    </>
}