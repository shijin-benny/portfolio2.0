import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <header className="sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-0 items-start xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {/* Social icons */}
          <SocialIcon
            url="https://www.facebook.com/shijin.benny.52/"
            target="_blank"
            network="facebook"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/shijin-benny-07368721b/"
            target="_blank"
            network="linkedin"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.instagram.com/shijin.benny/"
            target="_blank"
            network="instagram"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/shijin-benny"
            target="_blank"
            network="github"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon url="#contact" network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase md:inline-flex text-sm text-gray-400 hidden">Get in Touch</p>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
