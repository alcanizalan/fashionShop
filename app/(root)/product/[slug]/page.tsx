import Header from "@/components/shared/header/header";
import Image from "next/image";

import styles from "./page.module.css"

import products from "@/db/sample-data"

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string}>}){
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return(
        <div>
            <Header />
            <main className={styles.containerArticleShop}>
                <div className={styles.productNameDescription}>{product.name}</div>
                <div>
                    <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={600}
                        height={600}
                        priority
                    />
                </div>
                <div>
                    <div className={styles.productOptionsAndInfo}>
                        <span>${product.price}</span>
                        <div>

                        </div>
                        <p>Orders shipped within 1-2 days. FREE delivery for orders over € 200. <span>Compare delivery methods </span></p>
                        <span>Delivered to 90100, Finland.</span>
                        <button className={styles.addToCartButton}>ADD TO CART</button>
                        <div className={styles.buttonsExtraInfo}>
                            <button>SHIPPING AND RETURNS</button>
                            <button>VIEW LOOKS</button>
                            <button>CONTACT US</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}