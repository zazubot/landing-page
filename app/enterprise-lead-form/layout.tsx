"use client";

import { useEffect } from "react";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-20"></div>
      <main className="grow">{children}</main>
      <Footer border={true} />
    </>
  );
}
