"use server"

import { createClient } from "@/lib/supabase/server";

export async function getGroupProduct(slug: string) {
    const supabase = await createClient();
    
        const { data, error } = await supabase
        .from('group_product')
        .select(`
          *,
          category (*),
          product (
            *,
            color (*),
            image_product (*),
            product_variant (
              *,
              size (*)
            )
          )
        `)
        .eq('slug', slug)
    return { data, error };
}

export async function getAllGroupProducts() {
    const supabase = await createClient();

    const { data, error } = await supabase
    .from('group_product')
    .select(`
      *,
      category (*),
      product (
        *,
        color (*),
        image_product (*),
        product_variant (
          *,
          size (*)
        )
      )
    `)

    if(error){
        console.error("Error fetching products:", error);
        return { data: null, error };
    }
    return { data, error };
}

export async function getProduct(slug: string) {
  const supabase = await createClient();

  const { data: product, error } = await supabase
  .from("product")
  .select(`
    *,
    color (*),
    image_product (*),
    product_variant (
      *,
      size (*)
    ),
    group_product (
      *,
      product (
        *,
        color (*),
        image_product (*),
        product_variant (
          *,
          size (*)
        )
      )
    )
  `)
  .eq("slug", slug)
  .single();

  if(error){
      console.error("Error fetching products:", error);
      return { product: null, error };
  }

  return { product, error };
}

export async function getAllProducts() {
  const supabase = await createClient();

  
  const { data: product, error } = await supabase
  .from("product")
  .select(`
    *,
    color (*),
    image_product (*),
    product_variant (
      *,
      size (*)
    ),
    group_product (
      *,
      product (
        *,
        color (*),
        image_product (*),
        product_variant (
          *,
          size (*)
        )
      )
    )
  `)

  if(error){
      console.error("Error fetching products:", error);
      return { product: null, error };
  }

  return { product, error };
}

