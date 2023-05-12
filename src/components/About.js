import React from "react";
import { motion } from "framer-motion";
import shijinbenny from "../../public/shijinbenny.jpg";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen relative text-center md:text-left md:flex-row w-full md:max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl
      "
      >
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={shijinbenny.src}
        alt="aboutImg"
        className="-mb-24 mt-28 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-72 md:h-80 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-x-5 md:space-y-10 mt-20  px-0 md:px-10">
        <h4 className="text-2xl md:text-5xl font-bold">Here is a little background</h4>
        <p className="text-base xl:text-lg mt-5">
          Hi there! My name is Shijin Benny, and I am a passionate web developer with expertise in creating innovative
          solutions for businesses in the digital age. I specialize in developing RESTful APIs, designing Mongoose
          database schema, and integrating payment gateways and third-party services like Razorpay and PayPal. My focus
          on security and continuous improvement through the latest technologies and industry trends ensures that my
          products are reliable, scalable, and ahead of the curve. I enjoy tinkering with new technologies and staying
          up-to-date with industry trends. Thanks for visiting my site! Feel free to reach out if you have any questions
          or project ideas you'd like to discuss.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
