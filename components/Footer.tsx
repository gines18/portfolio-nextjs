import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
const Footer = () => {
  return (
    <footer className="w-full" id="contact">
  
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 m-5 my-5 p-2 text-center">
          Reach out to me today and let&apos;s discuss how I can help to achieve
          your goals{" "}
        </p>
        <a href="mailto:ruczkowski.m@gmail.com">
            <MagicButton
            title="Let's get in touch" 
            icon={<FaLocationArrow />}
            position="right"
            />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center m-5">
        <p className="md:text-base text-small md:text-normal font-light p-3">Copyright © 2024 Mariusz </p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <a 
                key={profile.id} 
                href={profile.link}
                target="_blank"
                className="flex justify-center items-center w-10 h-10 cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img 
                src={profile.img} 
                alt={profile.name}
                width={20} height={20} />
                </a>
                
                
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
