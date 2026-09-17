import { getWishlist } from "@/services/wishlist.service";

export default async function Wishlist(){
    const { data: wishlist, error } = await getWishlist();

    return(
        <div>
            <h1>Wishlist</h1>
            {error && <p>Error loading wishlist: {error.message}</p>}
            {wishlist && wishlist.length === 0 && <p>Your wishlist is empty.</p>}
            {wishlist && wishlist.length > 0 && (
                <ul>
                    {wishlist.map(item => (
                        <li key={item.id}>
                            <p>{item.product.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}