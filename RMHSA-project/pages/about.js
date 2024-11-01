import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function About() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className=" font-Poppins overflow-hidden">
        <div className="bg-[url('/RMHS/IMG_20241015_123620.jpg')] bg-cover bg-no-repeat bg-center">
          <div
            id="About_container-1"
            className="bg-gradient-to-b from-black/40 to-black/80 h-screen max-md:h-screen/1.5 px-8 pt-8 max-sm:px-4 w-full font-Poppins text-white"
          >
            {/* <div className="flex justify-between justify-items-center mt-44 pb-64"> */}
            <div className=" ">
              <Navbar />
            </div>

            <div className=" absolute z-1 bottom-64 lg:bottom-8 max-sm:bottom-80 text-white ">
              <p className="text-xl pb-3 max-sm:text-lg max-sm:pb-1">
                Know Us Better
              </p>
              <p className="text-5xl font-bold max-sm:text-3xl">About Us</p>
            </div>
          </div>
        </div>
        {/* <div className="min-w-full"> */}
        <div id="About_container-2" className="px-8 py-6 max-sm:px-4">
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
              About Us
            </Link>
          </span>
          <div className="flex flex-col items-center py-10">
            <div className="flex gap-16 max-xl:flex-wrap max-sm:gap-8">
              <div className="min-w-80">
                <p className=" font-bold font-Poppins text-3xl text-contingentColor max-sm:text-2xl">
                  Rosa Mystica's History
                  <span className="element-divider-seperator flex w-5/6 mt-4 border-2 border-primary max-sm:w-4/6 "></span>
                </p>
              </div>
              <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-0 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                If you would like to study in a school in the heart of the city
                that focus on changing the world for better to morrow, you’re in
                the right place. We do not use special formulas to select
                students. We look at every single applicant’s application,
                academic and personal, to select students who suit to our
                community with a full range of backgrounds.s. If you would like
                to study
              </p>
              <p className=" text-gray-500 leading-7 min-w-60 px-6 max-sm:px-0 max-sm:leading-6 max-sm:text-sm max-sm:text-justify">
                If you would like to study in a school in the heart of the city
                that focus on changing the world for better tomorrow, you’re
                choosing the right place. We do not use special formulas to
                select students. We look at every single applicant’s
                application, academic and personal, to select students who suit
                to our community.
              </p>
            </div>

            <br />
            {/* {show ? "" : {setShow= ()=> {<MdKeyboardDoubleArrowDown size={35} />} }} */}
            <button
              onClick={() => {
                setShow(true);
              }}
            >
              {show ? "" : <MdKeyboardDoubleArrowDown size={35} />}
            </button>
            <br />
            <div>
              {show ? (
                // <p className="w-[600px] max-w-full mx-0 my-auto">
                // <p className="columns-3 gap-x-8">
                <p className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                  Girls’ High School, Agulu, formerly named Catholic Girls’
                  Secondary School Agulu was founded in 1966 by late Archbishop
                  CharlseHeery C.S. SP. Archbishop of Onitsha. The site of
                  Girls’ High School is the former Practising Teachers’ College.
                  In 1946 it was converted to lower Elementary Training College
                  by name St. John Bosco’s College Agulu. The site was formerly
                  a big forest uninhabited and dreaded by people. It is the
                  highest peak at Agulu. The initial clearing and lease of land
                  was done by Rev. Fr. Lidan, who was the Parish Priest of
                  Adazi-Nnukwu. The college was owned exclusively by the
                  Catholic Mission and it was headed by Rev. Fathers_ Rev. Fr.
                  Halping, Rev. Fr. Chamberline, Fr. Regan and finally by Rev.
                  Fr. Edward Hurley_all were Holy Ghost Fathers from Kimage
                  Manor in Ireland. Mr Nwabugwu and Mr E.C. Ezeobi also helped
                  in the Administration of the school. Rev. Fr. Edward Hurley
                  made St Anthony’s college famous by discipline, high academic
                  standards and excellence in sports. He constructed most of the
                  buildings but the most outstanding constructions are the games
                  field and Hurley Hall. He spent himself for the interest of
                  the school. He had a very powerful personality and his
                  presence permeated into every nook and corner. His good
                  influence on his students is seen in the high intergrity and
                  conscientiousness of former St Anthony’s students. Fr Hurley
                  died in active service in this school in August 1962. May his
                  noble and great soul rest in perfect peace. Amen. In 1965, the
                  Irish Sisters of St. John of God took over the administration
                  of the school named it "Catholic Girl’s Secondary School
                  Agulu". The compound was very neat and beautifully decorated
                  with flowers but this was short lived because soon the
                  Nigerian civil war began in 1967 and the beauty of the
                  compound was completely destroyed. The Nigerian soldiers came
                  into Agulu and occupied the school in 1968. They were driven
                  out by Biafran soldiers who equally in their turn occupied the
                  school. Towards the end of the war in early 1970, when the
                  Biafrans lost the war, the Nigerian soldiers came in again and
                  occupied the school. With subsequent occupation of the school
                  by soldiers, the school was completely ruined. The school
                  chapel was desecrated and turned into a court. The Nigerian
                  soldiers refused to quit the school even after repeated appeal
                  to the highest quarters. They stayed even till 1975. The
                  school took refuge in Agulu Town Hall. This Occupation of the
                  school by soldiers left the school buildings and the school
                  compound in a very pitiable condition, and was the cause of
                  non- reconstruction of the school when the State Government
                  poured money{" "}
                  <p>
                    into schools for reconstruction. In 1970, the Est Central
                    State Government took over all schools in the State and the
                    name Catholic Girls’ Secondary School became Girls’ High
                    School, Agulu. The first Principal after the civil war was
                    Mr Bernard NduegbunemOkoye. He worked very hard and on 17th
                    and 18th May 1971, the school was inspected and approved for
                    West African School Certificate Examination. On 4th March
                    1972, Mrs MediatrixEneasato replaced Mr B. N. Okoye as the
                    Principal of the school. She did her best to uplift the
                    image of the school. With the aid of Mr John Ukoh- one of
                    the Landlords, she stopped encroachment on the school land.
                    She walled some parts of the school. The number of students
                    increased steadily. With the co-operation of the staff,
                    discipline was improved. The P.T.A helped her financially to
                    construct one dormitory block. She also built a
                    six-classroom block. The school team of Basket ball won Gold
                    medals during this period. Mrs Eneasato finally was
                    transferred to Ogidi Girls’ Secondary School while Sr.
                    Miriam ThereseOzomma from Ogidi Girls’ came to Agulu. On 8th
                    September 1979, Sr. Miriam Therese Ozomma- the new Principal
                    arrived with her loads , ready for the new term. She noticed
                    that the main problems were how to improve the academic
                    standard, accommodation, water, security, light furniture
                    etc. On 13th October 1979, she met the Executives of Agulu
                    People’s Union at Onitsha and in a letter read to them, she
                    portrayed the lack of accommodation in the school. It was
                    unanimously agreed that the A.P.U will build a one storey
                    building to ease the congestion. The building is now nearing
                    completion. She increased the study period to improve the
                    academic standard. A water tanker was arranged to bring
                    water to the school so that students go out only once a week
                    to fetch water. The school Rules and regulations was printed
                    and distributed to every student in aid of discipline. The
                    P.T.A provided the finance that helped to accomplish the
                    complete fencing of the school. The P.T.A also built ten
                    water system toilet with twenty modern bathrooms. Through
                    their instrumentality also, pipes were laid throughout the
                    school for pipe borne-water. Arrangement is also being made
                    for bore-hole by Soma project so that within a short time
                    lack of water at Girls’ High School will be fought to a
                    finish. The P.T.A has also provided money to help pay for
                    furniture for the new science Lab. The P.T.A contributions
                    towards the progress of the school cannot be overestimated.
                    The State Education Commission provided the initial money to
                    help rewire the school for{" "}
                  </p>{" "}
                  <p>
                    electricity so that on 28th October 1981, the school began
                    to enjoy N.E.P.A. In 1982 the refectory which was used as
                    Dormitory was evacuated, twenty formica tables and two
                    hundred and forty plastic chairs were constructed and put
                    into use so that students will learn how to eat like ladies.
                    The popularity of the school continues to grow every day.
                    Many parents love Girls’ High School Agulu and the evidence
                    is the number of children in the school- nearly 1,000
                    students. There are two festival occasions in the school
                    yearly_ the Founder’s Day celebration every February when
                    the Bishop comes as the Founder and prays and blesses the
                    staff and students. Agulu people also turn out in mass in
                    full support of the school. On Prize Giving day at the end
                    of the academic year, prizes and cups are given to the best
                    students that won both academic and moral excellence. In the
                    field of sports, Girls’ High School Agulu is leading in the
                    State. Girls’ High School has maintained Gold Medals in
                    Basket Ball, Hockey and Volley ball for many years. In
                    academics, the progress is steady. In matters of discipline,
                    I simply state what the Zonal Commissioner, Rev S.N.C.
                    Okonkwo said on Founders/Sports Day of 14thFebuary 1983_
                    "Girls’ High School Agulu is a very disciplined school. It
                    is one of the best schools in Awka Zone. The compound is
                    always very neat. The staff cooperate with the Principal and
                    things move as they ought to be. We are very happy about
                    this. The Principal deserves commendation and we wish them
                    more grease to their elbows" Moral instruction is taught by
                    the Parish Priest and Pastor regularly every Thursday. The
                    Chairman of former Board of Governors and P.T.A. Mr C.U.O.O.
                    Adi, Mr Obiekezie and Mr Solomon Obi and members of their
                    Committees help a lot to set matters going. We thank His
                    Excellency Chief IfeanyichukwuNwobodo for the new school van
                    he gave us. We thank Bishop A.K Obiefuna, Igwe Chief E. U
                    Ejidike, the State Education Commission Enugu and Awka, the
                    Ministry of Education Enudu and Awka, the A. P. U; the P. T.
                    A; the Priests and Pastors, our dedicated members of staff
                    who are doing everything possible for the progress of the
                    school; Udokamma Club, generous individuals who have helped
                    the school in cash and kind. May the Lord bless and reward
                    them. We ask all people of goodwill who have the interest of
                    Girls’ High School Agulu at heart not to relent in their
                    efforts to help us train our children spiritually, morally,
                    academically, physically, and socially for God and Nigeria
                    so that we can make Girls’ High School Agulu the most viable
                    School in Anambra State. AD moultusannos. SR MIRIAM THERESE
                    OZOMMA PRINCIPA
                  </p>
                </p>
              ) : (
                ""
              )}
            </div>
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              {show ? <MdKeyboardDoubleArrowUp size={35} /> : ""}
            </button>
          </div>
        </div>
        {/* </div> */}

        <div>
          <div
            id="About_container-2"
            className=" bg-[url('/an-open-book.jpg')] bg-cover bg-center bg-opacity-50 h-full "
          >
            {/* <div className=" flex items-center px-10 gap-8 bg-primary/70 h-full text-white leading-7 max-md:flex-wrap max-md:py-8 max-sm:leading-6 max-sm:text-sm  max-sm:justify-center"> */}
            <div className=" flex items-center px-10 gap-8 bg-primary/70 h-full text-white leading-7 py-8 md:py-16 max-md:flex-wrap max-sm:leading-6 max-sm:text-sm justify-between">
              <div className="w-full">
                <p className="font-bold text-xl max-sm:text-lg">
                  Our Philosophy
                </p>
                <br />
                <p>
                  Our school is committed to nurturing young minds through a
                  holistic education that fosters academic excellence, character
                  development, and a lifelong love of learning.
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold text-xl max-sm:text-lg">
                  Rosa Mystica's Principle
                </p>
                <br />
                <p>
                  The Rosa Mystica Principle emphasizes the importance of
                  balance between intellectual, emotional, and spiritual growth.
                  We strive to cultivate well-rounded individuals who are
                  compassionate, responsible, and dedicated to making a positive
                  impact on the world.
                </p>
              </div>
              <div className="w-full">
                <p className="font-bold text-xl max-sm:text-lg">
                  Key of Success
                </p>
                <br />
                <p>
                  Our keys to success include rigorous academics, dedicated
                  teachers, supportive staff, and a strong emphasis on character
                  education. We believe that by fostering a positive school
                  culture and providing a comprehensive education, we can help
                  our students achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="About_container-3" className="h-screen absolute max-md:h-fit">
          <div className="flex w-full h-5/6 max-md:flex-col max-sm:pt-10 max-md:mt-6">
            <div className="flex items-center w-full max-md:pb-8">
              <div className="flex flex-col gap-6 px-10 mr-10 max-md:mr-0 ">
                <div className="relative">
                  <img
                    src="/svgs/about-icon-1.png"
                    alt=""
                    fill="#000"
                    className="relative w-16"
                  />
                </div>
                <p className="text-3xl font-semibold max-md:text-xl">
                  Special School Tour
                </p>
                <p className="text-gray-500 leading-7 max-md:leading-6 max-md:text-sm">
                  Experience our state-of-the-art facilities, meet our inspiring
                  faculty, and learn about our exciting extracurricular
                  activities. Our campus tours offer a firsthand look at what
                  makes our school a special place to learn and grow.
                </p>
              </div>
            </div>
            <div className=" school bg-cover w-full max-sm:py-36"></div>
            {/* bg-[url('/images/R-entrance.jpg')] */}
          </div>

          <div className="flex w-full h-5/6 max-md:flex-col max-sm:pt-10">
            <div className="bg-[url('/New-Grads.jpg')] bg-cover w-full max-sm:py-36 max-md:hidden"></div>
            <div className="flex items-center w-full max-md:pb-8">
              <div className="flex flex-col gap-6 px-10 ml-10 max-md:ml-0">
                <div className="relative">
                  <img
                    src="/svgs/about-icon-2.png"
                    alt=""
                    fill="#000000"
                    className="relative w-16"
                  />
                </div>
                <p className="text-3xl font-semibold max-md:text-xl">
                  Graduation
                </p>
                <p className="text-gray-500 text leading-7 max-md:leading-6 max-md:text-sm">
                  Graduation marks the culmination of years of hard work and
                  dedication. We celebrate our graduates' achievements and wish
                  them all the best as they embark on the next chapter of their
                  lives.
                </p>
              </div>
            </div>
            <div className="bg-[url('/New-Grads.jpg')] bg-cover w-full max-sm:py-36 hidden max-md:block"></div>
          </div>

          <div className="flex w-full h-5/6 max-md:flex-col max-sm:pt-10">
            <div className="flex items-center w-full max-md:pb-8">
              <div className="flex flex-col  gap-6 px-10 mr-10">
                <div className="relative">
                  <img
                    src="/svgs/about-icon-3.png"
                    alt=""
                    fill="#000000"
                    className="relative w-16"
                  />
                </div>
                <p className="text-3xl font-semibold max-md:text-xl">
                  Powerful Alumni
                </p>
                <p className="text-gray-500 text leading-7 max-md:leading-6 max-md:text-sm">
                  Our alumni network is a testament to the power of a strong
                  education. Our graduates are leaders in their fields, making a
                  difference in communities around the globe. <b>For Alumni</b>-
                  Join our vibrant alumni community and connect with like-minded
                  individuals who share your passion for learning and service.
                </p>
              </div>
            </div>

            <div className="bg-[url('/images/1730037194304.jpg')] bg-cover bg-center w-full max-sm:py-36"></div>
          </div>

          <div className="bg-contingentColor py-8 w-full">
            <div className="grid grid-flow-col gap-4 justify-center content-center items-center max-md:flex max-md:flex-wrap max-md:gap-0 max-md:items-center">
              <img src="/banner-1.png" alt="" className="max-sm:w-24" />
              <img src="/banner-2.png" alt="" className="max-sm:w-24" />
              <img src="/banner-3.png" alt="" className="max-sm:w-24" />
              <img src="/banner-4-1.png" alt="" className="max-sm:w-24" />
              <img src="/banner-5.png" alt="" className="max-sm:w-24" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
