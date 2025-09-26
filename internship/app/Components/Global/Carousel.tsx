

import Image from "next/image";
import LeftArrowIcon, { RightArrowIcon } from "./LeftIcon";



export default function Carousel() {
  return (
   <section className="lg:flex lg:w-full max-w-[1440px] lg:flex-row sm:mt-5 lg:mt-10  w-80 md:w-auto mx-auto  space-x gap-x-10 md:px-10  lg:justify-center  py-5 "> 
      {/* First Hero */}
      <div className="relative  lg:w-full w-full lg:max-w-5xl overflow-hidden   mx-auto  mb-5">
    
        <div className="lg:w-full lg:h-100 h-full w-full shadow-lg overflow-hidden  rounded-2xl ">
          
            <img
              src="subhero.webp"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
         
            {/* Poster Text */}
            <div>
           
              <div className="absolute inset-0 text-white ml-3 md:ml-10 mt-2 md:mt-8 drop-shadow-lg">
                <h3 className=" text-[8px] font-bold md:text-xs  ">
                  NEW SOURCE MODEL
                </h3>
                </div>
                <div className="absolute mb-3 md:mb-8 text-white drop-shadow-md bottom-5 left-5 ">
                  <h3 className=" text-[10px] font-bold md:text-3xl">
                  WAN 2.2 Image Generation
                </h3>
                <p className=" text-[6px] md:text-[14px] md:w-100 w-35 ">
                  Generate complex images with the brand new and powerful WAN
                  2.2 model. Exceptional prompt adherence and ultra realistic
                  features
                </p>

                </div>
                
              
              <button className="absolute mb-3 md:mb-8 rounded-full bottom-5 right-5  bg-white md:px-6 px-2 py-1 md:py-3 font-bold text-[6px] md:text-[13px] hover:bg-gray-300 shadow-lg transition-all text-black  ">Try WAN 2.2 </button>
            </div>

            {/* Buttons */}
            
        
        </div>
         <div className=" mt-3 w-full flex justify-end gap-3 relative z-10  px-4">
              <button className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-700"></button>
              <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700"></button>
              <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700"></button>
              <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700"></button>
              <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700"></button>
              <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700"></button>
               <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-800"></button>
              <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700"></button>
                <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-800"></button>
              <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-700"></button>
              
            </div>
      </div>
      {/* Second hero same */}

      <div className="relative lg:w-full    mx-auto ">
        <div className=" relative  lg:w-full  h-full lg:h-100 shadow-lg overflow-hidden    rounded-2xl">
          <img
            src="mainhero.webp"
            alt="Image 5"
            className="w-full h-full       object-cover"
          />
          <div>
           
            <div className="absolute inset-0 text-white ml-3 md:ml-10 mt-2 md:mt-8 drop-shadow-lg">
              <h3 className=" text-[8px] font-bold md:text-xs  ">
                NEW SOURCE MODEL
              </h3>
              </div>
              <div className="absolute mb-3 md:mb-8 text-white drop-shadow-md bottom-1 left-5">
                 <h3 className="text-[10px] font-bold md:text-3xl">
                FLUX.1 Krea
              </h3>
              <p className=" text-[6px] md:text-[14px] md:w-100 w-38 ">
                We're making the weighs to our FLUX.1 Krea Model open-source.
                Download and run our model weights, read the technical report,
                or generate it with Krea Image
              </p>

              </div>
             
            
          </div>
        </div>
        <div className=" mt-3 w-full flex justify-end gap-3 relative z-10  px-4">
        <LeftArrowIcon className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200"/>
        <RightArrowIcon className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200"/>
        </div>
       
      </div>
    </section>
  );
}
