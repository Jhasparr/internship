import Image from "next/image";
import LeftArrowIcon, { RightArrowIcon } from "./LeftIcon";

export default function Carousel() {
  return (
    <section className="lg:flex lg:w-full max-w-[1440px] lg:flex-row sm:mt-5 lg:mt-10  w-80 md:w-auto mx-auto  space-x gap-x-10 md:px-10  lg:justify-center  py-5 ">
      {/* First Hero */}
      <div className="relative  lg:w-full w-full lg:max-w-5xl overflow-hidden   mx-auto  mb-5">
        <div className="lg:w-full md:h-100  h-64 w-full shadow-lg overflow-hidden relative rounded-2xl ">
          <Image
            src="/subhero.webp"
            alt="Image 1"
            fill
            className="  object-cover"
          />

          {/* Poster Text */}
          {/* Top-left label */}
          <div className="absolute top-2 left-3 sm:top-3 sm:left-4 md:top-8 md:left-10 text-white drop-shadow-lg">
            <h3 className="text-[8px] sm:text-[9px] md:text-xs font-bold">
              NEW SOURCE MODEL
            </h3>
          </div>

          {/* Bottom-left text */}
          <div className="absolute bottom-4 left-3 sm:bottom-5 sm:left-5 md:bottom-8 md:left-10 text-white drop-shadow-md max-w-[70%] sm:max-w-[65%] md:max-w-[500px]">
            <h3 className="text-[10px] sm:text-[12px] md:text-3xl font-bold">
              WAN 2.2 Image Generation
            </h3>
            <p className="text-[6px] sm:text-[10px] md:text-[14px]">
              Generate complex images with the brand new and powerful WAN 2.2
              model. Exceptional prompt adherence and ultra realistic features.
            </p>
          </div>

          {/* Bottom-right button */}
          <button className="absolute bottom-4 right-3 sm:bottom-5 sm:right-5 md:bottom-8 md:right-10 bg-white text-black font-bold rounded-full px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 text-[6px] sm:text-[10px] md:text-[13px] hover:bg-gray-300 shadow-lg transition-all">
            Try WAN 2.2
          </button>
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
        <div className=" relative  lg:w-full  h-64 md:h-100 shadow-lg overflow-hidden  rounded-2xl">
          <Image
            src="/mainhero.webp"
            alt="Image 5"
            fill
            className="     object-cover"
          />
          <div>
            <div className="absolute inset-0 text-white ml-3 md:ml-10 mt-2 md:mt-8 drop-shadow-lg">
              <h3 className=" text-[8px] font-bold md:text-xs  ">
                NEW SOURCE MODEL
              </h3>
            </div>
            <div className="absolute mb-3 md:mb-8 text-white drop-shadow-md bottom-1 left-5">
              <h3 className="text-[10px] font-bold md:text-3xl">FLUX.1 Krea</h3>
              <p className=" text-[6px] md:text-[14px] md:w-40 w-38 ">
                We&pos;re making the weighs to our FLUX.1 Krea Model open-source.
                Download and run our model weights, read the technical report,
                or generate it with Krea Image
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-3 w-full flex justify-end gap-3 relative z-10  px-4">
          <LeftArrowIcon className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200" />
          <RightArrowIcon className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200" />
        </div>
      </div>
    </section>
  );
}
