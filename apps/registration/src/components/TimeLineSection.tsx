import { TimeLineCard } from "@/components/TimeLineCard";
import { TimeLinePoint } from "@/components/TimeLinePoint";
export const TimeLineSection = () => {
  return (
    <section className="h-full space-y-10">
      <div className="w-fit mx-auto mb-8 px-8  py-4 bg-yellow-600 rounded-xl text-base lg:text-2xl text-white font-bold shadow-xl text-center">
        ไทม์ไลน์
      </div>

      <div className="relative h-full w-full lg:grid lg:grid-cols-10 place-items-center">
        {/* Line Start */}
        <div className="absolute h-full w-full flex items-center justify-center">
          <div className="bg-white w-2 h-full lg:w-full lg:h-3 rounded-xl"></div>
        </div>
        {/* Line End */}
        {/* TimeLine Start */}

        <div className="grid grid-cols-9 lg:grid-rows-5  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard title="เปิดรับสมัคร" date="24 Oct 2022" />
          </div>
          <div className="col-span-1 place-self-center items-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard title="ปิดรับสมัคร" date="28 Nov 2022" />
          </div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="การแข่งขันรอบคัดเลือก(Online)"
              date="20 Dec 2022"
            />
          </div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2 lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="ประกาศผลผู้ที่ผ่านการคัดเลือกรอบแรก"
              date="21 Dec 2022"
            />
          </div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2 lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="การแข่งขันรอบ Semi Final และรอบชิงชนะเลิศ (On-site)"
              date="19 Jan 2023"
            />
          </div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint />
          </div>
          <div className="col-span-4 lg:col-span-none  lg:row-span-2"></div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="ประกาศผลผู้ผ่านการคัดเลือกรอบ Semi Final และชิงชนะเลิศ"
              date="19 Jan 2023"
            />
          </div>
        </div>
        {/* TimeLine end */}
      </div>
    </section>
  );
};
