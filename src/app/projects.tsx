"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/orangeplanner.png",
    title: "Orange Planner",
    desc: "Apps for agency in insurance ",
  },
  {
    img: "/image/orangetopia.png",
    title: "Orange Topia",
    desc: "Game app to attract customers to buy insurance and get points that can be exchanged for ewallet",
  },
  {
    img: "/image/foodmarket.png",
    title: "Food Market",
    desc: "Ecommerce app",
  },
  {
    img: "/image/mednefits.png",
    title: "Mednefits",
    desc: "Mednefits is an employee medical benefits platform that makes it easier for businesses to take care of their employees.",
  },
  // {
  //   img: "/image/blog-1.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog2.svg",
  //   title: "Landing Page Development",
  //   desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  // },
  // {
  //   img: "/image/blog3.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog4.svg",
  //   title: "E-commerce development",
  //   desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  // },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Our Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
