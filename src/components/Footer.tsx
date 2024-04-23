'use client'
import React from "react";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
  } from "./ui/glowing-stars";


const Footer = () => {
  return (
    <GlowingStarsBackgroundCard>
    <footer className="">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            CodeCraft Academy is a leading institution committed to imparting
            the knowledge and skills of coding. We cultivate talent from the
            basics, cultivating a dynamic community of developers.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Handy References
          </h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Stay Connected
          </h2>
          <div className="flex flex-col justify-center">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Dahisar(East), Mumbai</p>
          <p>Maharashtra 400068</p>
          <p>Email: contact@codingschool.com</p>
          <p>Phone: +91 987456312</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Evolve Coding School. All rights reserved.
      </p>
    </footer>
    </GlowingStarsBackgroundCard>
  );
};

export default Footer;
