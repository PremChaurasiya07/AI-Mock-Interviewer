"use client"
import Head from "next/head";
import Link from "next/link";
import React from "react";
import LandingPage from "./LandingPage";


export default function Home() {
  return (
    <div id="Start">
    <Head>
      <title>My Awesome Next.js App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
<LandingPage/>
  </div>
  );
}
