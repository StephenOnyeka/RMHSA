import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollDiv from "@/components/Scroll";
import Accordion from "@/components/Accordion";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";

function Donate() {
  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className=" h-full font-Poppins overflow-hidden">
        <div className="bg-[url('/istockphoto-1307457391-612x612.jpg')] bg-cover bg-center">
          <div
            id="Donor_container-1"
            className="bg-black/70 h-screen max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            <div className="">
              <Navbar />
            </div>

            <div className="absolute z-1 bottom-64 lg:bottom-8 max-sm:bottom-80 text-white">
              <p className="text-xl pb-3 max-sm:text-lg max-sm:pb-1">
                Become a donor
              </p>
              <p className="text-5xl font-bold max-sm:text-3xl">
                Give To Kingster
              </p>
            </div>
          </div>
        </div>

        {/* <div className="min-w-full"> */}
        <div id="Donor_container-2" className="px-8 py-6 w-full max-sm:px-4">
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
              Give To Kingster
            </Link>
          </span>
          <div className="py-10">
            <div className="flex gap-12 w-full max-md:flex-wrap">
              <div className="w-5/6 max-sm:w-full">
                <div>
                  <p className=" font-semibold font-Poppins text-3xl text-black max-md:text-2xl max-sm:text-xl">
                    About Kingster Fund
                  </p>
                  <br />
                  <p className=" text-gray-500 leading-7 max-sm:text-sm max-sm:leading-6">
                    We continues to adapt to new ways of teaching, new
                    disciplines of study and new ways of learning. Your gift
                    enriches the experience of all students by supporting
                    efforts to recruit top faculty, expand academic programs and
                    respond to the emerging needs of our campus and our world.
                  </p>
                  <br />
                  <p className=" text-gray-500 leading-7 max-sm:text-sm max-sm:leading-6">
                    Not only does Kingster University provide you the practical
                    skills that is necessary to transition seamlessly into the
                    workforce upon your graduation, but we also make sure that
                    you will have a good sense of social justice so that you
                    make the transition responsibly.
                  </p>
                  <br />
                  <Image src="/support-building.jpg" className="pt-8" alt="" />
                </div>

                <div id="" className="py-16 ">
                  <div className="flex justify-between w-full items-center py-8 ">
                    <p className="text-2xl font-semibold max-sm:text-xl">
                      Various Donation Options{" "}
                    </p>
                    <hr className="border-2 border-gray-200 w-3/5" />
                  </div>
                  <div className="h-screen/2 text-center max-sm:h-fit">
                    <div className=" grid grid-cols-3 gap-6 max-md:gap-3">
                      <div className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 ">
                        <div className=" flex items-center justify-center bg-primary/70 h-full py-14 max-sm:py-6 max-sm:px-2 text-white">
                          <p className="text-base font-semibold max-md:text-sm">
                            {" "}
                            Student Scholarships
                          </p>
                        </div>
                      </div>
                      <div className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 ">
                        <div className=" flex items-center justify-center bg-primary/70 h-full py-14 max-sm:py-6 max-sm:px-2 text-white">
                          <p className="text-base font-semibold max-md:text-sm">
                            {" "}
                            Schools & Colleges
                          </p>
                        </div>
                      </div>
                      <div className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 ">
                        <div className=" flex items-center justify-center bg-primary/70 h-full py-14 max-sm:py-6 max-sm:px-2 text-white">
                          <p className="text-base font-semibold max-md:text-sm">
                            {" "}
                            Library & Cultural
                          </p>
                        </div>
                      </div>
                      <div className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 ">
                        <div className=" flex items-center justify-center bg-primary/70 h-full py-14 max-sm:py-6 max-sm:px-2 text-white">
                          <p className="text-base font-semibold max-md:text-sm">
                            {" "}
                            Support Sport Team
                          </p>
                        </div>
                      </div>
                      <div className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 ">
                        <div className=" flex items-center justify-center bg-primary/70 h-full py-14 max-sm:py-6 max-sm:px-2 text-white">
                          <p className="text-base font-semibold max-md:text-sm">
                            {" "}
                            Student Life
                          </p>
                        </div>
                      </div>
                      <div className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 ">
                        <div className=" flex items-center justify-center bg-primary/70 h-full py-14 max-sm:py-6 max-sm:px-2 text-white">
                          <p className="text-base font-semibold max-md:text-sm">
                            {" "}
                            Emergency Fund
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-between w-full items-center pb-8">
                    <p className="text-2xl font-semibold max-sm:text-xl">
                      Why give to Kingster?
                    </p>
                    <hr className="border-2 border-gray-200 w-3/5" />
                  </div>

                  <div className="py-4">
                    <Accordion />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 text-white w-2/5 max-md:w-full">
                <>
                  <button className="bg-primary p-6 font-bold">
                    Become A Donor
                  </button>
                  <div className="bg-contingentColor py-12 pl-10 leading-8 max-lg:px-4 max-sm:px-8">
                    <div className="pb-6">
                      <p className="text-xl font-bold pb-2">
                        Department Contact Info
                      </p>
                      <p className="font-semibold ">Office of Development</p>
                    </div>
                    <div className="pb-6">
                      <p>1810 Campus Way NE</p>
                      <p>Bothell, WA 98011-8246</p>
                    </div>
                    <div className="pb-6">
                      <p>+1-2345-6789-10</p>
                      <p>sample@hiskool.edu</p>
                    </div>
                    <p className="pb-6">Mon-Fri 9:00A.M.-5:00P.M.</p>
                    <p className="font-bold text-xl py-4">Social Info</p>
                    <div className="flex gap-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 320 512"
                        className="text-primary w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="text-primary w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="text-primary w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="text-primary w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="text-primary w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </div>
                  </div>
                </>

                <>
                  <div className="py-8">
                    <div className="bg-gray-200 p-4 text-black font-semibold border-b-4 mb-8 border-primary">
                      Video Presentation
                    </div>
                    <div className="w-full h-56">
                      <iframe
                        // width="560"
                        // height="315"
                        src="https://www.youtube.com/embed/C5pKtnmHTxg?si=qJpzI_gcadldMaes"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-contingentColor2 py-12 pl-10 leading-8 max-lg:px-4 max-sm:px-8 max-sm:mb-8 max-sm:py-6">
                    <div className="pb-6">
                      <p className="text-xl font-bold pb-4">
                        Department Contact Info
                      </p>
                      <p className="font-semibold text-green-600">
                        Engineering
                      </p>
                    </div>
                    <div className="pb-6">
                      <p>1810 Campus Way NE</p>
                      <p>Bothell, WA 98011-8246</p>
                    </div>
                    <div className="pb-6">
                      <p>+1-2345-6789-10</p>
                      <p>sample@hiskool.edu</p>
                    </div>
                    <p className="pb-6 text-green-600">
                      Mon-Fri 9:00A.M.-5:00P.M.
                    </p>
                    <p className="font-bold text-xl py-4">Social Info</p>
                    <div className="flex gap-4 text-green-600 pb-12">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 320 512"
                        className=" w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className=" w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className=" w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className=" w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className=" w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </div>
                    <button className="bg-primary p-4 px-6 font-bold">
                      Student Resources
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="text-white h-screen/2 max-sm:absolute z-1 ">
          <div className="bg-contingentColor flex gap-10 items-center justify-center px-6 pt-24 w-full py-28 max-sm:flex-wrap max-sm:py-16">
            <div className="w-2/4 px-8 max-sm:w-full max-sm:px-4">
              <Image
                src="/240_F_109000790_1iCSQYErYo5znbWZsZVJyuC64H9BJAVA.jpg"
                alt=""
                className="w-full -mt-40 max-sm:-mt-32"
              />
            </div>
            <div className="w-2/4 flex flex-col gap-12 max-sm:w-full max-sm:gap-6">
              <p className="text-2xl leading-10 max-sm:text-xl max-sm:leading-8">
                Thanks to you, our students are gaining the knowledge, skills
                and values to create a more humane, just, and sustainable world.
              </p>
              <div className="">
                <button className="bg-primary flex gap-2 text-sm font-semibold p-4 px-6 max-sm:text-xs">
                  Become A Donor
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className=""
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Donate;
