import React, { useState } from "react";

function Gallery() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    // <div className="flex gap-4 max-md:gap-2 flex-wrap content-center">
    <div className="p-4">
      <p className="py-4 mb-2 font-bold text-lg text-center">Gallery</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-sm:gap-2 ">
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-main(entrance).jpg"
              // src="/Edited/1732230029113.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            {/* <div className="p-4"> */}
            <p className="text-white italic font-semibold max-sm:text-sm">
              Main Building (Entrance-View)
            </p>
            {/* </div> */}
          </div>
        </div>

        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              // src="/images/R- main.jpg"
              src="/Edited/1732230029126.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Main building
            </p>
            {/* </div> */}
          </div>
        </div>

        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              // src="/images/R-chapel.jpg"
              src="/Edited/1732230029099.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Chapel
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              // src="/images/R-chapel(inward).jpg"
              src="/Edited/1732230029081.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Chapel (inner-view)
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              // src="/images/chapel.jpg"
              src="/Edited/1732230029066.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Hail Mary Grotto
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-hailmary.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Hail Mary Grotto (closer-view)
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-admin.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Administrative Block
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-library.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Library
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-science2.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Science Lab
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-class.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Classroom
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-conference.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Conference Hall
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/images/R-ICT.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              ICT Lab
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="added font-bold text-blue-600 text-lg italic my-6 max-sm:my-4">
        <p>
          We are pivoted on giving your child the best of growth experience,
          academically, morally,...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-sm:gap-2 ">
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/1726065374828.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            {/* <div className="p-4"> */}
            <p className="text-white italic font-semibold max-sm:text-sm">
              Representing at national competitions
            </p>
            {/* </div> */}
          </div>
        </div>

        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/1726065382316.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Educational competition at National level.
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/IMG-20241026-WA0007~4.jpg"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            {/* <div className="p-4"> */}
            <p className="text-white italic font-semibold max-sm:text-sm">
              Conference with Students
            </p>
            {/* </div> */}
          </div>
        </div>

        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/IMG-20241026-WA0008 (1).jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Ongoing conference with students - 2nd image
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="added font-bold text-blue-600 text-lg italic my-6 max-sm:my-4">
        <p>...And spiritual wise.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-sm:gap-2 ">
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/1726065589415.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[70%] transition-all pt-4">
            {/* <div className="p-4"> */}
            <p className="text-white italic font-semibold max-sm:text-sm">
              Meeting with his Lordship, Bishop of Ekwulobia Diocese
            </p>
            {/* </div> */}
          </div>
        </div>

        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/1726065592701.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[70%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              A brief chat with the Bishop on Christianity and Spiritual growth
              {/* Meeting with his Lordship, Bishop of Ekwulobia Diocese - 2nd image */}
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/IMG-20241026-WA0006.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Celebration of Mass with Students
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="group relative text-white overflow-hidden cursor-pointer h-auto">
          <div className="h-64 w-full">
            <img
              src="/Events/IMG-20241026-WA0005 (1).jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 text-center translate-y-[100%] group-hover:translate-y-[80%] transition-all pt-4">
            <p className="text-white italic font-semibold max-sm:text-sm">
              Ongoing church service
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
