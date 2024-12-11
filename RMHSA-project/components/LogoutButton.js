// components/LogoutButton.js
import { useRouter } from "next/router";

const LogoutButton = ({ onLogout }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Optionally, you can make a request to the logout endpoint
      await fetch("http://localhost:5000/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Clear the token from localStorage
      localStorage.removeItem("token");

      // Call the onLogout callback to update the state
      onLogout();

      // Redirect to the login page
      router.push("/admin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded w-full"
    >Logout
    </button>
  );
};

export default LogoutButton;
