"use client"

import Image, { StaticImageData } from "next/image"
import styles from "./product-card.module.css"
import { Product } from "@/types/ProductType"
import Link from "next/link"
import {getProductOptions, getProductSizes}  from "@/utils/product-helpers"

import { useState, useEffect } from "react"
import ProductColorSelector from "../product-color-selector/product-color-selector"


export default function ProductCard({ product } : { product: Product }) {
    const {colors, sizes: initialSizes} = getProductOptions(product);
    const [sizes, setSizes] = useState(initialSizes);

    const [selectedColor, setSelectedColor] = useState(colors[0]?.id);

    useEffect(() => {
        const {sizes: newSizes} = getProductSizes(activeProduct);
        setSizes(newSizes);
    }, [selectedColor])

    const activeProduct = product.group_product?.product?.find((p) => p.color?.id === selectedColor) || product;

    const imageProduct: Array<string | StaticImageData> = activeProduct?.image_product?.map(img => img.image_url) || [];

    const imageUrl = imageProduct.length > 0 ? imageProduct[0] : null;

    const price = activeProduct?.product_variant?.[0]?.price;

    return(
        <article className={styles.productCard}>
            <Link href={`/product/${activeProduct.slug}`} className={styles.link} aria-label={product.name ?? ""} />
            <div className={styles.imageContainer}>
                <div>
                    <div className={styles.tagLastUnits}></div>
                    <div className={styles.tagNewIn}></div>
                </div>
                {imageUrl && 
                    <Image className={styles.imageFront} src={imageUrl} alt={activeProduct.name ?? ""} width={600} height={600}/>
                }
            </div>
            <div className={styles.infoProducto}>
                <div className={styles.titleAndPrice}>
                    <h2 className={styles.articleName}>{activeProduct.name}</h2>
                    <div className={styles.sizesContainer}>
                        {
                            sizes.map((size, index) => {
                                return(
                                    <div key={index} className={styles.size}>{size.size}</div>
                                )
                            })
                        }
                    </div>
                    <p>{price}€</p>
                </div>
                <div className={styles.contenedorColores}>
                    <ProductColorSelector colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                </div>
            </div>
        </article>
    )
}