export const TimeLineCard = ({
  title,
  display,
  startTime,
  endTime,
}: {
  title: string;
  display: string;
  startTime: string;
  endTime: string;
}) => {
  const currentTime = new Date()
  const isCurrentEvent = new Date(startTime) <= currentTime && currentTime <= new Date(endTime);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full bg-white rounded-xl p-2 space-y-2 md:space-y-5">
        <div className={`text-center p-3 ${isCurrentEvent ? 'bg-pink-500' : 'bg-[#7c81be]'}  rounded-xl text-sm text-white`}>
          {title}
        </div>
        <div className={`flex justify-center text-sm py-1  ${isCurrentEvent ? 'text-pink-500' : 'text-[#6C30A4]'} md:text-lg font-extrabold`}>
          {display}
        </div>
      </div>
    </div>
  );
};
