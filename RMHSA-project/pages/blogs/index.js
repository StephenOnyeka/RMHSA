import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";
import Loading from "@/components/loading";

// import { useBlogsContext } from "@/useBlogsContext";
import { useBlogsContext } from "@/hooks/useBlogsContext";
import BlogsDetails from "@/components/BlogsDetails";
import dynamic from "next/dynamic";

// Dynamically import BlogForm with no SSR
const BlogForm = dynamic(() => import("@/components/BlogForm"), {
  ssr: false,
});

function Blogs() {
  const { blogs, dispatch } = useBlogsContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:5000/api/blogs");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: json });
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  if (loading) return <Loading/>
  // <div>
  //   <div className="h-screen w-screen flex justify-center items-center animate-pulse">
  //     <div className="bg-[url('/images/RMHS.png')] w-20 h-20 rounded-full bg-cover bg-center max-md:w-16 max-md:h-16 max-sm:w-12 max-sm:h-12">
  //               </div>
  //   </div>
    
  // </div>;
  // if (error) return <p>{error}</p>;
  return (
    <div>
      <Topfile />
      <ScrollDiv />
      <div className="px-8">
        <br />
        <Navbar />
        <br />
        <br />
        {/* displaying in block form */}
        <div className="font-semibold">
          {
            blogs &&
            // blogs.map((blog) => <Link key={blog._id} href={`/${blog._id}`}>
            blogs.map((blog) => (
              <Link key={blog._id} href={`/blogs/${blog._id}`}>
                <BlogsDetails key={blog._id} blog={blog} />
              </Link>
            ))
          }
        </div>
        <br />
        <br />
      </div>
      <div className="px-6">
        <BlogForm />
      </div>
    </div>
    // <div className="px-8">
    //   <div className="font-semibold">
    //     {loading ? (
    //       <div>Loading well....</div>
    //     ) : (
    //       blogs &&
    //       blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)
    //     )}
    //   </div>
    //   <br />
    //   <br />
    //   <div className="flex flex-wrap justify-between">
    //     <BlogForm />
    //     {/* Render BlogForm here */}
    //   </div>
    // </div>
  );
}

export default Blogs;

// import React, {useEffect, useState} from 'react'
// import { useBlogsContext } from "../hooks/useBlogsContext";

// //components
// import BlogDetails from "../components/BlogDetails";
// import BlogForm from "../components/BlogForm";
// // import SubscriptionForm from "../components/SubscriptionForm";

// function Blogs() {
//     const { blogs, dispatch } = useBlogsContext();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const fetchWorkouts = async () => {
//         const response = await fetch("http://localhost:5000/api/blogs");
//         const json = await response.json();

//         if (response.ok) {
//           // setBlogs(json);
//           dispatch({ type: "SET_BLOGS", payload: json });
//           setLoading(false);
//         }
//       };
//       fetchWorkouts();
//     }, [dispatch]);
//   return (
//     <div>
//       Blogs
//       <div className="font-semibold">
//         {loading ? (
//           <div> Loading well....</div>
//         ) : (
//           blogs &&
//           blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)
//         )}
//       </div>
//       <br />
//       <br />
//       <div className="flex flex-wrap justify-between">
//         {/* <BlogForm /> */}
//       </div>{" "}
//     </div>
//   );
// }

// export default Blogs
