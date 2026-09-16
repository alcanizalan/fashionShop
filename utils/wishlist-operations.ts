import { createClient } from "@/lib/supabase/server";

export async function getWishlist(){
  const supabase = await createClient();

  const { data, error } = await supabase
  .from("wishlist")
  .select(`
    *,
    product (
      *,
      color (*),
      image_product (*)
    )
  `);

  if(error){
      console.error("Error fetching wishlist:", error);
      return { data: null, error };
  }

  return { data, error };
}

export async function addItemToWishlist(productId: string){
  const supabase = await createClient();

  const { data, error } = await supabase
  .from("wishlist")
  .insert([
    { product_id: productId }
  ]);

  if(error){
      console.error("Error adding item to wishlist:", error);
      return { data: null, error };
  }

  return { data, error };
}

export async function removeItemFromWishlist(productId: string){
  const supabase = await createClient();

  const { data, error } = await supabase
  .from("wishlist")
  .delete()
  .eq("product_id", productId);

  if(error){
      console.error("Error removing item from wishlist:", error);
      return { data: null, error };
  }

  return { data, error };
}