export const HorizontalTimeline = () => {
  return (
    <>
      <UpperHorizontalTimeline />
      <HorizontalMainLine />
      <LowerHorizontalTimeline />
    </>
  );
};

const UpperHorizontalTimeline = () => {
  return (
    <div className="grid grid-cols-28">
      <div className="col-span-1" />
      <Card header="เปิดรับสมัคร"
        display="24 Oct 2022"
        startTime="24 Oct 2022 00:00:00 GMT+0700"
        endTime="28 Nov 2022 23:59:59 GMT+0700"
      />
      <div className="col-span-3" />
      <Card
        header="การแข่งขันรอบคัดเลือก (Online)"
        small
        display="24 Dec 2022"
        startTime="24 Dec 2022 00:00:00 GMT+0700"
        endTime="24 Dec 2022 23:59:59 GMT+0700"
      />
      <div className="col-span-3" />
      <Card
        header="การแข่งขันรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ (On-Site)" 
        small
        display="19 Jan 2023"
        startTime="19 Jan 2023 00:00:00 GMT+0700"
        endTime="19 Jan 2023 23:59:59 GMT+0700"
      />
    </div>
  );
};

const LowerHorizontalTimeline = () => {
  return (
    <div className="grid grid-cols-28">
      <div className="col-span-5" />
      <Card
        header="ปิดรับสมัคร"
        display="29 Nov 2022"
        startTime="29 Nov 2022 00:00:00 GMT+0700"
        endTime="19 Dec 2022 23:59:59 GMT+0700"
      />
      <div className="col-span-3" />
      <Card
        header="ประกาศผลผู้ผ่านการคัดเลือก"
        small
        display="25 Dec 2022"
        startTime="25 Dec 2022 00:00:00 GMT+0700"
        endTime="18 Jan 2023 23:59:59 GMT+0700"
      />
      <div className="col-span-3" />
      <Card
        header="ประกาศผลผู้ผ่านการคัดเลือกรอบคัดเลือกครั้งที่ 2 และรอบชิงชนะเลิศ"
        small
        display="19 Jan 2023"
        startTime="19 Jan 2023 00:00:00 GMT+0700"
        endTime="19 Jan 2023 23:59:59 GMT+0700"
      />
    </div>
  );
};

const Card = ({
  header,
  display,
  startTime,
  endTime,
  small = false,
}: {
  header: string,
  display: string,
  startTime: string,
  endTime: string,
  small?: boolean,
}) => {
  const currentTime = new Date()
  const isCurrentEvent = new Date(startTime) <= currentTime && currentTime <= new Date(endTime);

  return (
    <div className="flex flex-col col-span-5 bg-white h-24 pt-2 px-2 -mx-3 rounded-xl">
      <div className={`h-12 text-center p-2 text-white rounded-lg ${isCurrentEvent ? 'bg-pink-500' : 'bg-[#7c81be]'}`}>
        <div className={`flex items-center justify-center h-full ${small ? 'text-xs' : 'text-sm'}`}>
          {header}
        </div>
      </div>
      <div className={`text-sm m-auto font-extrabold ${isCurrentEvent ? 'text-pink-500' : 'text-[#6C30A4]'}`}>
        {display}
      </div>
    </div>
  );
};

const HorizontalMainLine = () => {
  return (
    <div className="grid grid-cols-28 items-center">
      <HorizontalLine />
      <StopPoint
        startTime="24 Oct 2022 00:00:00 GMT+0700"
        endTime="28 Nov 2022 23:59:59 GMT+0700"
      />
      <HorizontalLine />
      <StopPoint
        startTime="29 Nov 2022 00:00:00 GMT+0700"
        endTime="19 Dec 2022 23:59:59 GMT+0700"
      />
      <HorizontalLine />
      <StopPoint
        startTime="24 Dec 2022 00:00:00 GMT+0700"
        endTime="24 Dec 2022 23:59:59 GMT+0700"
      />
      <HorizontalLine />
      <StopPoint
        startTime="25 Dec 2022 00:00:00 GMT+0700"
        endTime="18 Jan 2023 23:59:59 GMT+0700"
      />
      <HorizontalLine />
      <StopPoint
        startTime="19 Jan 2023 00:00:00 GMT+0700"
        endTime="19 Jan 2023 23:59:59 GMT+0700"
      />
      <HorizontalLine />
      <StopPoint
        startTime="19 Jan 2023 00:00:00 GMT+0700"
        endTime="19 Jan 2023 23:59:59 GMT+0700"
      />
      <HorizontalLine />
    </div>
  );
};

const HorizontalLine = () => {
  return (
    <div className="col-span-3 bg-white w-full h-2 rounded-lg mr-2"></div>
  );
};

const StopPoint = ({
  startTime,
  endTime,
}: {
  startTime: string,
  endTime: string,
}) => {
  const currentTime = new Date()
  const isCurrentEvent = new Date(startTime) <= currentTime && currentTime <= new Date(endTime);
  
  return (
    <div className="col-span-1 mx-auto flex-none w-4 h-4 rounded-full bg-white">
      <div className="w-full h-full flex justify-center items-center">
        <div className={`w-2.5 h-2.5 rounded-full ${isCurrentEvent ? 'bg-pink-500' : 'bg-[#7c81be]'}`}></div>
      </div>
    </div>
  );
};
