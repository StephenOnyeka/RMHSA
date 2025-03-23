// jsx
// pages/_app.js
import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/nav.css";
import Head from "next/head";
import { BlogsContextProvider } from "@/context/BlogsContext";
import { SubscriptionsContextProvider } from "@/context/SubscriptionContext";
import { NotificationsContextProvider } from "@/context/NotificationsContext";
import { AdminProvider } from "@/hooks/useAdminContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Loading from "@/components/loading"; 
// import Loading from "@/components/Loading"; // Adjust the path as necessary

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Cleanup event listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  if (loading) {
    return <Loading />;
  }

const pageTitle = router.pathname.replace("/", ""); // Removes leading slash
const title = `RMHS | ${
  pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
}`;

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/images/RMHS.png" />
        <title>{pageTitle === "" ? "RMHS" : title}</title>
      </Head>
      <AdminProvider>
        <NotificationsContextProvider>
          <BlogsContextProvider>
            <SubscriptionsContextProvider>
              <Component {...pageProps} />
            </SubscriptionsContextProvider>
          </BlogsContextProvider>
        </NotificationsContextProvider>
      </AdminProvider>
    </Layout>
  );
}


// import "@/styles/globals.css";
// import "@/styles/index.css";
// import "@/styles/nav.css";

// import { BlogsContextProvider } from "@/context/BlogsContext";
// import { SubscriptionsContextProvider } from "@/context/SubscriptionContext";
// // import dynamic from "next/dynamic";
// // const DynamicHeader = dynamic(({ Component, pageProps }) => import(...pageProps), {
// //   loading: () => <p>Loading...</p>,
// // });

// // export default function App() {
// //   return <DynamicHeader />;
// // }
// export default function App({ Component, pageProps }) {
//   return (
//     <BlogsContextProvider>
//       <SubscriptionsContextProvider>
//         <Component {...pageProps} />
//       </SubscriptionsContextProvider>
//     </BlogsContextProvider>
//   );
// }
