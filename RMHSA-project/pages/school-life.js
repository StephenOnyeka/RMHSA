import React from "react";
import Link from "next/link";
import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

function SchoolLife() {
  return (
    <div>
      <ScrollDiv />
      <div className=" h-full font-Poppins overflow-hidden">
        <div className="bg-[url('/240_F_66155005_PcFq0uZuTyqMlfDjA10ulpJZU6UQFmRU.jpg')] bg-cover bg-top-center">
          <div
            id="SchoolLife_container-1"
            className="bg-black/70 h-screen max-sm:h-screen/1.5 max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            <div className=" ">
              <Navbar />
            </div>

            {/* <div className=" absolute z-1 bottom-64 lg:bottom-8 max-sm:bottom-72 text-white"> */}
            <div className=" pt-80 max-sm:pt-24 text-white">
              {/**pt-24 */}
              <div className="py-10">
                <div className="flex gap-16 max-md:flex-wrap max-md:content-center max-md:gap-8">
                  <div className="min-w-80">
                    <p className=" font-bold font-Poppins text-4xl max-md:text-2xl">
                      School Life
                      <span className="element-divider-seperator flex w-5/6 mt-4 border-2 border-primary "></span>
                    </p>
                  </div>

                  <p className="text-lg leading-8 px-6 max-md:px-3 max-md:leading-6 max-md:text-sm max-sm:px-0 ">
                    Campus on a tour designed for prospective graduate and
                    professional students. You will see how our university like,
                    facilities, studenst and life in this university. Meet our
                    graduate admissions representative to learn more about our
                    graduate programs and decide what it the best for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="min-w-full"> */}
        <div
          id="SchoolLife_container-2"
          className="flex justify-between gap-10 max-md:flex-wrap"
        >
          {/* <div className=""> */}
          <div className="w-full pt-24 pb-20 px-10 max-sm:px-8">
            <p className="font-semibold font-Poppins text-2xl text-black pb-6 max-sm:text-xl">
              Event and traditions
            </p>
            <p className=" text-contingentColor text-xl leading-8 ">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
            <br />
            <p className=" text-gray-500 leading-7 pr-30 max-sm:leading-6 max-sm:text-sm">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life.
            </p>
            <div className="">
              <span className="element-divider-seperator flex my-12 border-2 border-contingentColor"></span>

              <p className=" font-bold font-Poppins text-2xl text-contingentColor py-6 max-sm:text-xl">
                How to Participate?
              </p>
              <p className=" text-gray-500 leading-7 max-sm:text-sm max-sm:leading-6">
                Separated they live in Bookmarks grove right at the coast of the
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

          <div className=" bg-gray-200 pt-24 pb-20 px-10 pl-20 w-full text-gray-500 max-sm:px-8">
            <Image src="/life-bus.jpg" alt="" />

            <div className="flex  flex-col">
              <div className="flex gap-6 items-center my-6 max-sm:gap-3">
                <Image src="/icon-transportation.png" alt="" />
                <p className="text-lg text-black font-semibold mt-4">
                  {" "}
                  Transportations
                </p>
              </div>
              <p className="font-bold mb-2 max-sm:text-sm max-sm:leading-6">
                There are many options to travel in the campus.
              </p>
              <p className="max-sm:text-sm max-sm:leading-6">
                There live the blind texts. Separated they live in Bookmarks
                grove right at the coast of the Semantics, a large language
                ocean. A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a
                paradisematic. It is a paradise matic country, in which roasted
                parts of sentences fly into.
              </p>
            </div>
            <div className="flex  flex-col">
              <div className="flex gap-6 items-center my-8">
                <Image src="/icon-parking.png" alt="" />
                <p className="text-lg text-black font-semibold mt-4">
                  Parking
                </p>
              </div>
              <p className="max-sm:text-sm max-sm:leading-6">
                More than 1000 parking lots avilable in the west side of the
                compus. The parking is available 24 hours with 24hours security.
                We make sure that everything is under control.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}

        <div
          id="SchoolLife_container-3"
          className=" bg-[url('/istockphoto-620952978-612x612.jpg')] bg-cover bg-fixed bg-top-center bg-opacity-50 "
        >
          <div className=" flex justify-between content-center gap-8 px-10 w-full bg-primary/70 py-36 text-white leading-7 max-md:flex-wrap max-md:items-center max-md:px-8 max-sm:py-24">
            <p className="font-bold text-3xl w-2/5 max-md:text-2xl max-md:w-full max-sm:text-xl">
              The Campus Experience
            </p>
            <p className="text-xl font-medium leading-8 w-4/5 max-sm:w-full max-sm: max-sm:text-justify">
              Kingster University was established by John Smith in 1920 for the
              public benefit and it is recognized globally. Throughout our great
              history, Kingster has offered access to a wide range of academic
              opportunities. As a world leader in higher education, the
              University has pioneered change in the sector.
            </p>
          </div>
        </div>

        <div id="SchoolLife_container-4" className="">
          <div className="flex w-full h-5/6 max-md:flex-wrap max-md:items-center">
            <div className="bg-[url('/Sept.-20-The-Principal-as-Leader_web.jpg')] bg-cover bg-top-center bg-no-repeat w-full max-md:py-64 max-sm:py-32"></div>
            <div className="bg-gray-200 flex items-center w-full py-36 max-sm:py-12">
              <div className="flex flex-col gap-6 px-16 ml-10 max-sm:ml-0">
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
                  Our goal is to be at the heart of every game and keep the
                  winning pace across every distance.
                </p>
                <p className="text-lg font-semibold max-sm:text-sm">
                  John Smith / CEO Of Financity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SchoolLife;
