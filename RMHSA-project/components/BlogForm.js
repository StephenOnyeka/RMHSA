// import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";
// import { useBlogsContext } from "../hooks/useBlogsContext";

// function BlogForm({ blog }) {
//   const { dispatch } = useBlogsContext();
//   const [title, setTitle] = useState(blog ? blog.title : "");
//   const [desc, setDesc] = useState(blog ? blog.desc : "");
//   const [body, setBody] = useState(blog ? blog.body : "");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);
//   const [preview, setPreview] = useState(false); // State for preview

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const blogData = { title, desc, body };

//     // Determine if we're creating or updating
//     const response = blog
//       ? await fetch(`http://localhost:5000/api/blogs/${blog._id}`, {
//           method: "PUT",
//           body: JSON.stringify(blogData),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//       : await fetch("http://localhost:5000/api/blogs", {
//           method: "POST",
//           body: JSON.stringify(blogData),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//     const json = await response.json();
//     if (response.ok) {
//       setTitle("");
//       setDesc("");
//       setBody("");
//       setError(null);
//       setEmptyFields([]);
//       console.log(blog ? "Blog updated" : "New blog added", json);
//       dispatch({ type: blog ? "UPDATE_BLOG" : "CREATE_BLOG", payload: json });
//     } else {
//       setError(json.error);
//     }
//   };

//   useEffect(() => {
//     if (blog) {
//       setTitle(blog.title);
//       setDesc(blog.desc);
//       setBody(blog.body);
//     }
//   }, [blog]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h3 className="text-2xl font-semibold mb-8">
//           {blog ? "Update Blog" : "Add a New Blog"}
//         </h3>
//         <div>
//           <label>Blog Title:</label>
//           <input
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             required
//           />
//         </div>
//         <div>
//           <label>Desc:</label>
//           <input
//             type="text"
//             onChange={(e) => setDesc(e.target.value)}
//             value={desc}
//             required
//           />
//         </div>
//         <div>
//           <label>Body:</label>
//           <ReactQuill
//             theme="bubble"
//             onChange={setBody}
//             value={body}
//             placeholder="What's on your mind..."
//           />
//         </div>
//         <button type="submit">{blog ? "Update Blog" : "Publish Blog"}</button>
//       </form>
//       {error && <div className="text-red-500">{error}</div>}
//     </div>
//   );
// }

// export default BlogForm;

// THE ORIGINAL CODE THAT WORKS FINE THAT I LOVE
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useBlogsContext } from "../hooks/useBlogsContext";

function BlogForm() {
  const { dispatch } = useBlogsContext();
  // const [titleImg, setTitleImg] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [preview, setPreview] = useState(false); // State for preview
    const [imgPreviewUrl, setImgPreviewUrl] = useState(null); // State for image preview URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const blog = { titleImg, title, desc, body };
    const blog = { title, desc, body };
    const response = await fetch("http://localhost:5000/api/blogs", {
    // const response = await fetch(
    //   "https://rmhsa-servered.vercel.app/api/blogs",
    //   {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      // setTitleImg(null);
      setTitle("");
      setDesc("");
      setBody("");
      setError(null);
      setEmptyFields([]);
      console.log("new blog added", json);
      dispatch({ type: "CREATE_BLOG", payload: json });
    } else {
      setError(json.error);
    }
  };

  const handlePreviewToggle = () => {
    setPreview(!preview);
  };
  return (
    <div>
      {preview ? (
        <div className="preview-container">
          <h3 className="text-2xl font-semibold mb-4">Preview</h3>

          {/* <div className="w-screen h-screen/2"> */}
          {/* <img src={titleImg} alt="" classname="h-full w-full object-cover" /> */}
          {/* {titleImg} */}
          {/* <img src={titleImg} alt="" width={500} height={500} /> */}
          {/* </div> */}
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="font-bold">Desc: {desc}</p>
          <div
            className="font-normal"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="flex gap-x-8">
            <button
              className="bg-blue-500 mt-4 px-6 py-2 mb-8 text-white"
              onClick={handlePreviewToggle}
            >
              Edit
            </button>

            <button
              className="bg-green-700 mt-4 px-6 py-2 mb-8 text-white"
              onClick={handleSubmit}
            >
              Publish Blog
            </button>
            <br />
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-sm:hidden w-full lg:w-800px full pt-8  "
        >
          <h3 className="text-2xl font-semibold mb-8">Add a New Blog</h3>
          <div className="w-full content-center">
            {/* <div>
              <label>Blog TitleImg:</label>
              <br />
              <input
                className={`bg-gray-200 p-2 mb-4 mt-2 w-full ${
                  emptyFields.includes("titleImg") ? "error" : ""
                }`}
                type="file"
                // accept="image/*" // Accept only image files
                onChange={(e) => setTitleImg(e.target.value)}
                value={titleImg}
              />
            </div> */}
            <div>
              <label>Blog Title:</label>
              <br />
              <input
                className={`bg-gray-200 p-2 mb-4 mt-2 w-full ${
                  emptyFields.includes("title") ? "error" : ""
                }`}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div>
              <label>Desc:</label>
              <br />
              <input
                className={`bg-gray-200 ${
                  emptyFields.includes("desc") ? "error" : ""
                } p-2 mb-4 mt-2 w-full`}
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </div>
            <div>
              <label>Body:</label>
              <br />
              <ReactQuill
                theme="bubble"
                onChange={setBody}
                value={body}
                placeholder="What's on your mind..."
                className={`p-2 mb-4 mt-2 h-[700px]  bg-gray-200 rounded-xl${
                  emptyFields.includes("body") ? "error" : ""
                }`}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    ["image", "video", "code-block", "blockquote", "link"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { list: "check" },
                    ],
                  ],
                }}
              />
            </div>
          </div>
          <button
            type="button"
            className="bg-blue-500 mt-8 px-6 py-2 mb-8 text-white"
            onClick={handlePreviewToggle}
          >
            Preview
          </button>
        </form>
      )}
      {error && (
        <div className="text-red-500 border border-red-500 bg-red-100 p-2 mt-4">
          {error}
        </div>
      )}
    </div>
  );
}
export default BlogForm;
