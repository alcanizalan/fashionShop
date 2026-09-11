"use client";

import Image, { StaticImageData } from "next/image";
import { Product } from "@/types/ProductType";
import {getProductOptions, getProductSizes} from "@/utils/product-helpers";
import ColorSelector from "@/components/shared/product/product-color-selector/product-color-selector";
import styles from "./product-details.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function ProductDetails({ product }: { product: Product }) {
    const {colors, sizes: initialSizes} = getProductOptions(product);
    const [selectedSize, setSelectedSize] = useState(null);
    const router = useRouter();

    const handleColorChange = (colorId: number) => {
        const targetProduct = product.group_product?.product?.find((p) => p.color?.id === colorId);

        if (targetProduct && targetProduct.slug !== product.slug) {
            router.push(`/product/${targetProduct.slug}`);
        }
    };

    const imageProduct: Array<string | StaticImageData> = product?.image_product?.map(img => img.image_url) || [];

    const imageUrl = imageProduct.length > 0 ? imageProduct[0] : null;

    const price = product?.product_variant?.[0]?.price;

    return (
        <section className={styles.productDetailsContainer}>
            <div className={styles.productNameDescription}>{product.name}</div>
            <div>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={product.name ?? ""}
                        width={600}
                        height={600}
                        priority
                    />
                )}
            </div>
            <div className={styles.productOptionsAndInfo}>
                <span>{price}€</span>
                <div className={styles.contenedorColores}>
                    <ColorSelector colors={colors} selectedColor={product.color?.id ?? colors[0]?.id} setSelectedColor={handleColorChange} />
                </div>
                <p>
                    Orders shipped within 1-2 days. FREE delivery for orders over € 200.{" "}
                    <span>Compare delivery methods </span>
                </p>
                <span>Delivered to 90100, Finland.</span>
                <button className={styles.addToCartButton}>ADD TO CART</button>
                <div className={styles.buttonsExtraInfo}>
                    <button>SHIPPING AND RETURNS</button>
                    <button>VIEW LOOKS</button>
                    <button>CONTACT US</button>
                </div>
            </div>
        </section>
    );
}
