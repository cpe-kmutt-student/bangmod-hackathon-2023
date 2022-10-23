import { HorizontalTimeline } from "@/components/HorizontalTimeline";
import { TimeLineCard } from "@/components/TimeLineCard";
import { TimeLinePoint } from "@/components/TimeLinePoint";
import { useNavbar } from "@/contexts/NavbarContext";
import useInView from "@/hooks/useInView";
import { useEffect } from "preact/hooks";

export const TimeLineSection = () => {
  const { setVisibleSection } = useNavbar();
  const [isVisible, ref] = useInView<HTMLElement>();

  useEffect(() => {
    isVisible && setVisibleSection("timeline");
  }, [isVisible]);

  return (
    <section ref={ref} id="timeline-section" className="h-full py-12 lg:py-24">
      <div className="w-fit mx-auto mb-8 px-8  py-4 bg-yellow-600 rounded-xl text-base lg:text-2xl text-white font-bold shadow-xl text-center">
        ไทม์ไลน์
      </div>

      <div className="hidden sm:flex flex-col space-y-2">
        <HorizontalTimeline />
      </div>

      <div className="sm:hidden relative h-full w-full place-items-center">
        <div className="absolute h-full w-full flex items-center justify-center">
          <div className="bg-white w-2 h-full lg:w-full lg:h-3 rounded-xl"></div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="เปิดรับสมัคร"
              display="24 Oct 2022"
              startTime="24 Oct 2022 00:00:00 GMT+0700"
              endTime="28 Nov 2022 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-1 place-self-center items-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint
              startTime="24 Oct 2022 00:00:00 GMT+0700"
              endTime="28 Nov 2022 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint
              startTime="29 Nov 2022 00:00:00 GMT+0700"
              endTime="19 Dec 2022 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="ปิดรับสมัคร"
              display="29 Nov 2022"
              startTime="29 Nov 2022 00:00:00 GMT+0700"
              endTime="19 Dec 2022 23:59:59 GMT+0700"
            />
          </div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="การแข่งขันรอบคัดเลือก(Online)"
              display="20 Dec 2022"
              startTime="20 Dec 2022 00:00:00 GMT+0700"
              endTime="20 Dec 2022 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint
              startTime="20 Dec 2022 00:00:00 GMT+0700"
              endTime="20 Dec 2022 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2 lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint
              startTime="21 Dec 2022 00:00:00 GMT+0700"
              endTime="18 Jan 2023 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="ประกาศผลผู้ที่ผ่านการคัดเลือกรอบแรก"
              display="21 Dec 2022"
              startTime="21 Dec 2022 00:00:00 GMT+0700"
              endTime="18 Jan 2023 23:59:59 GMT+0700"
            />
          </div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2 lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="การแข่งขันรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ (On-site)"
              display="19 Jan 2023"
              startTime="19 Jan 2023 00:00:00 GMT+0700"
              endTime="19 Jan 2023 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint
              startTime="19 Jan 2023 00:00:00 GMT+0700"
              endTime="19 Jan 2023 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-4 lg:col-span-none  lg:row-span-2"></div>
        </div>

        <div className="grid grid-cols-9 lg:grid-rows-5 lg:col-span-2  lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-none lg:row-span-2"></div>
          <div className="col-span-1 place-self-center lg:col-span-none lg:row-span-1">
            <TimeLinePoint
              startTime="19 Jan 2023 00:00:00 GMT+0700"
              endTime="19 Jan 2023 23:59:59 GMT+0700"
            />
          </div>
          <div className="col-span-4 lg:col-span-none lg:row-span-2">
            <TimeLineCard
              title="ประกาศผลผู้ผ่านการคัดเลือกรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ"
              display="19 Jan 2023"
              startTime="19 Jan 2023 00:00:00 GMT+0700"
              endTime="19 Jan 2023 23:59:59 GMT+0700"
            />
          </div>
        </div>
        {/* TimeLine end */}
      </div>
    </section>
  );
};
