import React from 'react'
type CardProps = {
  title: string;
  description: string;
  isNew?: boolean;
  image: string;
};



export default function HeroCard({title, description, isNew = false, image = "bg-red-400" }: CardProps) {
  return (
     <div className="flex flex-row space-x-2 hover:bg-gray-50 dark:active:bg-[#212121]  dark:hover:bg-[#212121] px-4 py-3 rounded-2xl  ">
          <div className="shadow-md md:w-15 w-13 h-13 md:h-15 rounded-lg">
            <img src={image} alt={title} className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className="">
            <div className="flex flex-row space-x-2 items-center mb-0 ">
              <h2 className="md:text-[18px] text-[15px] font-bold">{title}</h2>
              {isNew && (
                 <button className="w-6 h-3 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 rounded-md text-white shadow-sm drop-shadow-md px-1 py-0 font-bold text-[7px] ">New</button>

              )}
             
            </div>

            <p className="md:text-[14px] text-[13px] w-45 md:w-50 lg:w-55 text-gray-500">
              {" "}
             {description}
            </p>
          </div>
          <div className="md:ml-10 ml-0">
            <button className="mt-4 w-10 h-5 px-1 py-1 hover:bg-gray-300 bg-gray-100 shadow-lg  text-[9px] rounded-full transition-all  dark:bg-[#212121] dark:hover:bg-[#737373]">Open</button>

          </div>
        </div>
  )
}
