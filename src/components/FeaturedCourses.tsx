"use client";
import courseData from "../data/coding_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

// our own kind of models or data types which define the type of properties
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  // we are using filter, by saying those whose feature is true, they will only return
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className="text-center">
              <h2 className="text-base text-lime-200 font-semibold tracking-wide uppercase">
                Discover a World of Knowledge
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sky-400 sm:text-4xl">
                Excel with Premier Education
              </p>
            </div>
          </motion.h1>
        </LampContainer>
      </div>
      
      <div className="-mt-40 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    Trainer:{course.description}
                  </p>
                  <p className="text-sm text-lime-50 dark:text-lime-50 flex-grow mb-10 mt-3">
                    {course.instructor}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Discover More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-black bg-emerald-200 hover:bg-gray-100 transition duration-200"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
