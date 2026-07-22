import Image from "next/image";
import Link from "next/link";

import Header from "@/components/shared/header/header";

import sytles from "./page.module.css";

import ProductCard from "@/components/shared/product/product-card";

export default function Home() {
  return (
    <main className={sytles.main}>
      <Header/>
      
    </main>
  );
}
