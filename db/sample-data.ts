
import Sweater from "@/public/KNITSCORREGIDO-01.webp"
import Sweater2 from "@/public/KNITSCORREGIDO-02.webp"
import Sweater9 from "@/public/KNITSCORREGIDO-09.webp"
import Sweater10 from "@/public/KNITSCORREGIDO-10.webp"

import { Product } from "@/types/Products";

const products: Product[] = [
    {
        id: 1,
        name: "Sweater",
        slug: "wool-sweater",
        price: 199.99,
        image: Sweater,
        imageBack: Sweater2,
        colors: [
            {
                name: "Red",
                hex: "#e23636",
                selected: false,
            },
            {
                name: "Green",
                hex: "#309130",
                selected: false,
            },
            {
                name: "Blue",
                hex: "#648cc0",
                selected: true,
            },
        ],
    },{
        id: 2,
        name: "Sweater 2",
        slug: "wool-sweater-2",
        price: 139.99,
        image: Sweater10,
        imageBack: Sweater9,
        colors: [
            {
                name: "Red",
                hex: "#3f2b2b",
                selected: true,
            },
            {
                name: "Green",
                hex: "#137213",
                selected: false,
            },
            {
                name: "Blue",
                hex: "#648cc0",
                selected: false,
            },
        ],
    },
]

export default products