import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ExperiencedCards(props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[400px] md-w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={props.data.logo}
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light ">{props?.data?.title}</h4>
        <p className="font-bold text-xl mt-1">{props?.data?.companyName}</p>
        <div className="flex space-x-2 my-2">
          {props.data.technologies.map((items, i) => (
            <Image
              width={100}
              height={100}
              key={i}
              className="h-8 w-8 rounded-full object-contain"
              src={items?.src}
              alt=""
            />
          ))}

          {/* Tech used */}
        </div>
        <p className="uppercase py-2 text-gray-300">
          {props.data.startDate} to {props?.data?.endDate}.....{" "}
        </p>
        <ul className="list-disc space-y-1 ml-5 text-lg">
          <li>RESTful API development</li>
          <li>Mongoose schema design</li>
          <li>Payment gateway integration</li>
          <li>JWT authenticationl</li>
          <li>GCP deployment and integration</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperiencedCards;
