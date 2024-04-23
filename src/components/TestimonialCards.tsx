"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const codingSchoolTestimonials = [
  {
    quote:
      "Enrolling in the coding school was one of the best decisions I've made. The curriculum is comprehensive, the instructors are incredibly knowledgeable, and the hands-on projects have prepared me well for a career in software development.",
    name: "James Anderson",
    title: "Software Engineering Student",
  },

  {
    quote:
      "I had always been interested in coding, but it seemed daunting until I joined this school. The supportive learning environment and personalized attention from the instructors helped me gain confidence in my abilities and pursue my passion for programming.",
    name: "Mitchell Starc",
    title: "Web Development Student",
  },

  {
    quote:
      "Attending the coding school not only taught me valuable technical skills but also fostered a sense of community among fellow students. The collaborative projects allowed me to learn from my peers and grow both personally and professionally.",
    name: "Pat Cummins",
    title: "Computer Science Student",
  },

  {
    quote:
      "The coding school provides top-notch education with a practical approach. The instructors go above and beyond to ensure that every student understands the concepts thoroughly. I feel well-prepared to enter the job market as a competent software developer.",
    name: "Josh Hazlewood",
    title: "Programming Student",
  },

  {
    quote:
      "I'm amazed at how much I've learned in such a short time at the coding school. The curriculum is well-structured, the lessons are engaging, and the support from the staff is exceptional. I highly recommend this school to anyone looking to kickstart their career in tech.",
    name: "Dale Steyn",
    title: "Coding Bootcamp Graduate",
  },
];

import React from "react";

const CodingSchoolTestimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Get inspired by the success stories shared by our coding school alumni</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={codingSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default CodingSchoolTestimonials;
