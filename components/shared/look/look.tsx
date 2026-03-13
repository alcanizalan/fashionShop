
import Image from "next/image";

import styles from "./look.module.css";

import looks from "@/db/looks";
import { LookModule } from "@/types/Products";


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
                            <Image key={index} src={product.image} alt={product.name} className={styles.productImage}/>
                        )
                    })
                }
            </div>
        </div>
    )
}