"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Introduction to Python Programming",
      description:
        "Learn the fundamentals of Python programming language from scratch.",
      slug: "introduction-to-python-programming",
      isFeatured: true,
    },
    {
      title: "Web Development Bootcamp",
      description:
        "Join our intensive bootcamp to master the essentials of web development.",
      slug: "web-development-bootcamp",
      isFeatured: true,
    },
    {
      title: "Data Science Essentials",
      description:
        "Discover the key concepts and tools required for a career in data science.",
      slug: "data-science-essentials",
      isFeatured: true,
    },
    {
      title: "UX/UI Design Workshop",
      description:
        "Explore the principles and practices of user experience and user interface design.",
      slug: "ux-ui-design-workshop",
      isFeatured: true,
    },
    {
      title: "JavaScript Mastery Seminar",
      description:
        "Level up your JavaScript skills with advanced techniques and best practices.",
      slug: "javascript-mastery-seminar",
      isFeatured: true,
    },
    {
      title: "Cybersecurity Basics",
      description:
        "Get acquainted with the fundamentals of cybersecurity and protect your digital assets.",
      slug: "cybersecurity-basics",
      isFeatured: true,
    },
  ];
  return (
    <AuroraBackground>
      <div className="p-12 bg-gray-950">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h2 className=" text-teal-600 font-semibold tracking-wide uppercase text-2xl">
                Highlighted Coding School Webinars
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Elevate Your Coding Journey
              </p>
            </div>
            <div className="mt-10">
              <HoverEffect
                items={featuredWebinars.map((webinar) => ({
                  title: webinar.title,
                  description: webinar.description,
                  link: "/",
                }))}
              />
            </div>
            <div className="mt-10 text-center">
              <Link
                href={"/"}
                className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
              >
                Explore All Webinars
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default UpcomingWebinars;
