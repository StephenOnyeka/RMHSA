import React from "react";
import Link from "next/link";
import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";
import Image from "next/image";

function Athletics() {
  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className=" h-full font-Poppins overflow-hidden">
        <div className="bg-[url('/240_F_66155005_PcFq0uZuTyqMlfDjA10ulpJZU6UQFmRU.jpg')] bg-cover bg-top-center">
          <div
            id="Athletics_container-1"
            className="bg-black/70 h-screen max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            {/* <div className="pb-64"> */}
            <div className="pb-64">
              <Navbar />
            </div>

            <div className="absolute z-1 bottom-64 lg:bottom-8 max-sm:bottom-80 text-white">
              <p className="text-xl pb-3 max-sm:text-lg max-sm:pb-1">
                Go For KU Team
              </p>
              <p className="text-5xl font-bold max-sm:text-3xl">Athletics</p>
            </div>
          </div>
        </div>
        {/* <div className="min-w-full"> */}
        <div id="Athletics_container-2" className="px-8 py-6 max-sm:px-4">
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
              Athletics
            </Link>
          </span>
          <div className="py-4 w-full">
            <div className="flex flex-col gap-8 text-lg">
              <div className="min-w-80">
                <span className="element-divider-seperator flex w-1/4 mt-4 border-2 border-primary"></span>
              </div>

              <p className=" text-primary leading-8 w-3/4 max-md:w-full max-sm:text-sm max-sm:leading-6">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
              <p className=" text-gray-500 leading-8 min-w-60 max-md:min-w-full max-sm:text-sm max-sm:leading-6">
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean. A small river named Duden flows by their place
                and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. Even the all-powerful Pointing has no control
                about the blind texts it is an almost unorthographic life One
                day however a small line of blind text by the name of Lorem
                Ipsum decided to leave for the far World of Grammar. The Big
                Oxmox advised her not to do so.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div id="Athletics_container-2"></div>

        <div id="Athletics_container-3" className="h-screen">
          <div className="flex w-full h-5/6 max-sm:h-full max-md:flex-wrap">
            <div className="bg-[url('/usatcollege-CollegeUSAT-432912-459880391.webp')] bg-cover bg-top-center w-full"></div>
            <div className="bg-gray-200 flex items-center w-full">
              <div className="flex flex-col gap-6 px-16 ml-10 max-sm:ml-0 max-sm:px-8">
                <div>
                  {/* <img src="/svgs/about-icon-3.png" alt="" color="black" /> */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    // height="1em"
                    // width="1em"
                    className="w-12 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                  </svg>
                </div>
                <p className="text-xl font-semibold leading-9 pr-20 max-sm:pr-0">
                  Our goal is to be at the heart of every game and keep.
                </p>
                <p className="text-lg font-semibold max-sm:text-sm">
                  John Smith / CEO Of Financity
                </p>
              </div>
            </div>
          </div>

          <div className="bg-contingentColor py-8 w-full">
            {/* <div className="flex content-center "> */}
            <div className="grid grid-flow-col gap-4 justify-center">
              <Image src="/banner-1.png" alt="" />
              <Image src="/banner-2.png" alt="" />
              <Image src="/banner-3.png" alt="" />
              <Image src="/banner-4-1.png" alt="" />
              <Image src="/banner-5.png" alt="" />
            </div>
            {/* </div> */}
          </div>
        </div>

        <div id="Athletics_container-4" className="">
          <div className="flex justify-between pt-40 pb-20 px-10 gap-10 max-md:flex-wrap max-sm:px-4">
            <div className="w-full">
              <p className=" font-bold font-Poppins text-2xl text-contingentColor pb-6 max-sm:text-xl">
                KU Team Has A Long Story
              </p>
              <p className=" text-primary text-xl leading-8 max-sm:text-lg">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
              <br />
              <p className=" text-gray-500 leading-7 pr-30 max-md:pr-0  max-sm:text-sm max-sm:leading-6">
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean. A small river named Duden flows by their place
                and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. Even the all-powerful Pointing has no control
                about the blind texts it is an almost unorthographic life One
                day however a small line of blind text by the name of Lorem
                Ipsum decided to leave for the far World of Grammar.
              </p>
            </div>

            <div className="w-full">
              <span className="element-divider-seperator flex mb-6 border-2 border-primary"></span>

              <p className=" font-bold font-Poppins text-2xl text-contingentColor py-6 max-sm:text-xl max-sm:py-3">
                How to Participate?
              </p>
              <p className=" text-gray-500 leading-7 max-sm:text-sm max-sm:leading-6">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth. Even the all-powerful
                Pointing has no control about the blind texts it is an almost
                unorthographic life.
              </p>
              <button className="bg-primary flex items-center gap-4 text-white font-bold p-4 mt-4 max-sm:text-sm">
                Athletics Guide Book
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  className="text-white font-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    // stroke="#000"
                    stroke-width="2"
                    d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Athletics;
