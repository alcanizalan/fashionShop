
import styles from "./header.module.css"

import Image from "next/image"

import Logo from "../../../public/Vector_160d78ea-60e2-4e7e-89e5-6b9f32835361.svg"

export default function Header() {
    return(
        <header className={styles.header}>
            <span>MENU</span>
            <Image src={Logo} alt="Logo" width={100} height={100} />
            <div className={styles.containerHeaderTools}>
                <span>SEARCH</span>
                <span>LOGIN</span>
                <span>CART</span>
            </div>
        </header>
    )
}