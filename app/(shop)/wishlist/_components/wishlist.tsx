import ProductCard from "@/components/shared/product/product-card/product-card";
import { getWishlist } from "@/services/wishlistService";

import styles from "./wishlist.module.css";

export default async function Wishlist(){
    const { data: wishlist, error } = await getWishlist();

    return(
        <div className={styles.wishlist}>
            <h1>Wishlist</h1>
            {error && <p>Error loading wishlist: {error.message}</p>}
            {wishlist && wishlist.length === 0 && <p>Your wishlist is empty.</p>}
            {wishlist && wishlist.length > 0 && (
                <ul>
                    {wishlist.map(item => (
                        <li key={item.id}>
                            <ProductCard product={item.product} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}