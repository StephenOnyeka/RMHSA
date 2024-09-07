import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="font-Poppins">
      <div className="py-20 px-12 bg-black/90 max-sm:px-6">
        <div className="flex justify-center text-white/50 gap-10 max-sm:flex-wrap max-sm:gap-10 ">
          <div className="box w-full text-white leading-9">
            <p className="text-2xl font-bold font-Playfair max-sm:text-xl">
              Kingster <span className="font-normal"> HighSchool</span>
            </p>
            <div className="text-white/60 py-4 mt-6 leading-7 max-sm:text-xs max-sm:leading-6">
              <p>Box 35300</p>
              <p>1810 Campus Way NE</p>
              <p>Bothell, WA 98011-8246</p>
            </div>
            <p className="text-white max-sm:text-xs">+1-2345-6789-101</p>
            <ul>
              <li>
                <a href="" className="max-sm:text-xs">admin@kingsteruni.edu</a>
              </li>
            </ul>
            <hr className="border border-primary mt-4" />
          </div>
          <div className="box w-full">
            <p className="text-white font-semibold">Our Campus</p>
            <hr className="border border-primary mt-3 mb-5" />
            <ul className="font-light leading-9 max-sm:leading-7 max-sm:text-xs">
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Academic</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Planning & Administration</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Campus Safety</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Office of the Chancellor</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Facility Services</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Human Resources</a>
              </li>
            </ul>
          </div>
          <div className="box w-full">
            <p className="text-white font-semibold">Campus Life</p>
            <hr className="border border-primary mt-3 mb-5" />
            <ul className="font-light leading-9 max-sm:leading-7 max-sm:text-xs">
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Accessibility</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Financial Aid</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Food Services</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Housing</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Information Technologies</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Student Life</a>
              </li>
            </ul>
          </div>
          <div className="box w-full">
            <p className="text-white font-semibold">Academics</p>
            <hr className="border border-primary mt-3 mb-5" />
            <ul className="font-light leading-9 max-sm:leading-7 max-sm:text-xs">
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Canvas</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Catalyst</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Library</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Time Schedule</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Apply For Admissions</a>
              </li>
              <li className="hover:text-white transition-all duration-200 ease-in">
                <a href="">Pay My Tuition</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black/85">
        <div className="flex justify-between items-center p-10 max-sm:flex-wrap max-sm:justify-center max-sm:text-center max-sm:gap-8">
          <p className="text-white/50 text-sm font-light max-sm:text-xs">
            {" "}
            Copyright All Right Reserved 2024, GoodLayers
          </p>
          <span>
            {/* <div className="social-contact"> */}
            <div className="flex items-center justify-center text-primary gap-5">
              <a href="">
                <FaFacebook className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
              </a>
              <a href="">
                <FaLinkedin className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
              </a>
              <a href="">
                <FaSkype className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
              </a>
              <a href="">
                <FaXTwitter className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
              </a>
              <a href="">
                <FaInstagram className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
              </a>
            </div>
            {/* </div> */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
