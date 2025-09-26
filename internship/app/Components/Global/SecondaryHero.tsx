"use client"
import React from "react";
import HeroCard from "./HeroCard";

type CardProps = {
  title: string;
  description: string;
  isNew?: boolean;
  image: string;
};

const mainCard: CardProps[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and ideogram.",
    isNew: true,
    image: "/hero1.jpg",
  },
  {
    title: "Video",
    description: "Generate videos with Haliua, Pica, Runway, Luma and More.",
    isNew: false,
    image: "/hero2.jpg",

  },
   {
    title: "Realtime",
    description: "Realtime AI rendering on a canvass instant feedback loops.",
    isNew: false,
    image: "/hero3.jpg",

  },
   {
    title: "Enhancer",
    description: "Upscale and Enhance Images and videos up to 22K.",
    isNew: true,
    image: "/hero4.jpg",

  },
   {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    isNew: true,
    image: "/hero5.jpg",

  },
   {
    title: "Video Lipsync",
    description: "Lip Sync any video to any audio",
    isNew: true,
    image: "/hero6.jpg",

  },
   {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    isNew: true,
    image: "/hero7.jpg",

  },
   {
    title: "Train",
    description: "Teach Krea to replicate your style, products or characters",
    isNew: false,
    image: "/hero8.jpg",

  },
]

export default function SecondaryHero() {
  return (
    <section className="lg:flex lg:w-full max-w-[1440px] lg:flex-row mt-10  w-80 md:w-auto mx-auto  space-x gap-x-10 md:px-10  lg:justify-center -10 py-5 ">
      {/* First Hero */}
      <div className="relative md:w-full max-w-screen-2xl  overflow-hidden  mb-5 md:mb-10  ">
        <h2 className="mb-4 font-bold  px-4 py-3 ">Generate</h2>
        {/* Conditional Rendering */}
        <div className="relative flex gap-2   flex-wrap  w-full mx-auto  ">
          {mainCard.map((index,key)=> (
            <HeroCard key={key} {...index}/>
                    

          ))}
   

        </div>
      
      </div>
    </section>
  );
}
