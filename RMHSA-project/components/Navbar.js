import React,{useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { usePathname } from "next/navigation";  

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="">
        <nav className="navbar">
          <ul
            className="sidebar bg-contingentColor text-white"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            <li onClick={toggleMenu} className="m-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // height="26"
                viewBox="0 96 960 960"
                width="40"
                fill="#ffffff"
                // className="mt-8"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </li>
            <li>
              <Link
                href="/"
                className={`text-white ${
                  pathname === "/"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Home
              </Link>{" "}
            </li>
            <li>
              <Link
                href="/about"
                className={`text-white ${
                  pathname === "/about"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                About
              </Link>{" "}
            </li>
            <li>
              <Link
                href="/admission"
                className={`text-white ${
                  pathname === "/admission"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Admissions
              </Link>{" "}
            </li>
            <li>
              <Link
                href="/school-life"
                className={`text-white ${
                  pathname === "/school-life"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                School Life
              </Link>{" "}
            </li>
            <li>
              <Link
                href="athletics"
                className={`text-white ${
                  pathname === "/athletics"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Athletics
              </Link>{" "}
            </li>
            <li>
              <Link
                href="/give-to-Kingster"
                className={`text-white ${
                  pathname === "/give-to-Kingster"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Benefacto
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className={`text-white ${
                  pathname === "/contactUs"
                    ? "font-semibold border-primary border-b-2 text-xl bg-white/10"
                    : "hover:bg-white/10 hover:text-xl "
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="">
          <div className=" flex justify-between justify-items-center items-center">
            <div className="logo">LOGO</div>
            <div className="flex space-x-5 gap-4">
              <span className="hideOnMobile">
                <Link
                  href="/"
                  className={` ${
                    pathname === "/"
                      ? "font-semibold border-primary border-b-8 pb-2.5"
                      : "border-primary border-b-8 border-opacity-0 hover:border-opacity-100 pb-2.5 hover:font-medium focus:font-semibold"
                  }`}
                >
                  Home
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="/about"
                  className={` ${
                    pathname === "/about"
                      ? "font-semibold border-primary border-b-8 pb-2.5"
                      : "border-primary border-b-8 border-opacity-0 hover:border-opacity-100 pb-2.5 hover:font-medium focus:font-semibold"
                  }`}
                >
                  About
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="/admission"
                  className={` ${
                    pathname === "/admission"
                      ? "font-semibold border-primary border-b-8 pb-2.5"
                      : "border-primary border-b-8 border-opacity-0 hover:border-opacity-100 pb-2.5 hover:font-medium focus:font-semibold"
                  }`}
                >
                  Admissions
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="/school-life"
                  className={` ${
                    pathname === "/school-life"
                      ? "font-semibold border-primary border-b-8 pb-2.5"
                      : "border-primary border-b-8 border-opacity-0 hover:border-opacity-100 pb-2.5 hover:font-medium focus:font-semibold"
                  }`}
                >
                  School Life
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="/athletics"
                  className={` ${
                    pathname === "/athletics"
                      ? "font-semibold border-primary border-b-8 pb-2.5"
                      : "border-primary border-b-8 border-opacity-0 hover:border-opacity-100 pb-2.5 hover:font-medium focus:font-semibold"
                  }`}
                >
                  Athletics
                </Link>{" "}
              </span>
              <span className="hideOnMobile">
                <Link
                  href="/give-to-Kingster"
                  className={` ${
                    pathname === "/give-to-Kingster"
                      ? "font-semibold border-primary border-b-8 pb-2.5"
                      : "border-primary border-b-8 border-opacity-0 hover:border-opacity-100 pb-2.5 hover:font-medium focus:font-semibold"
                  }`}
                >
                  Benefacto
                </Link>
              </span>
              <span className="hideOnMobile">
                <Link
                  href="/contactUs"
                  className={` ${
                    pathname === "/contactUs"
                      ? "font-semibold border-primary border-b-8 pb-2.5"
                      : "border-primary border-b-8 border-opacity-0 hover:border-opacity-100 pb-2.5 hover:font-medium focus:font-semibold"
                  }`}
                >
                  Contact
                </Link>
              </span>
              <span
                className="menu-button"
                onClick={toggleMenu}
                style={{ display: isOpen ? "none" : "flex" }}
              >
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   height="52"
                    viewBox="0 96 960 960"
                    // width="40"
                    fill="#ffffff"
                    // style={{width: }}
                    className="max-lg:w-10"
                  >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;