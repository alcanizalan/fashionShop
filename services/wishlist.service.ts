"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";


//Obtenemos la lists de deseados
export async function getWishlist(){
  const supabase = await createClient();

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("User not authenticated");
    redirect("/login");
  }

  const { data, error } = await supabase
  .from("wishlist")
  .select(`
    *,
    product (
      *,
      color (*),
      image_product (*)
    ),
    user (
      *
    )
  `).eq("user_id", user.id);

  if(error){
      console.error("Error fetching wishlist:", error);
      return { data: null, error };
  }

  return { data, error };
}

//Agregamos un item a la lista de deseados
export async function addItemToWishlist(productId: string){
  const supabase = await createClient();  

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
      console.error("User not authenticated");
      redirect("/login");
  }

  const { data, error } = await supabase
  .from("wishlist")
  .insert([
    { product_id: productId, user_id: user.id }
  ]);

  if(error){
      console.error("Error adding item to wishlist:", error);
      return { data: null, error };
  }

  return { data, error };
}

//Elimina un item de la lista de deseados
export async function removeItemFromWishlist(productId: string){
  const supabase = await createClient();
  
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
      console.error("User not authenticated");
      redirect("/login");
  }

  const { data, error } = await supabase
  .from("wishlist")
  .delete()
  .eq("product_id", productId)
  .eq("user_id", user.id);

  if(error){
    console.error("Error removing item from wishlist:", error);
    return { data: null, error };
  }

  return { data, error };
}