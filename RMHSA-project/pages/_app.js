import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/nav.css";

import { BlogsContextProvider } from "@/context/BlogsContext";
import { SubscriptionsContextProvider } from "@/context/SubscriptionContext";
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(({ Component, pageProps }) => import(...pageProps), {
//   loading: () => <p>Loading...</p>,
// });

// export default function App() {
//   return <DynamicHeader />;
// }
export default function App({ Component, pageProps }) {
  return (
    <BlogsContextProvider>
      <SubscriptionsContextProvider>
        <Component {...pageProps} />
      </SubscriptionsContextProvider>
    </BlogsContextProvider>
  );
}
