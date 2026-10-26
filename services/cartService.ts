
import { createClient } from "@/lib/supabase/server";

export async function addItemToCart(
    productId: string,
    sizeId: number,
    quantity: number
) {
    const supabase = await createClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        throw new Error("User not authenticated");
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity");
    }

    // 1. Buscar la variante correspondiente al producto y la talla.
    const { data: variant, error: variantError } = await supabase
        .from("product_variant")
        .select("id, stock")
        .eq("product_id", productId)
        .eq("size_id", sizeId)
        .single();

    if (variantError || !variant) {
        throw new Error(
            "Error fetching product variant: " +
            (variantError?.message ?? "Variant not found")
        );
    }

    if (variant.stock < quantity) {
        throw new Error("Not enough stock");
    }

    // 2. Buscar el carrito activo del usuario.
    const { data: existingCart, error: cartError } = await supabase
        .from("cart")
        .select("id")
        .eq("user_id", user.id)
        .eq("state", "active")
        .maybeSingle();

    if (cartError) {
        throw new Error("Error fetching cart: " + cartError.message);
    }

    let cartId = existingCart?.id;

    // 3. Crear un carrito si todavía no existe.

    
    if (!cartId) {
        const { data: newCart, error: newCartError } = await supabase
            .from("cart")
            .insert({
                user_id: user.id,
                state: "active",
            })
            .select("id")
            .single();

        if (newCartError || !newCart) {
            throw new Error(
                "Error creating cart: " +
                (newCartError?.message ?? "Cart not created")
            );
        }

        cartId = newCart.id;
    }

    // 4. Asociar el producto al carrito.
    const { data: cartData, error: cartProductError } = await supabase
        .from("cart_product")
        .insert({
            cart_id: cartId,
            product_id: productId,
            variant_id: variant.id,
            quantity,
        })
        .select()
        .single();

    if (cartProductError) {
        throw new Error(
            "Error adding item to cart: " + cartProductError.message
        );
    }

    return { data: cartData, error: null };
}
