const Card = ({
  img,
  title,
  desc1,
  desc2,
  desc3,
}: {
  img?: string;
  title?: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
}) => {
  return (
    <>
      <div className="w-full max-w-sm mb-5 bg-white rounded-3xl shadow-2xl">
        <div className="max-w-md mx-auto rounded-full bg-[#e15a47] w-1/2 mb-8 mt-8 sm:mb-8 sm:mt-8 lg:mb-8 lg:mt-8">
          <img
            className="p-8 rounded-t-lg w-full"
            src= {img}
          />
        </div>
        <div className="flex flex-col items-center pb-6 text-center">
            <p className="font-bold text-purple-900 lg:text-base "> {title} </p>
            <p className="md:text-xs font-light text-purple-700 "> {desc1} </p>
            <p className="md:text-xs font-light text-purple-700 "> {desc2} </p>
            <p className="md:text-xs font-light text-purple-700 "> {desc3} </p>
        </div>
      </div>
    </>
  );
};

export default Card;
