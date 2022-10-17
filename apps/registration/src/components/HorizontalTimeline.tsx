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
      <Card header="เปิดรับสมัคร" body="24 Oct 2022" />
      <div className="col-span-3" />
      <Card header="การแข่งขันรอบคัดเลือก (Online)" small body="24 Oct 2022" />
      <div className="col-span-3" />
      <Card header="การแข่งขันรอบ Semi Final และรอบชิงชนะเลิศ (On-Site)" small body="24 Oct 2022" />
    </div>
  );
};

const LowerHorizontalTimeline = () => {
  return (
    <div className="grid grid-cols-28">
      <div className="col-span-5" />
      <Card header="ปิดรับสมัคร" body="28 Nov 2022" />
      <div className="col-span-3" />
      <Card header="ประกาศผลผู้ผ่านการคัดเลือก" small body="21 Dec 2022" />
      <div className="col-span-3" />
      <Card header="ประกาศผลผู้ผ่านการคัดเลือกรอบ Semi Final และชิงชนะเลิศ" small body="19 Jan 2022" />
    </div>
  );
};

const Card = ({
  header,
  body,
  small = false,
}: {
  header: string,
  body: string,
  small?: boolean,
}) => {
  return (
    <div className="flex flex-col col-span-5 bg-white h-24 pt-2 px-2 -mx-3 rounded-xl">
      <div className="h-12 bg-violet-400 text-center p-2 text-white rounded-lg">
        <div className={`flex items-center justify-center h-full ${small ? 'text-xs' : 'text-sm'}`}>
          {header}
        </div>
      </div>
      <div className="text-violet-600 text-sm m-auto">
        {body}
      </div>
    </div>
  );
};

const HorizontalMainLine = () => {
  return (
    <div className="grid grid-cols-28 items-center">
      <HotizontalLine />
      <StopPoint />
      <HotizontalLine />
      <StopPoint />
      <HotizontalLine />
      <StopPoint />
      <HotizontalLine />
      <StopPoint />
      <HotizontalLine />
      <StopPoint />
      <HotizontalLine />
      <StopPoint />
      <HotizontalLine />
    </div>
  );
};

const HotizontalLine = () => {
  return (
    <div className="col-span-3 bg-white w-full h-2 rounded-lg mr-2"></div>
  );
};

const StopPoint = () => {
  return (
    <div className="col-span-1 mx-auto flex-none w-4 h-4 rounded-full bg-white">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-violet-400"></div>
      </div>
    </div>
  );
};
