"use client"
import styles from "./header.module.css"
import UserToggleLogin from "@/components/shared/user/user-toggle-login/user-toggle-login"
import Link from "next/link"

import Image from "next/image"

import Logo from "../../../public/Vector_160d78ea-60e2-4e7e-89e5-6b9f32835361.svg"
import { useState } from "react"


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={`${styles.headerAndNav} ${isOpen ? styles.headerAbierto : ""}`}>
            <header className={`${styles.containerHeader} ${isOpen ? styles.headerAbiertoTop : ""}`}>
                <button className={styles.headerButtons} id="navMenu" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "CLOSE" : "MENU"}</button>
                <Link href="/"><Image src={Logo} alt="Logo" width={100} height={100} /></Link>
                <div className={styles.containerHeaderTools}>
                    <button className={styles.headerButtons}>SEARCH</button>
                    <UserToggleLogin />
                    <Link href="/wishlist" className={styles.headerButtons}>WISHLIST</Link>
                    <Link href="/cart" className={styles.headerButtons}>CART</Link>
                </div>
            </header>
            { isOpen && (
                <div>
                    <nav className={styles.containerNav}>
                        <ul className={styles.containerUl}>
                            <li className={styles.containerLi}>BEST SELLERS</li>
                            <li className={styles.containerLi}>NEW IN</li>
                            <li className={styles.containerLi}>VIEW COLLECTIONS</li>
                            <li className={styles.containerLi}>VIEW ALL</li>
                            <li className={styles.containerLi}>LAST UNITS</li>
                            <li className={styles.containerLi}>CONSTELLATION VIEW</li>
                            <li className={styles.containerLi}>GIFT CARD</li>
                            <Link href="/shop/view-all"><li className={styles.containerLi}>LOOKS</li></Link>
                            <li className={styles.containerLi}>OUT & ABOUT</li>
                        </ul>
                    </nav>
                    <div onClick={() => setIsOpen(false)} className={styles.blackBackground}>
                    </div>
                </div>
                )}   
                
        </div>
        
    )
}