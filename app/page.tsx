"use client";
import { browserTest } from "@/mocks/browserTest";
import { worker } from "@/mocks/browser";
import { useEffect } from "react";
import Login from "./login/page";

export default function Home() {
  useEffect(() => {
    worker.start();
    browserTest();
  }, []);
  return (
    <Login />
  )
}
