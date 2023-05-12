import React from "react";
import { motion } from "framer-motion";
import netflix from "../../public/netflix.png";
import reactjs from "../../public/reactjs.png";
import css from "../../public/css.png";
import imdb from "../../public/imdb.png";
import olx from "../../public/olx.png";
import firebase from "../../public/firebase.png";
import spotify from "../../public/spotify.png";
import deliveroo from "../../public/deliveroo.png";
import tailwindcss from "../../public/tailwindcss.png";
import redux from "../../public/redux.png";
import expo from "../../public/expo.png";
import firstproject from "../../public/firstproject.png";
import rapidapi from "../../public/rapidapi.png";
import nextjs from "../../public/nextjs.png";
import spotifyicon from "../../public/spotifyicon.png";
import nextAuth from "../../public/nextAuth.png";
import recoil from "../../public/recoil.jpg";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      title: "Deliveroo 2.0 Clone",
      technologies: [reactjs, tailwindcss, redux, expo],
      image: deliveroo,
      description:
        "To create a Deliveroo clone using React Native, navigation, Redux, Tailwind CSS, and Sanito i.o, you'll be building a mobile application that mimics the functionality of the popular food delivery service. By creating this clone, you can learn and practice the basics of these technologies while showcasing your work to potential employers or clients.",
    },
    {
      title: "NetFlix Clone",
      technologies: [reactjs, css, imdb],
      image: netflix,
      description:
        "Netflix clone using React.js and the TMDb API.This application. The application uses the TMDb API to fetch movie details and trailer information. The project was built using modern React practices and demonstrates how to integrate with a third-party API using the fetch function.",
    },
    {
      title: "Job Search App ",
      technologies: [reactjs, css, expo, rapidapi],
      image: firstproject,
      description:
        "To create your first React-Native project, you'll be building a job search app using CSS, Expo-Router, and a custom hook with Rapid API integration. The app will allow users to view real job vacancies, search for jobs, and view job details.",
    },
    {
      title: "OLX Clone",
      technologies: [reactjs, css, firebase],
      image: olx,
      description:
        "OLX clone using React.js, CSS, and Firebase authentication as a means of learning and practicing the basics of React.js. The application allows users to sign up and log in securely using Firebase authentication. Once logged in, users can upload products they want to sell, which are stored in Firebase's real-time database.",
    },
    {
      title: "Spotify 2.0 Clone",
      technologies: [nextjs, tailwindcss, spotifyicon, nextAuth, recoil],
      image: spotify,
      description:
        "Spotify 2.0 clone using Next.js, Next.js middleware, Recoil, NextAuth, Tailwind CSS , and the Spotify API.I. These technologies will allow you to create a server-side rendered React application, with state management, authentication, custom styling, and integration with the Spotify API.  By using Next.js, you'll create a performant and SEO-friendly application, while Recoil and NextAuth provide security and a great user experience. ",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly  mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-0  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={project.image.src}
              className="h-[120px] md:h-[150px] xl:h-[300px]"
              alt=""
            />
            <div className="space-y-4 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-xl xl:text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex justify-center items-center space-x-5">
                {project.technologies.map((items, i) => (
                  <Image width={100} height={100} key={i} className="h-5 w-5 md:w-10 md:h-10" src={items.src} alt="" />
                ))}
              </div>
              <p className="text-base md:text-lg text-center md:text-left">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
