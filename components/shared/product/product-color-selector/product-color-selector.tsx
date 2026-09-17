"use client"
import { Color } from "@/types/ProductType";
import styles from "./product-color-selector.module.css";

import { Product } from "@/types/ProductType";

import { useRouter } from "next/navigation";

export default function ColorSelector({product, colors, selectedColor}: { product: Product, colors: Color[], selectedColor: number }){
    const router = useRouter();
    
    const handleColorChange = (colorId: number) => {
            const targetProduct = product.group_product?.product?.find((p) => p.color?.id === colorId);
    
            if (targetProduct && targetProduct.slug !== product.slug) {
                router.push(`/product/${targetProduct.slug}`);
            }
        };

    return(
        <div className={styles.contenedorColores}>
            {
                colors.map((color) => {
                    return(
                        <button
                            className={styles.contenedorColor}
                            key={color.id}
                            style={{backgroundColor: color.hex, border: color.id === selectedColor ? "1px solid black" : "none"}}
                            onClick={() => handleColorChange(color.id)}
                        ></button>
                    )
                })
            }
        </div>
    )
}