import { Trust, OurValues, Statistics } from "@/section";
import Head from "next/head";

export default function About() {
  return (
    <>
      <main>
        <Statistics />
        <OurValues />
        <Trust />
      </main>
    </>
  );
}
