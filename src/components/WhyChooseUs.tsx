"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
// import { twMerge } from "tailwind-merge";
// import { calsans } from "@/fonts/calsans";

// import cloud from "../../public/courses/cloud.jpg"
// import career from "../../public/courses/carrer.jpg"
// import codecollab from "../../public/courses/codecollab.jpg"
// import interative from "../../public/courses/interative.png"




const codingSchoolContent = [
    {
      title: "Interactive Learning",
      description:
        "Engage in hands-on, interactive learning experiences that will deepen your understanding of coding concepts. Our instructors guide you through practical exercises and projects, ensuring you grasp each concept effectively.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Interactive Learning
          {/* <Image
            src={interative}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real world projects demo"
          /> */}
        </div>
      ),
    },
    {
      title: "Real World Projects",
      description:
        "Work on real-world projects that simulate industry scenarios. Apply your coding skills to solve practical problems and build portfolio-worthy projects that showcase your abilities to potential employers.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Real World Projects
          {/* <Image
            src={cloud}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real world projects demo"
          /> */}
        </div>
      ),
    },
    {
      title: "Code Collaboration",
      description:
        "Collaborate with fellow students and instructors on coding challenges and projects. Share insights, provide feedback, and learn from others in a supportive and collaborative environment.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Code Collaboration
          {/* <Image
            src={codecollab}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real world projects demo"
          /> */}
        </div>
      ),
    },
    {
      title: "Career Support",
      description:
        "Receive guidance and support to kickstart your career in tech. From resume building to interview preparation, we provide comprehensive career services to help you land your dream job in the tech industry.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Career Support
         {/* <Image
            src={career}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real world projects demo"
          /> */}
        </div>
      ),
    },
  ];

const WhyChooseUs = () => {
  return (
    <TracingBeam className="px-6">
      <StickyScroll content={codingSchoolContent} />
      {/* <div className="overflow-y-hidden"><StickyScroll content={codingSchoolContent} /></div> */}
    </TracingBeam>

  )
};

export default WhyChooseUs;
