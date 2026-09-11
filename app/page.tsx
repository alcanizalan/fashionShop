import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import Header from "@/components/shared/header/header";

import sytles from "./page.module.css";

import ProductCard from "@/components/shared/product/product-card/product-card";
import ProductList from "@/components/shared/product/product-list/product-list";

export default function Home() {
  return (
    <main className={sytles.main}>
      <Header/>
      <Suspense fallback={<div>Cargando productos...</div>}>
        <ProductList />
      </Suspense>
    </main>
  );
}
