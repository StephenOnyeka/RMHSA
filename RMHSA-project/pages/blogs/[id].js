import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // If using Next.js
import Link from "next/link";
import Loading from "@/components/loading";

// date fns
import DOMPurify from "dompurify";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query; // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        //   method: "DELETE",
        // });
        // const response = await fetch(
        //   `https://rmhsa-servered.vercel.app/api/blogs/${id}`
        // );
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("blog not found");
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading)
    return (
      <Loading />
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Link href="/blogs" >
        <div className="p-6 pb-0 hover:text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
          </svg>
        </div>
      </Link>
      <div key={blog._id} className="bg-white p-6 mb-6">
        {/* <div className="w-screen h-screen/2">
          <img
            src={blog.titleImg}
            alt=""
            classname="h-full w-full object-cover"
          />
        </div> */}
        <p className="font-bold text-center text-3xl">{blog.title}</p>
        <br />
        {/* <p className="font-bold">Body:</p> */}
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.body) }}
        />
        {/* <p>{blog.createdAt}</p> */}
        <br />
        <p>
          {formatDistanceToNow(new Date(blog.createdAt), {
            addSuffix: true,
          })}
        </p>
        {/* <button className="bg-red-400 px-4 py-2" onClick={handleClick}>
          Delete
        </button> */}
      </div>

      {/* <h1>{blog.title}</h1>
      <p>{blog.desc}</p> */}
      {/* Add other blog details as needed */}
    </div>
  );
};

export default BlogPost;

