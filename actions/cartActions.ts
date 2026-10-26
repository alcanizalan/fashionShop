
"use server";

import { addItemToCart } from "@/services/cartService";

export async function addItemToCartAction(
    productId: string,
    sizeId: number,
    quantity: number
) {
    return await addItemToCart(productId, sizeId, quantity);
}
