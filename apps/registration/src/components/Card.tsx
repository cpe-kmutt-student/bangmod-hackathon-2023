const Card = ({
  img,
  title,
  desc1,
  desc2,
}: {
  img?: string;
  title?: string;
  desc1?: string;
  desc2?: string;
}) => {
  return (
    <>
      <div className="w-full max-w-sm mb-5 bg-white rounded-3xl shadow-2xl">
        <a href="#">
          <img
            className="p-8 rounded-t-lg w-full"
            src= {img}
          />
        </a>
        <div className="flex flex-col items-center pb-6">
            <p className="font-bold text-purple-900 lg:text-base "> {title} </p>
            <p className="md:text-xs font-light text-purple-700 "> {desc1} </p>
            <p className="md:text-xs font-light text-purple-700 "> {desc2} </p>
        </div>
      </div>
    </>
  );
};

export default Card;
