import { motion } from "framer-motion";
import React from "react";
import ExperiencedCards from "./ExperiencedCards";
import nodejs from "../../public/nodejs.png";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.png";
import gcp from "../../public/gcp.png";
import nestjs from "../../public/nestjs.png";
import js from "../../public/js.png";
import awsicon from "../../public/aws-icon.png";
import download from "../../public/download.png";
function Experience() {
  const experienceData = [
    {
      title: "Software Engineer",
      companyName: "Arclif Technologies",
      logo: "https://media.licdn.com/dms/image/C510BAQEhpERdcNjjAw/company-logo_200_200/0/1586960886642?e=2147483647&v=beta&t=UQL4HDQr16nCPrD3auCcfv-_ktUU23CBaqzb9B0o_PM",
      technologies: [nodejs, reactjs, mongodb, gcp, nestjs],
      startDate: "March 2022",
      endDate: "Present",
      points: [
        "RESTful API development",
        "Mongoose schema design",
        "Payment gateway integration",
        "JWT authentication",
        "GCP deployment and integration",
      ],
    },
    {
      title: "Web Development",
      companyName: "Brototype",
      logo: "https://yt3.googleusercontent.com/dNXHD2XSx1tKug2Qxmf7D20U3ctr35Um4eVZkJHtjv9OBwCb2WqFu3iWg5Mgg31KfnKWo3zthvs=s900-c-k-c0x00ffffff-no-rj",
      technologies: [nodejs, reactjs, mongodb, js, awsicon],
      startDate: "Auguest 2021",
      endDate: "Apr 2022",
      points: ["Learn Web Development"],
    },
    {
      title: "Freelance",
      companyName: "...",
      logo: "https://images.ctfassets.net/aq13lwl6616q/1pU68mCdL4C26KTxAUXmbe/f6a21624f217c0afec2829b33b2899b0/Thumbnail_-_Freelance_Course.jpeg",
      technologies: [nodejs, nestjs, mongodb, js, download],
      startDate: "february 2023",
      endDate: "present",
      points: ["Learn Web Development"],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div
        className="w-full flex
       space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {experienceData.map((data, i) => (
          <ExperiencedCards key={i} data={data} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
