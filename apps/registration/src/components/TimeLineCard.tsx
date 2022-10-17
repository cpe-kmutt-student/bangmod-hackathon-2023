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
  const isCurrentEvent = new Date(startTime) <= new Date() && new Date() <= new Date(endTime);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full bg-white rounded-xl p-2 space-y-2 md:space-y-5">
        <div className={`text-center p-3 ${isCurrentEvent ? 'bg-pink-500' : 'bg-violet-400'}  rounded-xl text-sm text-white`}>
          {title}
        </div>
        <div className={`flex justify-center text-sm py-1  ${isCurrentEvent ? 'text-pink-500' : 'text-violet-600'} md:text-lg`}>
          {display}
        </div>
      </div>
    </div>
  );
};
