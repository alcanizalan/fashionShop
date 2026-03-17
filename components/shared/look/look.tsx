
import Image from "next/image";

import styles from "./look.module.css";

import { LookModule } from "@/types/Products";
import Link from "next/link";


export default function Look({ id, name, imageLook, products }: LookModule) {
    return(
        <div className={styles.lookContainer}>
            <div className={styles.completeLook}>
                <Image src={imageLook} alt={name} className={styles.imageLook}/>
            </div>
            <div className={styles.articlesLook}>
                {
                    products.map((product, index) => {
                        return(
                            <Link key={index} href={`/product/${product.slug}`} className={styles.link}>
                                <Image src={product.image} alt={product.name} className={styles.productImage}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}