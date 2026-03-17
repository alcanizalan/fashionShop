import Image from "next/image";
import Link from "next/link";

import Header from "@/components/shared/header/header";

import ProductCard from "@/components/shared/product/product-card";

export default function Home() {
  return (
    <div>
      <Header/>
      <br/><br/><br/><br/>
      <Link href="/shop/view-all">View All Products</Link>
    </div>
  );
}
