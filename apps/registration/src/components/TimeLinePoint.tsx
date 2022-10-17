export const TimeLinePoint = ({
  startTime,
  endTime,
}: {
  startTime: string,
  endTime: string,
}) => {
  const isCurrentEvent = new Date(startTime) <= new Date() && new Date() <= new Date(endTime);

  return (
    <div className="w-5 h-5 rounded-full bg-white relative flex items-center justify-center">
      <div className={`w-3 h-3 absolute ${isCurrentEvent ? 'bg-pink-500' : 'bg-violet-500'} rounded-full`}></div>
    </div>
  );
};
