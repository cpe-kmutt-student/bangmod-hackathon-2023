export const TimeLineCard = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <div className="flex w-full h-48 justify-center items-center">
      {/* Card */}
      <div className="w-full bg-white rounded-xl p-2 space-y-2 md:space-y-5">
        <div className=" text-center px-4 py-5 bg-violet-400 rounded-xl text-xs md:text-xl text-white font-bold">
          {title}
        </div>
        <div className="flex justify-center text-xs text-violet-600 md:text-lg">
          {date}
        </div>
      </div>
    </div>
  );
};
