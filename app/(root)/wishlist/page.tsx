
import { Suspense } from "react";
import Wishlist from "@/components/shared/wishlist/wishlist";

export default function WishlistPage(){

    return(
        <section>
            <Suspense fallback={<p>Loading wishlist...</p>} >
                <Wishlist />
            </Suspense>
        </section>
    )
}