export const TimeLineCard = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <div>
      <div className="flex w-full  justify-center items-center">
        {/* Card */}
        <div className=" bg-white rounded-xl p-2 space-y-2 md:space-y-5">
          <div className=" text-center px-4 py-5 bg-violet-600 rounded-xl text-xs md:text-xl text-white font-bold">
            {title}
          </div>
          <div className="flex justify-center text-xs text-violet-600 md:text-lg">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};
