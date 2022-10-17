export const TimeLineCard = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full bg-white rounded-xl p-2 space-y-2 md:space-y-5">
        <div className="text-center p-3 bg-violet-400 rounded-xl text-sm text-white">
          {title}
        </div>
        <div className="flex justify-center text-sm py-1 text-violet-600 md:text-lg">
          {date}
        </div>
      </div>
    </div>
  );
};
