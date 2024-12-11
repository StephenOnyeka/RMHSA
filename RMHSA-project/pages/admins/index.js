// pages/admin/index.js
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/router";
// import { useBlogsContext } from "../hooks/useBlogsContext";
import { useBlogsContext } from "@/hooks/useBlogsContext";
import LogoutButton from "@/components/LogoutButton";

function Admin() {
  const { dispatch } = useBlogsContext();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [preview, setPreview] = useState(false); // State for preview
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      verifyAdmin(storedToken);
    } else {
      setShowLogin(true);
    }
  }, []);

  const verifyAdmin = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/verify", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setIsAdmin(true);
        setShowLogin(false);
      } else {
        setError("Unauthorized");
        setShowLogin(true);
      }
    } catch (error) {
      setError("Error verifying admin");
      setShowLogin(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);
      verifyAdmin(data.token);
    } else {
      setError("Login failed");
    }
  };

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

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    setToken(null);
    setIsAdmin(false);
    setShowLogin(true);
  };

  return (
    <div className="container mx-auto p-4">
      {showLogin ? (
        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4">Admin Login</h3>
          <div>
            <label>Email:</label>
            <br />
            <input
              className="bg-gray-200 p-2 mb-4 w-full"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Password:</label>
            <br />
            <input
              className="bg-gray-200 p-2 mb-4 w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
          {error && (
            <div className="text-red-500 border border-red-500 bg-red-100 p-2 mt-4">
              {error}
            </div>
          )}
        </form>
      ) : (
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
                  Back to Form
                </button>
                <button
                  className="bg-blue-500 mt-4 px-6 py-2 mb-8 text-white"
                  onClick={handleSubmit}
                >
                  Publish Blog
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-sm:hidden w-full lg:w-800px full pt-8"
            >
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
                    className={`p-2 mb-4 mt-2 h-[700px] bg-gray-200 rounded-xl ${
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
              <LogoutButton onLogout={handleLogout} />
            </form>
          )}
          {error && (
            <div className="text-red-500 border border-red-500 bg-red-100 p-2 mt-4">
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;
