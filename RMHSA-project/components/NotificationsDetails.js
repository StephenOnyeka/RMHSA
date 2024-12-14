import React,{useEffect} from "react";
import { useNotificationsContext } from "../hooks/useNotificationsContext";
// date fns
// import DOMPurify from "dompurify";
import { IoIosCloseCircle } from "react-icons/io";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";
import { useAdminContext } from "@/hooks/useAdminContext";

function NotificationsDetails({ notification }) {
  const { dispatch } = useNotificationsContext();
  const { isAdmin, verifyAdmin } = useAdminContext();

  const handleClick = async () => {
    const response = await fetch(
      "https://rmhsa-servered.vercel.app/api/notifications/" + notification._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_NOTIFICATION", payload: json });
    }
  };  
  
      useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          verifyAdmin(storedToken);
        }
      }, [verifyAdmin]);
  return (
    <div>
      {/* How the notifications render in an array of all notifications */}

      <div key={notification._id} className="bg-white my-4 font-Poppins">
        {/* <img src={notification.titleImg} alt="Preview" width={500} height={500} /> */}
        <div className="flex justify-between ">
          <div>
            <p className="text-sm text-slate-400 font-normal">
              {formatDistanceToNow(new Date(notification.createdAt), {
                addSuffix: true,
              })}
            </p>
            <br />
            <Link
              key={notification._id}
              href={`/notifications/${notification._id}`}
            >
              <p className=" font-bold text-2xl hover:text-red-400">
                {notification.title}
              </p>
            </Link>
            <br />
            <p className="font-semibold">
              {notification.desc.substring(0, 100)} ...
            </p>
            <br />
          </div>
          
          {isAdmin && <p className="text-primary"><button className="relative group" onClick={handleClick}>
            <IoIosCloseCircle size={30} />
          </button></p>}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NotificationsDetails;
