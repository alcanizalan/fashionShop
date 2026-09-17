
import { Suspense } from "react";
import Wishlist from "@/app/(shop)/wishlist/_components/wishlist";

export default function WishlistPage(){

    return(
        <section>
            <Suspense fallback={<p>Loading wishlist...</p>} >
                <Wishlist />
            </Suspense>
        </section>
    )
}