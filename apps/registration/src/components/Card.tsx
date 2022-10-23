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
    <div className="flex flex-col w-full h-full max-w-sm mx-auto px-3 md:px-4 py-6 bg-white rounded-3xl shadow-2xl">
      <div className="w-2/3 mx-auto">
        <img
          className=""
          src={img}
          alt=""
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center text-center mt-4">
        <p className="font-bold text-purple-900 lg:text-base "> {title} </p>
        <p className="text-purple-700 "> {desc1} </p>
        <p className="text-purple-700 "> {desc2} </p>
        <p className="text-purple-700 "> {desc3} </p>
      </div>
    </div>
  );
};

export default Card;
