import { Suspense } from "react"

import ProductCard from "@/components/shared/product/product-card/product-card"

//import products from "@/db/sample-data"
//import looks from "@/db/looks"

import Header from "@/components/shared/header/header"
import ProductList from "@/components/shared/product/product-list/product-list"

import styles from "./page.module.css"

export default function ViewAll(){
    return(
        <div className={styles.shopContainer}>
            <Header />
            <Suspense fallback={<div>Cargando productos...</div>}>
                <ProductList />
            </Suspense>
        </div>
    )
}