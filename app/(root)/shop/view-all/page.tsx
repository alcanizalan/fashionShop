import ProductCard from "@/components/shared/product/product-card"

import products from "@/db/sample-data"
import looks from "@/db/looks"

import Header from "@/components/shared/header/header"

import styles from "./page.module.css"
import Look from "@/components/shared/look/look"

export default function ViewAll(){
    return(
        <div>
            <Header />
            <main className={styles.containerShop}>
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </main>
            <div className={styles.looksContainer}>
                {
                    looks.map((look, index) => {
                        return(
                            <Look key={index} {...look} />
                        )
                    })
                }
            </div>
        </div>
    )
}