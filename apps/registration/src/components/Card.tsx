const Card = ({
  img,
  title,
  desc1,
  desc2,
  desc3,
  section
}: {
  img?: string;
  title?: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
  section: "qua" | "reward" | "docs";
}) => {
  return (
    <div className={"flex flex-col " + (section==="docs" ? " w-[22rem] " : " w-[14rem] ") + " m-2 px-4 py-10 bg-white rounded-3xl shadow-2xl"}>
      <div className={"w-full px-5 mx-auto flex items-center justify-center "}>
        <img
          className="h-[9rem]"
          src={img}
          alt=""
        />
      </div>
      
      <div className= {"h-full flex flex-col  items-center text-center mt-4 " + (section === "qua" ? "justify-center" :"justify-start" )} >
        <p className="font-bold text-purple-900 lg:text-base "> {title} </p>
        {desc1 == undefined ? <p className="text-white">---</p> : <p className="text-purple-700 ">{desc1}</p>}
        {desc2 == undefined ? <p className="text-white pointer-events-none">{section == "qua" ? '': "---"}</p> : <p className="text-purple-700 ">{desc2}</p>}
        <p className="text-purple-700 ">{desc3}</p>
      </div>
    </div>
  );
};

export default Card;
