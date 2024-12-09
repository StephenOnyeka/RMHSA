import React from "react";
import { useNotificationsContext } from "../hooks/useNotificationsContext";
// date fns
// import DOMPurify from "dompurify";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";

function NotificationsDetails({ notification }) {
  const { dispatch } = useNotificationsContext();
  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:5000/api/notifications/" + notification._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_NOTIFICATION", payload: json });
    }
  };

  return (
    <div>
      {/* How the notifications render in an array of all notifications */}

      <div key={notification._id} className="bg-white my-4 font-Poppins">
        {/* <img src={notification.titleImg} alt="Preview" width={500} height={500} /> */}
        <p className="text-sm text-slate-400 font-normal">
          {formatDistanceToNow(new Date(notification.createdAt), {
            addSuffix: true,
          })}
        </p>
        <br />
        <Link key={notification._id} href={`/notifications/${notification._id}`}>
          <p className=" font-bold text-2xl hover:text-red-400">{notification.title}</p>
        </Link>
        <br />
        <p className="font-semibold">{notification.desc.substring(0, 100)} ...</p>
        <br />
        <button className="bg-red-400 px-4 py-2 rounded font-medium text-xs hover:bg-green-400" onClick={handleClick}>
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
}

export default NotificationsDetails;
