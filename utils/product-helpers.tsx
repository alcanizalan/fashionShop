import { Color, Product } from "@/types/ProductType";

export function getProductOptions(product: Product){

    // los colores del grupo son productos hermanos (mismo group_product, distinto color)
    const siblings = product.group_product?.product ?? [product];

    const colors = Array.from(
        new Map<number, Color>(
            siblings
                .filter((p) => p.color)
                .map((p) => [p.color!.id, p.color as Color])
        ).values()
    );

    const sizes = new Map<number, {size: string, hasStock: boolean}>();

    (product.product_variant || []).forEach((v) => {
        if (!v.size) return;

        const isAvailable = v.stock > 0;
        const existing = sizes.get(v.size.id);

        if (!existing){
            sizes.set(v.size.id, {size: v.size.name, hasStock: isAvailable});
        }else if (isAvailable) {
            sizes.set(v.size.id, {size: v.size.name, hasStock: true});
        }
    });

    return {
        colors,
        sizes: Array.from(sizes.values())
    };
}

export function getProductSizes(activeProduct: Product){

    const sizes = new Map<number, {size: string, hasStock: boolean}>();

    (activeProduct.product_variant || []).forEach((v) => {
        if (!v.size) return;

        const isAvailable = v.stock > 0;
        const existing = sizes.get(v.size.id);

        if (!existing){
            sizes.set(v.size.id, {size: v.size.name, hasStock: isAvailable});
        }else if (isAvailable) {
            sizes.set(v.size.id, {size: v.size.name, hasStock: true});
        }
    });

    return {
        sizes: Array.from(sizes.values())
    };
}