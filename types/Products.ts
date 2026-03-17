import { StaticImageData } from "next/image";

export interface Product {
    id?: number;
    name: string;
    slug: string;
    price: number;
    image: StaticImageData;
    imageBack: StaticImageData;
    colors: Color[];
}

interface Color {
    name: string;
    hex: string;
    selected?: boolean;
}

export interface LookModule {
    id: number;
    name: string;
    imageLook: StaticImageData;
    products: Product[];
}