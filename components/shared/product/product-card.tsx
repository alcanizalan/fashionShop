"use client"

import Image from "next/image"
import styles from "./product-card.module.css"
import { Product } from "@/types/Products"
import Link from "next/link"


export default function ProductCard({ id, name, slug, price, image, imageBack, colors, sizes }: Product) {
    return(
        <Link href={`/product/${slug}`} className={styles.link}>
            <article className={styles.productCard}>
                <div className={styles.imageContainer}>
                    <div>
                        <div className={styles.tagLastUnits}></div>
                        <div className={styles.tagNewIn}></div>
                    </div>
                    <Image className={styles.imageFront} src={image} alt={name}/>
                    <Image className={styles.imageBack} src={imageBack} alt={`${name} back`} />
                </div>
                <div className={styles.infoProducto}>
                    <div className={styles.titleAndPrice}>
                        <h2 className={styles.articleName}>{name}</h2>
                        <div className={styles.sizesContainer}>
                            {
                                sizes.map((size, index) => {
                                    return(
                                        <div key={index} className={styles.size}>{size.name}</div>
                                    )
                                })
                            }
                        </div>
                        <p>{price}€</p>
                    </div>
                    <div className={styles.contenedorColores}>
                        {
                            colors.map((color, index) => {
                                return(
                                    <div className={styles.contenedorColor} key={index} style={{backgroundColor: color.hex, border: color.selected ? "1px solid black" : "none"}}></div>
                                )
                            })
                        }
                    </div>
                </div>
            </article>
        </Link>
    )
}