import React from "react";
type CardProps = {
  title: string;
  isNew?: boolean;

  image: string;
};

export default function NavIcons({
  title,
  isNew = false,
  image = "bg-red-400",
}: CardProps) {
  return (
    <div className="w-64 ">
      <div className="flex flex-row justify-between space-x-2 hover:bg-gray-50 dark:active:bg-[#212121]  dark:hover:bg-[#212121] px-4 py-3 rounded-2xl  ">
        <div className="flex flex-row w-full  ">
          <div className=" flex flex-row shadow-md gap-2 w-9 h-9 rounded-lg ">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className=" justify-center items-center flex ">
              <h2 className="md:text-[18px] text-[15px] font-bold">{title}</h2>
            </div>
          </div>
        </div>
        {isNew && (
          <div className="flex justify-end">
            <button className=" w-15 h-7 px-1 py-1 hover:bg-gray-300 bg-gray-100 shadow-lg  text-[9px] rounded-full transition-all  dark:bg-[#212121] dark:hover:bg-[#737373]">
              Open
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
