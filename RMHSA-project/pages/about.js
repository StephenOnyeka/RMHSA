import React from "react";
import Link from "next/link";
import Image from "next/image";

import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";

function About() {
  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className=" font-Poppins overflow-hidden">
        <div className="bg-[url('/istockphoto-639359406-612x612.jpg')] bg-cover bg-no-repeat bg-center">
          <div
            id="About_container-1"
            className="bg-gradient-to-b from-black/40 to-black/80 h-screen max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            {/* <div className="flex justify-between justify-items-center mt-44 pb-64"> */}
            <div className=" ">
              <Navbar />
            </div>

            <div className=" absolute z-1 bottom-64 lg:bottom-8 max-sm:bottom-80 text-white ">
              <p className="text-xl pb-3 max-sm:text-lg max-sm:pb-1">
                Know Us Better
              </p>
              <p className="text-5xl font-bold max-sm:text-3xl">About Us</p>
            </div>
          </div>
        </div>
        {/* <div className="min-w-full"> */}
        <div id="About_container-2" className="px-8 py-6 max-sm:px-4">
          <span className="flex gap-3 text-gray-500 items-center">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <Link href="/about" className="text-primary">
              About Us
            </Link>
          </span>
          <div className="py-10">
            <div className="flex gap-16 max-xl:flex-wrap max-sm:gap-8">
              <div className="min-w-80">
                <p className=" font-bold font-Poppins text-3xl text-contingentColor max-sm:text-2xl">
                  Kingster's History
                  <span className="element-divider-seperator flex w-5/6 mt-4 border-2 border-primary max-sm:w-4/6 "></span>
                </p>
              </div>
              <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-0 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                If you would like to study in the university in the heart of the
                city that focus on chaning the world for better to morrow,
                you’re choosin the right place. We do not use special formulas
                to select students. We look at every single applicant’s
                application, academic and personal, to select students who suit
                to our community with a full range of backgrounds. If you would
                like to study
              </p>
              <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-0 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                If you would like to study in the university in the heart of the
                city that focus on chaning the world for better to morrow,
                you’re choosin the right place. We do not use special formulas
                to select students. We look at every single applicantt’s
                application, academic and personal, to select students who suit
                to our community.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div>
          <div
            id="About_container-2"
            className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 h-screen/2 max-md:h-full"
          >
            <div className=" flex items-center px-10 gap-8 bg-primary/70 h-full text-white leading-7 max-md:flex-wrap max-md:py-8 max-sm:leading-6 max-sm:text-sm  max-sm:justify-center">
              <div className="">
                <p className="font-bold text-xl max-sm:text-lg">
                  Our Philosophy
                </p>
                <br />
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
              <div className="">
                <p className="font-bold text-xl max-sm:text-lg">
                  Kingster's Princiiple
                </p>
                <br />
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
              <div className="">
                <p className="font-bold text-xl max-sm:text-lg">
                  Key of Success
                </p>
                <br />
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="About_container-3" className="h-screen absolute max-md:h-fit">
          <div className="flex w-full h-5/6 max-md:flex-col max-sm:pt-10">
            <div className="flex items-center w-full max-md:pb-8">
              <div className="flex flex-col gap-6 px-10 mr-10 max-md:mr-0 ">
                <div className="relative">
                  <Image
                    src="/svgs/about-icon-1.png"
                    alt=""
                    fill="#000"
                    className="relative w-16"
                  />
                </div>
                <p className="text-3xl font-semibold max-md:text-xl">
                  Special Campus Tour
                </p>
                <p className="text-gray-500 leading-7 max-md:leading-6 max-md:text-sm">
                  Campus on a tour designed for prospective graduate and
                  professional students. You will see how our university like,
                  facilities, studenst and life in this university. Meet our
                  graduate admissions representative to learn more about our
                  graduate programs and decide what it the best for you.
                </p>
              </div>
            </div>

            <div className="bg-[url('/istockphoto-1404294992-612x612.jpg')] bg-cover w-full max-sm:py-36"></div>
          </div>

          <div className="flex w-full h-5/6 max-md:flex-col max-sm:pt-10">
            <div className="bg-[url('/New-Grads.jpg')] bg-cover w-full max-sm:py-36 max-md:hidden"></div>
            <div className="flex items-center w-full max-md:pb-8">
              <div className="flex flex-col gap-6 px-10 ml-10 max-md:ml-0">
                <div className="relative">
                  <Image
                    src="/svgs/about-icon-2.png"
                    alt=""
                    fill="#000000"
                    className="relative w-16"
                  />
                </div>
                <p className="text-3xl font-semibold max-md:text-xl">
                  Graduation
                </p>
                <p className="text-gray-500 text leading-7 max-md:leading-6 max-md:text-sm">
                  Campus on a tour designed for prospective graduate and
                  professional students. You will see how our university like,
                  facilities, studenst and life in this university. Meet our
                  graduate admissions representative to learn more about our
                  graduate programs and decide what it the best for you.
                </p>
              </div>
            </div>
            <div className="bg-[url('/New-Grads.jpg')] bg-cover w-full max-sm:py-36 hidden max-md:block"></div>
          </div>

          <div className="flex w-full h-5/6 max-md:flex-col max-sm:pt-10">
            <div className="flex items-center w-full max-md:pb-8">
              <div className="flex flex-col  gap-6 px-10 mr-10">
                <div className="relative">
                  <Image
                    src="/svgs/about-icon-3.png"
                    alt=""
                    fill="#000000"
                    className="relative w-16"
                  />
                </div>
                <p className="text-3xl font-semibold max-md:text-xl">
                  Powerful Alumni
                </p>
                <p className="text-gray-500 text leading-7 max-md:leading-6 max-md:text-sm">
                  Campus on a tour designed for prospective graduate and
                  professional students. You will see how our university like,
                  facilities, studenst and life in this university. Meet our
                  graduate admissions representative to learn more about our
                  graduate programs and decide what it the best for you.
                </p>
              </div>
            </div>

            <div className="bg-[url('/handsome-men-suits-office-shaking-hands_219728-3729.jpg')] bg-cover bg-center w-full max-sm:py-36"></div>
          </div>

          <div className="bg-contingentColor py-8 w-full">
            <div className="grid grid-flow-col gap-4 justify-center content-center items-center max-md:flex max-md:flex-wrap max-md:gap-0 max-md:items-center">
              <Image src="/banner-1.png" alt="" className="max-sm:w-24" />
              <Image src="/banner-2.png" alt="" className="max-sm:w-24" />
              <Image src="/banner-3.png" alt="" className="max-sm:w-24" />
              <Image src="/banner-4-1.png" alt="" className="max-sm:w-24" />
              <Image src="/banner-5.png" alt="" className="max-sm:w-24" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
