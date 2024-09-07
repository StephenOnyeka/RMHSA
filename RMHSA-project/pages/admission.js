import React from "react";
import Link from "next/link";
import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";

import { FaSkype } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgEditBlackPoint } from "react-icons/cg";

function admission() {
  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className=" h-full font-Poppins overflow-hidden">
        <div className="bg-[url('/istockphoto-1307457391-612x612.jpg')] bg-cover bg-center">
          <div
            id="Admission_container-1"
            className="bg-black/50 h-screen  max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            <div className=" ">
              <Navbar />
            </div>

            <div className="absolute z-1 bottom-64 lg:bottom-8 max-sm:bottom-80  text-white">
              <p className="text-xl pb-3 max-sm:text-lg max-sm:pb-1">
                {" "}
                Admission{" "}
              </p>
              <p className="text-5xl font-bold max-sm:text-3xl">
                {" "}
                Apply To Kingster{" "}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="min-w-full"> */}

        {/* </div> */}

        <div>
          <div id="Admission_container-2" className="px-8 py-6 max-sm:px-2">
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
                Apply To Kingster
              </Link>
            </span>
            <div className="py-10">
              <div className="flex gap-8 max-xl:flex-wrap max-xl:justify-content ">
                <div>
                  <p className=" leading-10 min-w-60 px-6 text-2xl font-bold pb-8 text-black max-sm:px-2 max-sm:text-xl">
                    Detail About How To Apply
                  </p>
                  <div className="flex max-xl:flex-wrap max-xl:justify-content max-xl:gap-4">
                    <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-2 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                      If you would like to study in the university in the heart
                      of the city that focus on chaning the world for better to
                      morrow, you’re choosin the right place. We do not use
                      special formulas to select students. We look at every
                      single applicant’s application, academic and personal, to
                      select students who suit to our community with a full
                      range of backgrounds. If you would like to study
                    </p>

                    <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-2 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                      If you would like to study in the university in the heart
                      of the city that focus on chaning the world for better to
                      morrow, you’re choosin the right place. We do not use
                      special formulas to select students. We look at every
                      single applicantt’s application, academic and personal, to
                      select students who suit to our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            id="Admission_container-3"
            className="flex items-center px-10 gap-8 bg-contingentColor h-screen/2 text-white leading-7 max-md:h-fit max-md: py-10 max-md:flex-wrap max-md:leading-6 max-sm:gap-12"
          >
            <div className="">
              <p className="font-bold text-xl max-sm:text-lg">Education Services</p>
              <br />
              <p>
                Kingster University was established by John Smith in 1920 for
                the public benefit and it is recognized.
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl max-sm:text-lg">International Hubs</p>
              <br />
              <p>
                Kingster University was established by John Smith in 1920 for
                the public benefit and it is recognized.
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl max-sm:text-lg">Bachelor's and Master's</p>
              <br />
              <p>
                Kingster University was established by John Smith in 1920 for
                the public benefit and it is recognized.
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl max-sm:text-lg">University Life</p>
              <br />
              <p>
                Kingster University was established by John Smith in 1920 for
                the public benefit and it is recognized.
              </p>
            </div>
          </div>
        </div>

        <div
          id="Admission_container-4"
          className="bg-[url('/istockphoto-520701970-612x612.jpg')] bg-no-repeat bg-cover bg-fixed leading-7 bg-center max-sm:bg-contain "
        >
          <div className="h-screen max-sm:h-screen/3"></div>
        </div>

        <div
          id="Admission_container-5"
          className="h-full px-12 py-16 max-md:px-4"
        >
          <p className="text-3xl font-bold py-8 max-md:text-2xl ">
            The Application Process
          </p>
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:flex max-sm:flex-wrap max-sm:items-center">
            <div className="flex gap-6 max-sm:gap-4">
              <p className="text-5xl max-sm:text-3xl font-bold text-red-600">
                1
              </p>
              <div>
                <p className="font-semibold pb-4 text-lg ">
                  Start Online Submission
                </p>
                <p className="max-sm:text-sm max-sm:leading-6">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
            </div>
            <div className="flex gap-6 max-sm:gap-4">
              <p className="text-5xl max-sm:text-3xl font-bold text-red-600">
                2
              </p>
              <div>
                <p className="font-semibold pb-4 text-lg"> Submit The Form</p>
                <p className="max-sm:text-sm max-sm:leading-6">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
            </div>
            <div className="flex gap-6 max-sm:gap-4">
              <p className="text-5xl max-sm:text-3xl font-bold text-red-600">
                3
              </p>
              <div>
                <p className="font-semibold pb-4 text-lg">
                  Review The Submission
                </p>
                <p className="max-sm:text-sm max-sm:leading-6">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
            </div>
            <div className="flex gap-6 max-sm:gap-4">
              <p className="text-5xl max-sm:text-3xl font-bold text-red-600">
                4
              </p>
              <div>
                <p className="font-semibold pb-4 text-lg">
                  Gather Necessary Documents
                </p>
                <p className="max-sm:text-sm max-sm:leading-6">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
            </div>
            <div className="flex gap-6 max-sm:gap-4">
              <p className="text-5xl max-sm:text-3xl font-bold text-red-600">
                5
              </p>
              <div>
                <p className="font-semibold pb-4 text-lg">
                  Interviewing Process
                </p>
                <p className="max-sm:text-sm max-sm:leading-6">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
            </div>
            <div className="flex gap-6 max-sm:gap-4">
              <p className="text-5xl max-sm:text-3xl font-bold text-red-600">
                6
              </p>
              <div>
                <p className="font-semibold pb-4 text-lg"> Last Decision</p>
                <p className="max-sm:text-sm max-sm:leading-6">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <hr className="border border-contingentColor w-5/6" />
        </div>

        <div className="h-fit max-sm:text-sm">
          <div className="flex py-8 px-8 gap-8 justify-between w-full text-gray-500 max-md:flex-wrap max-md:items-center max-sm:px-4">
            <div className="flex flex-col gap-8 w-1/2 max-md:w-full">
              <p className="font-bold text-xl text-black">
                {" "}
                Things To Know First
              </p>
              <p>
                {" "}
                The Common Application is required for students applying to any
                or all of KU's three degree. You'll be able to choose your
                campus and program{"(s)"} that you are interested.
              </p>
              <p> You will need: </p>

              <div className="flex items-center gap-4">
                <CgEditBlackPoint className="text-black w-12 h-12 " />
                <p>
                  Contact information for the counselor or other school
                  representative who will complete your Common Application
                  School Report and submit your official high school transcript.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <CgEditBlackPoint className="text-black w-7 h-7 " />
                <p>
                  Contact information for one teacher (or two, maximum) who will
                  complete the Teacher Evaluation form.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <CgEditBlackPoint className="text-black w-8 h-8 " />
                <p>
                  Nonrefundable $50 application fee. Students who are unable to
                  pay the application fee can request a fee waiver
                </p>
              </div>

              <div className="flex gap-4 text-white font-semibold">
                <button className="bg-primary p-6 max-sm:p-4">
                  Request a campus tour
                </button>
                <button className="bg-contingentColor p-6 max-sm:p-4">
                  Request information
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-1/2 max-md:w-full">
              <p className="font-bold text-xl text-black">When To Apply</p>
              <table className="text-center">
                <thead>
                  <tr className=" text-white ">
                    <th className="bg-primary p-4 border-2 border-white"> </th>
                    <th className="bg-primary p-4 border-2 border-white font-medium">
                      {" "}
                      Application Deadline{" "}
                    </th>
                    <th className="bg-primary p-4 border-2 border-white font-medium">
                      {" "}
                      Decision{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-200">
                    <td className="p-4 border-2 border-white">
                      Early Decision 1
                    </td>
                    <td className="p-4 border-2 border-white">November 1</td>
                    <td className="p-4 border-2 border-white">December 15</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 border-2 border-white">
                      Early Decision 2
                    </td>
                    <td className="p-4 border-2 border-white">January 1</td>
                    <td className="p-4 border-2 border-white">February 15</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="p-4 border-2 border-white">
                      Regular Decision
                    </td>
                    <td className="p-4 border-2 border-white">January 1</td>
                    <td className="p-4 border-2 border-white">April 1</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <p className="text-xl text-black font-bold">
                  Where to submit Necessary documents?
                </p>

                <br />
                <p className="">
                  Document not submitted through the online method can be mailed
                  to:
                </p>
                <br />
                <div className="text-gray-400">
                  <p>Box 35300</p>
                  <p>1810 Campus Way NE</p>
                  <p>Bothell, WA 98011-8246 USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default admission;
