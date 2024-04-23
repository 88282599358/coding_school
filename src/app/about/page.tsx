"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


const DummyContent = () => {
  return (
    <Image
      src=""
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const tabs = [
  {
    title: "Mission",
    value: "mission",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900 to-neutral-950">
        <p>Our Mission</p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          Our mission is to empower students with the skills and knowledge
          needed to succeed in the rapidly evolving field of technology.
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          We believe in the power of collaboration, continuous learning, and
          adaptability.
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          By staying at the forefront of industry trends and incorporating
          real-world challenges into our programs, we ensure that our graduates
          are well-prepared to excel in today's competitive job market.
        </p>
      </div>
    ),
  },
  {
    title: "Vision",
    value: "vision",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-800 to-slate-900">
        <p>Our Vision</p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          Our vision at [Evolve Coding School] is to be a global leader in
          coding education, inspiring individuals from all walks of life to
          unleash their potential and become creators of tomorrow's technology.
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          We strive to foster a culture of lifelong learning and curiosity,
          where students are not only equipped with technical expertise but also
          imbued with the creativity, adaptability, and resilience to thrive in
          an ever-changing world.
        </p>
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-800 to-zinc-900">
        <p>Service Offerings</p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Comprehensive Coding Courses</strong>
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Specialized Tracks</strong>
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Flexible Learning Options</strong>
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Experienced Instructors</strong>
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Hands-on Projects</strong>
        </p>
      </div>
    ),
  },

  {
    title: "Values",
    value: "values",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-stone-800 to-stone-900">
        <p>Values</p>
        <p className="mb-3 mt-3 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Excellence:</strong>
          We strive for excellence in all aspects of our work, from curriculum
          design to student support.
        </p>
        <p className="mb-3 mt-3 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Continuous Improvement:</strong>
          We are committed to continuous learning and improvement.
        </p>
        <p className="mb-3 mt-3 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          <strong>Social Impact:</strong>
          We harness the power of coding education to drive positive social
          change and empower individuals to make a difference in the world.
        </p>
      </div>
    ),
  },
  {
    title: "Methodology",
    value: "methodology",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-violet-400 to-violet-500">
        <p>Methodology</p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          Our teaching approach is rooted in hands-on, experiential learning,
          where students actively engage with real-world projects and
          challenges. We believe in the power of practice, iteration, and
          reflection to solidify learning and foster mastery.
        </p>
        <p className="mb-4 mt-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
          Our curriculum emphasizes not only technical skills but also critical
          thinking, problem-solving, and communication abilities, preparing
          students for success in dynamic and interdisciplinary environments.
        </p>
      </div>
    ),
  },
];

const words = "Google Amazon JP Morgon Apple Nvidia Microsoft Uber The wall street"


const page = () => {
  return (
    <>
      <div className="mt-48">
        <h1 className="text-3xl text-center font-bold mb-4 text-emerald-400">
          About Our Coding School
        </h1>

        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
              Welcome to [Evolve Coding School], where we are dedicated to
              shaping the future of technology through education and innovation.
            </p>
          }
          className="h-[40rem] border rounded-md"
        >
          <p className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
            Welcome to our coding school! We are dedicated to providing
            high-quality coding education to individuals of all backgrounds.
          </p>

          <h1 className="text-3xl text-center font-bold mb-4 text-lime-300 mt-3">
            Mission
          </h1>

          <p className="mb-4 rounded-lg border border-neutral-600 focus:ring-2 focus:ring-teal-500 mx-2 p-4 bg-neutral-950 placeholder:text-neutral-700">
            Our mission is to empower students with the skills and knowledge
            needed to succeed in the rapidly evolving field of technology.
          </p>
        </MaskContainer>

        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
          <Tabs tabs={tabs} />
        </div>

        <h2 className="text-2xl font-bold mb-2">
          Why Choose Our Coding School?
        </h2>
        <ul className="pl-4 mb-4">
          <li>Experienced instructors with real-world industry experience</li>
          <li>Hands-on, project-based learning approach</li>
          <li>Small class sizes for personalized attention</li>
          <li>Flexible scheduling options</li>
          <li>Job placement assistance and career support</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Our Hiring Partners</h2>
        <p className="mb-4">
        <TextGenerateEffect words={words} />;
        </p>
        <ul className=" pl-4 mb-4">
          <li>Google</li>
          <li>Amazon</li>
          <li>JP Morgon</li>
          <li>Apple</li>
          <li>Nvidia</li>
          <li>Microsoft</li>
          <li>Uber</li>
          <li>The wall street</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Join Us Today!</h2>
        <p>
          Ready to take the next step in your coding journey? Enroll in one of
          our courses today and start building the skills you need to pursue a
          successful career in tech!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
