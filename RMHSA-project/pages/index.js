import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Loading from "@/components/loading"; // Ensure this is your loading component

// Dynamically import the Home component
const HomeComponent = dynamic(() => import("../components/Home"), {
  suspense: true, // Enable suspense for this dynamic import
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rosa Mystica High School</title>
        <link rel="icon" href="/RMHS.png" />
      </Head>
      <Suspense fallback={Loader()}>
        <HomeComponent />
      </Suspense>
    </div>
  );
}

// Loader component
const Loader = () => {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center animate-pulse">
        <div className="bg-[url('/images/RMHS.png')] w-20 h-20 rounded-full bg-cover bg-center max-md:w-16 max-md:h-16 max-sm:w-12 max-sm:h-12"></div>
      </div>
    </div>
  );
};
