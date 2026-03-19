import { StaticImageData } from "next/image";

export interface Product {
    id?: number;
    name: string;
    slug: string;
    price: number;
    image: StaticImageData;
    imageBack: StaticImageData;
    colors: Color[];
    sizes: Size[];
}

interface Color {
    name: string;
    hex: string;
    selected?: boolean;
}

interface Size{
    name: string;
    quantity: number;
}

export interface LookModule {
    id: number;
    name: string;
    imageLook: StaticImageData;
    products: Product[];
}