"use client";

import styles from './button-fav.module.css';
import { addItemToWishlist } from '@/services/wishlist.service';

export default function ButtonFav({ productId }: { productId: string }) {
    return (
        <button className={styles.button} onClick={() => addItemToWishlist(productId)}>♡</button>
    );
}