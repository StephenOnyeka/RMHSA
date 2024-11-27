import React from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
// date fns
// import DOMPurify from "dompurify";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";

function BlogsDetails({ blog }) {
  const { dispatch } = useBlogsContext();
  const handleClick = async () => {
    const response = await fetch("http://localhost:5000/api/blogs/" + blog._id, {
      method: "DELETE",
    });
    // const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
    //   method: "DELETE",
    // });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div>
      {/* How the blogs render in an array of all blogs */}

      <div key={blog._id} className="bg-white my-6 font-Poppins">
        {/* <img src={blog.titleImg} alt="Preview" width={500} height={500} /> */}
        <p className="text-sm text-slate-400 font-normal">
          {formatDistanceToNow(new Date(blog.createdAt), {
            addSuffix: true,
          })}
        </p>
        <br />
        <Link key={blog._id} href={`/blogs/${blog._id}`}>
          <p className=" font-bold text-2xl hover:text-red-400">{blog.title}</p>
        </Link>
        <br />
        <p className="font-semibold">{blog.desc.substring(0, 100)} ...</p>
        <br />
        <button className="bg-red-400 px-4 py-2 hover:bg-green-400" onClick={handleClick}>
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
}

export default BlogsDetails;
