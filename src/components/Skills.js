import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

import bootstrap from "../../public/bootstrap.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import react from "../../public/reactjs.png";
import js from "../../public/js.png";
import nodejs from "../../public/nodejs.png";
import nextjs from "../../public/nextjs.png";
import mongodb from "../../public/mongodb.png";
import tailwindcss from "../../public/tailwindcss.png";
import postgresql from "../../public/postgresql.png";
import gcp from "../../public/gcp.png";
import git from "../../public/git.png";

function Skills() {
  const skillIcons = [
    html,
    css,
    bootstrap,
    tailwindcss,
    js,
    react,
    nodejs,
    nextjs,
    react,
    nodejs,
    nextjs,
    mongodb,
    postgresql,
    gcp,
    git,
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Expertise in Developing, Designing, and Integrating Web Solutions
      </h3>

      <div className="grid grid-cols-4 gap-5 xl:grid-cols-5 xl:gap-x-12">
        {skillIcons.map((items, i) => (
          <Skill key={i} directionLeft={true} icons={items} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
