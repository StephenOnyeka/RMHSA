import React, { useRef, useState } from "react";
import Head from "next/head";
import { Suspense } from "react";
import Home1 from "@/components/Home";
import About from "./about";
import dynamic from "next/dynamic";
import Loading from "@/components/loading";


const CustomLoading = dynamic(() => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(import("../components/Home"));
      }, 3000)
    );
  },
  {
    loading: () => { <Loading /> }
  }
);

export default function Home(){
  return (
    <div>
      <Head>
        <title>Kingster - HighSchool </title>
      </Head>
      <CustomLoading />
    </div>
  );
}
