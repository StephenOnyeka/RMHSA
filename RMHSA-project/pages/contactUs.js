import React, { useEffect } from "react";
// import CountUp from "react-countup";

import Link from "next/link";
import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";

// import {wait}

import { FaSkype } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Loading from "@/components/loading";

function ContactUs() {
  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className=" h-full font-Poppins overflow-hidden">
        <div className="bg-[url('/istockphoto-1307457391-612x612.jpg')] bg-cover bg-center">
          <div
            id="Contact_container-1"
            className="bg-primary/70 h-screen px-8 pt-8 w-full font-Poppins text-white max-lg:h-screen/1.5 max-md:h-screen/2 max-sm:px-4 "
          >
            <div className=" pb-64 max-sm:pb-36 ">
              <Navbar />
            </div>
            {/* <div className="flex justify-center  "> */}
            <div className=" text-center ">
              <p className="text-6xl font-bold pb-3 max-md:text-5xl max-sm:text-3xl">
                Contact Us
              </p>
              <p className="text-2xl max-md:text-xl max-sm:text-lg">
                Get In Touch
              </p>
            </div>
          </div>
        </div>

        {/* <div className="min-w-full"> */}

        {/* </div> */}

        <div>
          <div
            id="Contact_container-2"
            className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 h-full"
          >
            <div className=" flex items-center px-16 gap-16 content-evenly bg-black text-white leading-7 py-28 max-md:py-16 max-md:flex-wrap max-md:items-center max-sm:px-6 max-sm:gap-12 max-md:content-center">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="font-bold text-3xl pt-8 max-sm:text-xl">Phone</p>
                <br />
                <p className="max-sm:text-sm">
                  A wonderful serenity has taken possession of my entire soul,
                  like these.
                </p>
                <br />
                <p className="text-red-700 max-sm:text-sm"> +1-2345-2345</p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
                <p className="font-bold text-3xl pt-8 max-sm:text-xl">
                  {" "}
                  Email{" "}
                </p>
                <br />
                <p className="max-sm:text-sm">
                  A wonderful serenity has taken possession of my entire soul,
                  like these.
                </p>
                <br />
                <p className="text-red-700 max-sm:text-sm">
                  {" "}
                  Contact@goodlayers.com
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <p className="font-bold text-3xl pt-8 max-sm:text-xl">
                  Location
                </p>
                <br />
                <p className="max-sm:text-sm">
                  4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342
                </p>
                <br />
                <p className="text-red-700 max-sm:text-sm">
                  {" "}
                  View on Google Map
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="Contact_container-3"
          className="h-full bg-gray-200 py-32 max-md:py-16"
        >
          <div className="flex flex-col content-center items-center">
            <div className="text-center py-8">
              <p className="text-4xl font-extrabold py-4 max-sm:text-2xl max-sm:py-2">
                LEAVE US YOUR INFO
              </p>
              <p className="text-lg text-gray-500 max-sm:text-sm">
                AND WE WILL GET BACK TO YOU.
              </p>
            </div>
            <div className="flex flex-col w-700 max-md:w-full max-sm:px-4 max-md:px-8">
              <input
                type="text"
                placeholder="Full Name*"
                className="h-14 text-sm px-4 "
              />
              <br />
              <input
                type="text"
                placeholder="Email*"
                className="h-14 text-sm px-4"
              />
              <br />
              <input
                type="text"
                placeholder="Subject*"
                className="h-14 text-sm px-4"
              />
              <br />
              <textarea
                name="message"
                placeholder="Message*"
                className="min-h-32 text-sm px-4 pt-4 "
                id=""
              ></textarea>
              <br />
              <button className="bg-primary text-white text-xs font-bold tracking-wider py-4">
                SUBMIT NOW
              </button>
            </div>
          </div>
        </div>
        {/* <div className=" h-screen"> */}
        <div className=" overflow-hidden h-screen max-md:h-screen/2 max-sm:h-screen/3 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1489973793214!2d7.221241541187521!3d5.974210178614527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10430dabbf9537bb%3A0x376b8ebd1d7c39db!2sMadonna%20Secondary%20School!5e0!3m2!1sen!2sng!4v1715306310319!5m2!1sen!2sng"
            // width="1200"
            // height="450"
            // style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" w-full h-full"
          ></iframe>
        </div>
        {/* </div> */}
        <div className="social-contact">
          <div className="flex items-center justify-center py-16 gap-9">
            <FaEnvelope className="h-8 w-5" />
            <GrFacebookOption className="h-8 w-5" />
            <FaSkype className="h-8 w-5" />
            <FaTwitter className="h-8 w-5" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
