import { createClient } from "@/lib/supabase/server";
import ProductCard from "@/components/shared/product/product-card/product-card";
import { GroupProduct } from '@/types/ProductType';
import styles from "./product-list.module.css";
import { useGetAllProducts } from "@/hooks/useGetProduct";


export default async function ProductList(){
    
    const { product } = await useGetAllProducts();

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