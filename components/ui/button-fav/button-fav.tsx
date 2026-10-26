"use client";

import styles from './button-fav.module.css';
import Image from 'next/image';
import { addItemToWishlist, alternateItemInWishlist, removeItemFromWishlist } from '@/services/wishlistService';
import { isProductInWishlist } from '@/services/wishlistService';
import { useState } from 'react';

export default function ButtonFav({ productId, initialIsInWishlist }: { productId: string; initialIsInWishlist: boolean }) {

    const [isInWishlist, setIsInWishlist] = useState(
        initialIsInWishlist
    );

    const [pending, setPending] = useState(false);

    console.log({
        productId,
        initialIsInWishlist,
    });

    async function handleClick() {
        if (pending) return;

        setPending(true);

        try {
            await alternateItemInWishlist(productId);

            setIsInWishlist((previous) => !previous);
        } catch (error) {
            console.error("Error actualizando favoritos:", error);
        } finally {
            setPending(false);
        }
    }


    return(
        <button
            className={styles.button}
            onClick={handleClick}
            disabled={pending}
            aria-label={
                isInWishlist
                    ? "Eliminar de favoritos"
                    : "Añadir a favoritos"
            }
        >
            <Image
                src={
                    isInWishlist
                        ? "/icons/favorite_fill_black.svg"
                        : "/icons/favorite_black.svg"
                }
                alt=""
                width={24}
                height={24}
            />
        </button>
    )
        
}   