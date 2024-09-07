import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollDiv from "@/components/Scroll";
import Footer from "@/components/Footer";
import Topfile from "@/components/Topfile";

function ErrorPage() {
  return (
    <div className="">
      <Topfile />
      <ScrollDiv />
      <div className="font-Poppins overflow-hidden">
        <div className="bg-[url('/1553013910-0223337a160355a4e4e18ffc6989af5cbba82deb854f4c212e2067bbf9126ef3-d_640.webp')] bg-cover bg-center w-full">
          <div
            id="404_container-1"
            className="bg-sky-800/70 h-screen max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            {/* <div className="pb-32"> */}
            <div className="pb-32 max-md:pb-24 2xl:pb-64">
              <Navbar />
            </div>

            <div className=" text-center ">
              <p className="text-9xl font-bold pb-8 max-md:text-7xl max-sm:text-7xl max-sm:pb-4">
                404
              </p>
              <p className="text-4xl font-bold pb-3 max-md:text-2xl max-sm:pb-2">
                {" "}
                PAGE NOT FOUND
              </p>
              <p className="text-lg text-sky-200 pb-8 max-sm:pb-4 max-sm:text-sm">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <form action="" className="flex justify-center pb-8">
                <input
                  type="text"
                  className="w-96 p-4 bg-black/40 text-white placeholder-white focus:outline-none max-sm:text-sm max-sm:w-56 text-sm max-sm:p-4"
                  placeholder="Type Keywords..."
                />
                <button className="bg-black/40 p-6 max-sm:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    // height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
              <Link href="/" className="max-sm: text-sm">
                OR BACK TO HOMEPAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
