import products from "./sample-data";

import {LookModule} from "@/types/ProductType";
import Look1 from "@/public/P_DSC0472.webp";

const looks: LookModule[] = [
    {
        id: 1,
        name: "Look 1",
        imageLook: Look1,
        products: [products[0], products[1]],
    },
    {
        id: 2,
        name: "Look 2",
        imageLook: Look1,
        products: [products[1]],
    },

]

export default looks;