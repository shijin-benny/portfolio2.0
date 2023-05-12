import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import shijin from "../../public/shijin.jpg";
import Image from "next/image";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["I'm a Full-stack developer", "I'm a Freelancer", "I'm a Designer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
        <BackgroundCircle />

        <Image
          src={shijin.src}
          width={100}
          height={100}
          alt="shijin"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />

        {/* <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src={shijin.src} alt="shijin" /> */}
        <div className="z-20">
          <h2 className="text-base uppercase text-gray-500 pb-2 tracking-[20px]">shijin benny</h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButtons">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButtons">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButtons">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButtons">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
