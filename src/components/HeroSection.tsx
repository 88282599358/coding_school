import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Crafting Coders for the Digital Era
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-500 max-w-lg mx-auto">
          Join us at CodeCraft Academy and embark on an exciting journey towards
          mastering the language of the future. Unleash your creativity, unlock
          your potential, and craft a rewarding career in technology with us.
          Your adventure begins here.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
             Course Discovery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
