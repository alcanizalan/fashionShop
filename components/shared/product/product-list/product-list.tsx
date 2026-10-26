import { createClient } from "@/lib/supabase/server";
import ProductCard from "@/components/shared/product/product-card/product-card";
import { GroupProduct } from '@/types/ProductType';
import styles from "./product-list.module.css";
import { getAllProducts } from "@/services/productService";


export default async function ProductList(){
    
    const { product } = await getAllProducts();

    console.log("Fetched products:", product);

    return(
        <main className={styles.shopContainer}>
            {
                product?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            {
                /*<div className={styles.looksContainer}>
                {
                    looks.map((look, index) => {
                        return(
                            <Look key={index} {...look} />
                        )
                    })
                }
                </div>*/
            } 
        </main>
    )
}