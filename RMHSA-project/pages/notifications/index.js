import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollDiv from "@/components/Scroll";
import Navbar from "@/components/Navbar";
import Topfile from "@/components/Topfile";
import Footer from "@/components/Footer";
import Loading from "@/components/loading";
import { useRouter } from "next/router";

// import { useBlogsContext } from "@/useBlogsContext";
import { useNotificationsContext } from "@/hooks/useNotificationsContext";
import NotificationsDetails from "@/components/NotificationsDetails";
import dynamic from "next/dynamic";

// Dynamically import BlogForm with no SSR
const NotificationForm = dynamic(() => import("@/components/NotificationForm"), {
  ssr: false,
});

function Notifications() {

  const { notifications, dispatch } = useNotificationsContext();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { page = 1 } = router.query;
  const currentPage = Number(page) || 1; // Ensure page is a number
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `http://localhost:5000/api/notifications?page=${currentPage}&limit=${postsPerPage}`
      );
      const data = await response.json();

      if (response.ok) {
        setTotalPosts(data.totalPosts);
        setTotalPages(data.totalPages);
        dispatch({ type: "SET_NOTIFICATIONS", payload: data.notifications }); // Make sure you're dispatching the notifications
        setLoading(false);
      } else {
        console.error("Failed to fetch notifications:", data);
        setLoading(false);
      }
    };
    console.log("Total Posts:", totalPosts);
    console.log("Total Pages:", totalPages);
    fetchWorkouts();
  }, [dispatch, currentPage]); // Use currentPage here

  if (loading) return <Loading />;

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
        <div className="flex w-full gap-x-8 max-lg:flex-wrap">
          <div className="font-semibold w-full">
            {notifications &&
              notifications.map((notification) => <NotificationsDetails key={notification._id} notification={notification} />)}

            {/* Pagination Controls */}
            <br />
            <br />
            <div className="w-full flex justify-between mb-8">
              <button
                disabled={currentPage <= 1}
                onClick={() => router.push(`?page=${currentPage - 1}`)}
                className="bg-contingentColor text-sm text-white px-4 py-2 rounded disabled:bg-contingentColor/20"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => router.push(`?page=${currentPage + 1}`)}
                className="bg-contingentColor text-sm text-white px-4 py-2 rounded disabled:bg-contingentColor/20"
              >
                Next
              </button>
            </div>
          </div>

          <div className="w-full">
            <NotificationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import ScrollDiv from "@/components/Scroll";
// import Navbar from "@/components/Navbar";
// import Topfile from "@/components/Topfile";
// import Footer from "@/components/Footer";
// import Loading from "@/components/loading";
// import { useRouter } from "next/router";

// // import { useBlogsContext } from "@/useBlogsContext";
// import { useBlogsContext } from "@/hooks/useBlogsContext";
// import BlogsDetails from "@/components/BlogsDetails";
// import dynamic from "next/dynamic";

// // Dynamically import BlogForm with no SSR
// const BlogForm = dynamic(() => import("@/components/BlogForm"), {
//   ssr: false,
// });

// function Blogs() {
//   // const { blogs, dispatch } = useBlogsContext();
//   // const [loading, setLoading] = useState(true);

//   //  useEffect(() => {
//   //   const fetchWorkouts = async () => {
//   //     // const response = await fetch(
//   //     //   "https://rmhsa-servered.vercel.app/api/blogs"
//   //     // );
//   //     const response = await fetch("http://localhost:5000/api/blogs");
//   //     const json = await response.json();
//   //     if (response.ok) {
//   //       dispatch({ type: "SET_BLOGS", payload: json });
//   //       setLoading(false);
//   //     }
//   //   };
//   //   fetchWorkouts();
//   // }, [dispatch]);

//   const { blogs, dispatch } = useBlogsContext();
//   const [loading, setLoading] = useState(true);
//   //just now
//   const router = useRouter();
//   const { page = 1 } = router.query;
//    const [totalPosts, setTotalPosts] = useState(0);
//    const [totalPages, setTotalPages] = useState(0);
//   const postsPerPage = 5;

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch(
//         `http://localhost:5000/api/blogs?page=${page}&limit=${postsPerPage}`
//       );
//       const data = await response.json();
//       setTotalPosts(data.totalPosts);
//       setTotalPages(data.totalPages);
//       if (response.ok) {
//         dispatch({ type: "SET_BLOGS", payload: data });
//         setLoading(false);
//       }
//     };
//     fetchWorkouts();
//   }, [dispatch, page]);

//   if (loading) return <Loading />;
//   return (
//     <div>
//       <Topfile />
//       <ScrollDiv />
//       <div className="px-8">
//         <br />
//         <Navbar />
//         <br />
//         <br />
//         {/* displaying in block form */}
//         <div className="flex w-full gap-x-8 max-lg:flex-wrap">
//           <div className="font-semibold">
//             {/* {blogs &&
//               blogs.map((blog) => <BlogsDetails key={blog._id} blog={blog} />)} */}
//             {blogs.length > 0 ? (
//               blogs.map((blog) => <BlogsDetails key={blog._id} blog={blog} />)
//             ) : (
//               <div>No posts yet.</div>
//             )}

//             {/* Pagination Controls */}
//             <br />
//             <br />
//             <div className="w-full flex justify-between mb-8">
//               <button
//                 disabled={page <= 1}
//                 onClick={() => router.push(`?page=${Number(page) - 1}`)}
//                 className="bg-red-500 text-sm text-white px-4 py-2 rounded  disabled:bg-red-200"
//               >
//                 Previous
//               </button>
//               <span>
//                 Page {page} of {totalPages}
//               </span>
//               <button
//                 disabled={page >= totalPages}
//                 onClick={() => router.push(`?page=${Number(page) + 1}`)}
//                 className="bg-red-500 text-sm text-white px-4 py-2 rounded disabled:bg-red-200"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//           {/* <br />
//           <br /> */}

//           <div className="w-full">
//             <BlogForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blogs;

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
