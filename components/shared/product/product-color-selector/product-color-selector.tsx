"use client"
import { Color } from "@/types/ProductType";
import styles from "./product-color-selector.module.css";

export default function ColorSelector({colors, selectedColor, setSelectedColor}: { colors: Color[], selectedColor: number, setSelectedColor: (colorId: number) => void}){
    
    return(
        <div className={styles.contenedorColores}>
            {
                colors.map((color) => {
                    return(
                        <button onClick={(e) => {
                            setSelectedColor(color.id);
                            }}
                            className={styles.contenedorColor}
                            key={color.id}
                            style={{backgroundColor: color.hex, border: color.id === selectedColor ? "1px solid black" : "none"}}
                        ></button>
                    )
                })
            }
        </div>
    )
}