import { Product } from "@/types/Products";

const products: Product[] = [
    {
        id: 1,
        name: "Sweater",
        slug: "wool-sweater",
        price: 199.99,
        image: "/KNITSCORREGIDO-01.webp",
        imageBack: "/KNITSCORREGIDO-02.webp",
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
        sizes: [
            {
                name: "S",
                quantity: 10,
            },
            {
                name: "M",
                quantity: 0,
            },
            {
                name: "L",
                quantity: 5,
            },
            {
                name: "XL",
                quantity: 2,
            }
        ],
    },{
        id: 2,
        name: "Sweater 2",
        slug: "wool-sweater-2",
        price: 139.99,
        image: "/KNITSCORREGIDO-10.webp",
        imageBack: "/KNITSCORREGIDO-09.webp",
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
        sizes: [
            {
                name: "S",
                quantity: 10,
            },
            {
                name: "M",
                quantity: 0,
            },
            {
                name: "L",
                quantity: 5,
            },
            {
                name: "XL",
                quantity: 2,
            }
        ]
    },
]

export default products