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
        display="20 Dec 2022"
        startTime="20 Dec 2022"
        endTime=""
      />
      <div className="col-span-3" />
      <Card
        header="การแข่งขันรอบ Semi Final และรอบชิงชนะเลิศ (On-Site)" 
        small
        display="19 Jan 2023"
        startTime="19 Jan 2023"
        endTime=""
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
        display="28 Nov 2022"
        startTime="29 Nov 2022 00:00:00 GMT+0700"
        endTime="19 Dec 2022 00:00:00 GMT+0700"
      />
      <div className="col-span-3" />
      <Card
        header="ประกาศผลผู้ผ่านการคัดเลือก"
        small
        display="21 Dec 2022"
        startTime="21 Dec 2022"
        endTime=""
      />
      <div className="col-span-3" />
      <Card
        header="ประกาศผลผู้ผ่านการคัดเลือกรอบ Semi Final และชิงชนะเลิศ"
        small
        display="19 Jan 2023"
        startTime="19 Jan 2023"
        endTime=""
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
  const isCurrentEvent = false; // TODO: WTF TIME ALGO

  return (
    <div className="flex flex-col col-span-5 bg-white h-24 pt-2 px-2 -mx-3 rounded-xl">
      <div className={`h-12 text-center p-2 text-white rounded-lg ${isCurrentEvent ? 'bg-pink-500' : 'bg-violet-400'}`}>
        <div className={`flex items-center justify-center h-full ${small ? 'text-xs' : 'text-sm'}`}>
          {header}
        </div>
      </div>
      <div className={`text-sm m-auto ${isCurrentEvent ? 'text-pink-500' : 'text-violet-600'}`}>
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
        startTime="24 Oct 2022"
        endTime="24 Oct 2022"
      />
      <HorizontalLine />
      <StopPoint
        startTime="28 Nov 2022"
        endTime="24 Oct 2022"
      />
      <HorizontalLine />
      <StopPoint
        startTime="20 Dec 2022"
        endTime="24 Oct 2022"
      />
      <HorizontalLine />
      <StopPoint
        startTime="21 Dev 2022"
        endTime="24 Oct 2022"
      />
      <HorizontalLine />
      <StopPoint
        startTime="19 Jan 2023"
        endTime="24 Oct 2022"
      />
      <HorizontalLine />
      <StopPoint
        startTime="19 Jan 2023"
        endTime="24 Oct 2022"
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
  const isCurrentEvent = false; // TODO: WTF TIME ALGO
  
  return (
    <div className="col-span-1 mx-auto flex-none w-4 h-4 rounded-full bg-white">
      <div className="w-full h-full flex justify-center items-center">
        <div className={`w-2.5 h-2.5 rounded-full ${isCurrentEvent ? 'bg-pink-500' : 'bg-violet-500'}`}></div>
      </div>
    </div>
  );
};
