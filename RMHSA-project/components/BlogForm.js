import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useBlogsContext } from "../hooks/useBlogsContext";

function BlogForm() {
  const { dispatch } = useBlogsContext();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [preview, setPreview] = useState(false); // State for preview

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, desc, body };
    const response = await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
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
        <form onSubmit={handleSubmit} className="max-sm:hidden w-full lg:w-800px full pt-8  ">
          <h3 className="text-2xl font-semibold mb-8">Add a New Blog</h3>
          <div className="w-full content-center">
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


// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// import "react-quill/dist/quill.bubble.css";
// import { useBlogsContext } from "../hooks/useBlogsContext";

// function BlogForm() {
//   const { dispatch } = useBlogsContext();

//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [body, setBody] = useState("");
//   const [error, setError] = useState(); // Initialize with null
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const blog = { title, desc, body };

//     const response = await fetch("/api/blogs", {
//       method: "POST",
//       body: JSON.stringify(blog),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (response.ok) {
//       setTitle("");
//       setDesc("");
//       setBody("");
//       setError(null); // Reset error on success
//       setEmptyFields([]);
//       console.log("new blog added", json);
//       // Dispatch action to add the new blog to the context
//       dispatch({ type: "CREATE_BLOG", payload: json });
//     } else {
//       setError(json.error); // Set error message
//     }
//   };

//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={handleSubmit}
//         className="w-[450px] h-[500px] p-6 pt-8"
//       >
//         <h3 className="text-2xl font-semibold mb-8">Add a New Blog</h3>
//         <div className="w-full content-center">
//           <div>
//             <label>Blog Title:</label>
//             <br />
//             <input
//               className={`bg-gray-200 p-2 mb-4 mt-2 w-full ${
//                 emptyFields.includes("title") ? "error" : ""
//               }`}
//               type="text"
//               onChange={(e) => setTitle(e.target.value)}
//               value={title}
//               // className = {emptyFields.includes('title')? 'error': ''}
//               // I stopped at trying to add a code here. Get to understand it.
//             />
//           </div>
//           <div>
//             <label>Desc: </label>
//             <br />
//             <input
//               className={`bg-gray-200 ${
//                 emptyFields.includes("desc") ? "error" : ""
//               } p-2 mb-4 mt-2 w-full`}
//               type="text"
//               onChange={(e) => setDesc(e.target.value)}
//               value={desc}
//             />
//           </div>
//           <div>
//             <label>Body:</label>
//             <br />
//             {/* <input
//               className={`bg-gray-200 p-2 mb-4 mt-2 w-full ${
//                 emptyFields.includes("body") ? "error" : ""
//               }`}
//               type="text"
//               onChange={(e) => setBody(e.target.value)}
//               value={body}
//             /> */}
//             <ReactQuill
//               theme="bubble"
//               // onChange={(e) => setBody(e.target.value)}
//               onChange={setBody}
//               value={body}
//               placeholder="What's on your mind..."
//               className={`bg-gray-200 p-2 mb-4 mt-2 w-full h-screen/3${
//                 emptyFields.includes("body") ? "error" : ""
//               }`}
//               modules={{
//                 toolbar: [
//                   [{ header: [1, 2, false] }],
//                   ["bold", "italic", "underline", "strike"],
//                   ["image", "video", "code-block", "blockquote", "link"],
//                   [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
//                 ],
//               }}
//             />
//           </div>
//         </div>
//         <button className="bg-green-700 mt-4 px-6 py-4 text-white font-semibold rounded-md">
//           Add Blog
//         </button>
//         {error && (
//           <div className="text-red-500 border border-red-500 bg-red-100 p-2 mt-4">
//             {error}
//           </div>
//         )}
//         {/* Error message styling */}
//       </form>
//     </div>
//   );
// }

// export default BlogForm;