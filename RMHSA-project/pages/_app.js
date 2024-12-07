// jsx
// pages/_app.js
import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/nav.css";
import { BlogsContextProvider } from "@/context/BlogsContext";
import { SubscriptionsContextProvider } from "@/context/SubscriptionContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  return (
    // <Layout>
    <BlogsContextProvider>
      <SubscriptionsContextProvider>
        <Component {...pageProps} />
      </SubscriptionsContextProvider>
      </BlogsContextProvider>
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
