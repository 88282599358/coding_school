"use client";

import React from "react";
// import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PinContainer } from "@/components/ui/3d-pin";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

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
          are well-prepared to excel in today's competitive market.
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

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const words =
  "Google, Amazon, AWS, JP Morgon, Apple, Nvidia, Microsoft, Uber, The wall street, Wipro, TCS, Infosys, Swiggy, Zomata, Ola, CRED, Boat, Lenkart, Shaadi.com, Inshorts, BharatPay, PhonePe, Paytm, HCL Tech, L&T InfoTech,Dell, Lenovo, Intel, AMD, ITC, Myntra, Flipkart, Messo, Samsung, Reliance, Jio Cinema,";

const page = () => {
  const [hovered, setHovered] = React.useState(false);
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

        <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
          <Tabs tabs={tabs} />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-center">
          Why Choose Our Coding School?
        </h2>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
          <Card
            title="Experienced instructors with real-world industry experience"
            icon={<AceternityIcon />}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card
            title="Hands-on, project-based learning approach"
            icon={<AceternityIcon />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card
            title="Job placement assistance and career support"
            icon={<AceternityIcon />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-center">
          Our Hiring Partners
        </h2>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
        >
          <div className="h-[30rem] w-full flex items-center justify-center ">
            <PinContainer title="Google" href="https://google.com">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Google
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    World's Leading Tech Gaints
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>

            <PinContainer title="Amazon" href="https://amazon.com">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Amazon
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    World's Leading E-commerce Gaints
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>

            <PinContainer title="Microsoft" href="https://amazon.com">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Microsoft
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    World's Leading Tech Gaints
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                    [59, 130, 246],
                    [139, 92, 246],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </div>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
        >
          <div className="h-[30rem] w-full flex items-center justify-center ">
            <PinContainer title="Meta" href="https://amazon.com">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Meta
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    World's Leading Social Networking Company
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>

            <PinContainer title="Nvidia" href="https://nvidia.com">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Nvidia
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    World's Leading Computer Chip Company
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>

            <PinContainer title="TCS" href="https://tcs.com">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  TCS
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    World's Leading Service based Company
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                    [59, 130, 246],
                    [139, 92, 246],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default page;
