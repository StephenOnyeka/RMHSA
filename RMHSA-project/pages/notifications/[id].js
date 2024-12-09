import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // If using Next.js
import Link from "next/link";
import Loading from "@/components/loading";

// date fns
import DOMPurify from "dompurify";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const NotificationPost = () => {
  const router = useRouter();
  const { id } = router.query; // Get the notification ID from the URL
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/notifications/${id}`);
        if (!response.ok) {
          throw new Error("notification not found");
        }
        const data = await response.json();
        setNotification(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNotification();
    }
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Link href="/notifications">
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
      <div key={notification._id} className="bg-white p-6 mb-6">
        <p className="font-bold text-center text-3xl">{notification.title}</p>
        <br />
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(notification.body) }}
        />
        <br />
        <p>
          {formatDistanceToNow(new Date(notification.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default NotificationPost;
