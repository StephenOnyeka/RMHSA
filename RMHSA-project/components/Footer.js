import React, { useEffect } from "react";
import Link from "next/link"

import { FaXTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";  
import { FaInstagram } from "react-icons/fa";
import { useAdminContext } from "@/hooks/useAdminContext";

import Topfile from "@/components/Topfile";

function Footer() {
  const { isAdmin, verifyAdmin } = useAdminContext();


    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        verifyAdmin(storedToken);
      }
    }, [verifyAdmin]);
  return (
    <>
      <div className="font-Poppins">
        <div className="py-20 px-8 bg-black/90 max-sm:px-6">
          <div className="flex justify-center text-white/50 gap-8 max-sm:flex-wrap max-sm:gap-10 ">
            <div className="box w-full text-white leading-9">
              <span className="flex flex-wrap gap-4 items-center">
                <Link href={"/admin"}>
                  <div className="bg-[url('/images/RMHS.png')] w-10 h-10 rounded-full bg-cover bg-center"></div>
                </Link>
                <p className="text-2xl font-bold font-Playfair max-sm:text-xl">
                  Rosa Mystica <span className="font-normal"> High School</span>
                </p>
                {isAdmin && <p className="text-primary">Admin is logged In</p>}
              </span>
              <div className="text-white/60 py-4 mt-6 leading-7 max-sm:text-xs max-sm:leading-6">
                {/* <p>Box 35300</p> */}
                <p>
                  426P+H48, Awka - Okigwe Rd, Nkitaku, Agulu 422109, Anambra
                </p>
                {/* <p>1810 Campus Way NE</p>
              <p>Bothell, WA 98011-8246</p> */}
              </div>
              <p className="text-white text-xs">
                +234-8065133300 +234-8037647331, +234-8076367903
              </p>
              {/* <p className="text-white max-sm:text-xs">+234-8076367903</p>
              <p className="text-white max-sm:text-xs">+234-8076367903</p> */}
              <ul>
                <li>
                  <Link href="" className="max-sm:text-xs">
                    rosamysticahsa@gmail.com
                  </Link>
                </li>
              </ul>
              <hr className="border border-primary mt-4" />
            </div>
            <div className="box w-full">
              <p className="text-white font-semibold">For Tuition Fees</p>
              <hr className="border border-primary mt-3 mb-5" />
              <div className="text-white leading-8 max-sm:leading-7 max-sm:text-xs">
                <span className="font-semibold">Account Name:</span> Rosa
                Mystica High School Agulu
                <br />
                <br />
                <span className="font-semibold">Bank:</span> United Bank for
                Africa - UBA Plc
                <br />
                <span className="font-semibold">Account No:</span> 1000540835
                <br />
                <br />
                <span className="font-semibold">Bank:</span> Uzondu Microfinance
                Bank ltd
                <br />
                <span className="font-semibold">Account No:</span> 1100409154
              </div>
            </div>
            <div className="box w-full">
              <p className="text-white font-semibold">Community & Engagement</p>
              <hr className="border border-primary mt-3 mb-5" />
              <ul className="font-light leading-9 max-sm:leading-7 max-sm:text-xs">
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="blogs">Blogs</Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="notifications">Notifications</Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="https://wa.me/+1(347)440-9767">
                    Alumnae Group
                  </Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="contactUs">
                    Contact Us
                  </Link>
                </li>
                <br />
                <li className="hover:text-white transition-all duration-200 ease-in border border-white/50 hover:border-white px-4 md:px-8 rounded-full max-w-fit">
                  <Link href="/benefacio" className=" ">
                    Become a Donor
                  </Link>
                  {/* <Link href="" className="border border-white/50 hover:border-white p-2 px-4 rounded-full ">Become a Donor</Link> */}
                </li>
              </ul>
            </div>
            <div className="box w-full">
              <p className="text-white font-semibold">Academics</p>
              <hr className="border border-primary mt-3 mb-5" />
              <ul className="font-light leading-9 max-sm:leading-7 max-sm:text-xs">
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="https://portal.rmhsagulu.com.ng/resultchecker.aspx">
                    School Portal
                  </Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="https://eu.docworkspace.com/d/sIBjQh_iwAd36-74G">
                    Academic Calendar
                  </Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="">Pay My Tuition</Link>
                </li>
                <li className="hover:text-white transition-all duration-200 ease-in">
                  <Link href="/admission">Apply For Admission</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black/85">
          <div className="flex justify-between items-center p-10 max-sm:flex-wrap max-sm:justify-center max-sm:text-center max-sm:gap-8">
            <p className="text-white/50 text-sm font-light max-sm:text-xs">
              Copyright All Rights Reserved 2025, Rosa Mystica
            </p>
            <span>
              {/* <div className="social-contact"> */}
              <div className="flex items-center justify-center text-primary gap-5">
                <Link href="https://www.facebook.com/Rmhsagulu">
                  <FaFacebook className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaLinkedin className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaSkype className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaXTwitter className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
                </Link>
                <Link href="">
                  <FaInstagram className="h-5 w-5 hover:text-white transition-all duration-100 ease-in" />
                </Link>
              </div>
              {/* </div> */}
            </span>
          </div>
        </div>
      </div>
      <span className="">{/* <Topfile/> */}</span>
    </>
  );
}

export default Footer;
