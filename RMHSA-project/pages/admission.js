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
import { useNavigate } from "react-router-dom";

//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSesRY6sgo6ritF2-LPnOdo78eszojpl8VxTjye6eZfePJtSmA/viewform?embedded=true" width="640" height="1280" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
//https://forms.gle/ypvwbo4a3fqAEX7q8

function admission() {
  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className=" h-full font-Poppins overflow-hidden">
        <div className="bg-[url('/RMHS/IMG_3941.png')] bg-cover bg-top">
          <div
            id="Admission_container-1"
            className="bg-gradient-to-b from-black/40 to-black/80 h-screen  max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            <div className=" ">
              <Navbar />
            </div>

            <div className="absolute z-1 bottom-64 lg:bottom-8 max-sm:bottom-80  text-white">
              <p className="text-xl pb-3 max-sm:text-lg max-sm:pb-1">
                Admission
              </p>
              <p className="text-5xl font-bold max-sm:text-3xl">
                Apply To Rosa Mystica
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
                Apply To Rosa Mystica
              </Link>
            </span>
            <div className="py-10">
              <div className="flex gap-8 max-xl:flex-wrap max-xl:justify-content ">
                <div>
                  <p className=" leading-10 min-w-60 px-6 text-2xl font-bold pb-8 text-black max-sm:px-2 max-sm:text-xl">
                    Join a Community of Change-Makers
                  </p>
                  <div className="flex max-xl:flex-wrap max-xl:justify-content max-xl:gap-4">
                    <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-2 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                      Are you ready to be part of a vibrant community that's
                      shaping the future? We're looking for passionate and
                      talented students who share our vision of a better
                      tomorrow. Our admissions process is holistic, considering
                      your academic achievements, personal qualities, and
                      potential to contribute to our diverse community.
                    </p>

                    {/* <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-2 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                      If you would like to study in a school in the heart
                      of the city that focus on changing the world for better to
                      morrow, you’ve chosen the right place. We do not use
                      special formulas to select students. We look at every
                      single applicant’s application, academic and personal, to
                      select students who suit to our community.
                    </p> */}
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
              <p className="font-bold text-xl max-sm:text-lg">
                A Legacy of Excellence
              </p>
              <br />
              <p>
                Founded in 1966 by the late Archbishop CharlesHeery C.S. SP.,
                Archbishop of Onitsha, Rosa Mystica High School has a
                long-standing tradition of academic excellence and character
                development.
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl max-sm:text-lg">
                A Vibrant Campus Life
              </p>
              <br />
              <p>
                Experience a dynamic campus life filled with opportunities to
                explore your passions. From academic clubs and sports teams to
                arts and cultural events, there's something for everyone.
              </p>
            </div>
          </div>
        </div>

        <div
          id="Admission_container-4"
          className="bg-[url('/RMHS/IMG_20241015_125530.jpg')] bg-no-repeat bg-cover bg-fixed leading-7 bg-center max-sm:bg-contain "
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
                  Begin your journey by completing our online application form.
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
                  Once you've filled out the form, submit it to our admissions
                  office
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
                  Our admissions committee will carefully review your
                  application
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
                  Prepare the necessary documents, such as transcripts and test
                  scores.
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
                  Selected applicants may be invited to an interview with our
                  admissions team.
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
                  You will receive a notification of our decision according to
                  the admission calendar.
                </p>
              </div>
            </div>
          </div>
          <a href="https://forms.gle/ypvwbo4a3fqAEX7q8"><button className="bg-primary py-2 px-6 text-white mt-4">Take test </button></a>
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
                {/* The Common Application is required for students applying to any
                of our school's classes. You'll be able to choose your class and
                course{"(s)"} that you are interested in{" "}
                {"(if in senior category)"}. */}
                To apply to Rosa Mystica High School, you'll need to complete
                the <b>Common Application.</b>
              </p>
              <p> You will need: </p>

              <div className="flex items-center gap-4">
                <CgEditBlackPoint className="text-black w-12 h-12 " />
                <p>
                  <span className="font-bold"> Contact information:</span>{" "}
                  Provide the contact details of your previous school counselor
                  or representative who will complete your Common Application
                  School Report and submit your official previous school
                  transcript.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <CgEditBlackPoint className="text-black w-7 h-7 " />
                <p>
                  <span className="font-bold"> Course Selection:</span> If
                  you're applying to a senior-level program, you'll have the
                  opportunity to select specific courses of interest.
                </p>
              </div>
              <div className="flex gap-4 text-white font-semibold">
                <Link href="/gallery">
                  <button className="bg-primary p-6 max-sm:p-4">
                    Request a school tour
                  </button>
                </Link>
                <Link href="/about#RosaMystica">
                  <button className="bg-contingentColor p-6 max-sm:p-4">
                    Request information {/** Lead to contact page*/}
                  </button>
                </Link>
              </div>
            </div>

            {/* The first column is for time range the applicants can start applying through the online form. The second column is the Application Deadline; when they are expected to stop applying. The third column is when the school will definitely respond back to you (Decision) */}
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
                    <td className="p-4 border-2 border-white">
                      December 15 {/*or would be communicated via email*/}
                    </td>
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
                  to: // The school's Post Office Box
                </p>
                <br />
                {/* <div className="text-gray-400">
                  <p>Box 35300</p>
                  <p>1810 School Way NE</p>
                  <p>Bothell, WA 98011-8246 USA</p>
                </div> */}
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
