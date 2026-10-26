import { Suspense } from "react";

import Header from "@/components/shared/header/header";

import styles from "./page.module.css"

import { getProduct } from "@/services/productService";
import ProductDetails from "@/components/shared/product/product-details/product-details";

export default function ProductPage({ params }: { params: Promise<{ slug: string}>}){
    return(
        <div>
            <Header />
            <main className={styles.containerArticleShop}>
                <Suspense fallback={<div>Cargando producto...</div>}>
                    <ProductDetailsContainer params={params} />
                </Suspense>
            </main>
        </div>
    )
}

async function ProductDetailsContainer({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { product, error } = await getProduct(slug);

    if (error || !product || !product.group_product || product.group_product.length === 0) {
        return <div>Producto no encontrado</div>;
    }

    return <ProductDetails product={product} />;
}