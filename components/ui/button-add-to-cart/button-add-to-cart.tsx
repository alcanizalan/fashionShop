"use client";

import { addItemToCartAction } from "@/actions/cartActions";

import styles from "./button-add-to-cart.module.css";

import {getProductSizes} from "@/utils/product-helpers";
import { Product } from "@/types/ProductType";

import { useState } from "react";

export default function ButtonAddToCart({ initialProduct }: { initialProduct: Product }) {

    const {sizes} = getProductSizes(initialProduct);
    const [message, setMessage] = useState("");

    async function handleAddToCart(formData: FormData) {

        const selectedSize = formData.get("size");

        if (typeof selectedSize !== "string" || !selectedSize) {
            throw new Error("Selecciona una talla");
        }

        try {
            await addItemToCartAction(initialProduct.id, Number(selectedSize), 1);
            setMessage("Producto añadido al carrito");
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    }

    return (
        <form action={handleAddToCart} className={styles.addToCartForm}>
        {sizes.map((item, index) => (
            <label key={item.size}>
                {item.size}
                <input type="radio" key={index} name="size" value={item.sizeId} disabled={!item.hasStock} required />
            </label>
        ))}

        <button type="submit" className={styles.addToCartButton}>
            ADD TO CART
        </button>
        {message && <p className={styles.message}>{message}</p>}
        </form>
    );
}