import { StaticImageData } from "next/image";

// ==========================================
// 1. ENTIDADES BASE (Tablas maestras)
// ==========================================

export interface Category {
  id: number;
  name: string;
}

export interface Color {
  id: number;
  name: string;
  hex: string;
}

export interface Size {
  id: number;
  name: string;
}

export interface ImageProduct {
  id: string;
  image_url: string | StaticImageData;
  is_model: boolean;
  product_id: string | null;
  position: number;
}

// ==========================================
// 2. PRODUCTO Y VARIANTES
// ==========================================

export interface ProductVariant {
  id: string;
  product_id: string;
  ref: string;
  price: number;
  offer_price: number | null;
  size_id: number;
  stock: number;
  created_at?: string;
  // Relaciones
  size?: Size;
}

export interface Product {
  id: string;
  name: string;
  color_id: number;
  group_product_id: string;
  slug: string;
  // Relaciones
  color?: Color;
  image_product?: ImageProduct[];
  product_variant?: ProductVariant[];
  group_product?: GroupProduct;
}

export interface GroupProduct {
  id: string;
  name: string | null;
  slug: string;
  description: string;
  composition: string;
  category_id: number | null;
  created_at?: string;
  // Relaciones
  category?: Category | null;
  product?: Product[];
}

// ==========================================
// 3. CARRITO, DESEOS Y USUARIO
// ==========================================

export interface User {
  id: string;
  name: string;
  email: string;
  number: string | null;
  created_at?: string;
}

export interface CartProduct {
  id: string;
  cart_id: string;
  variant_id: string;
  quantity: number;
  created_at?: string;
  // Relación
  product_variant?: ProductVariant;
}

export interface Cart {
  id: string;
  user_id: string | null;
  state: string;
  created_at?: string;
  updated_at?: string | null;
  // Relación
  cart_product?: CartProduct[];
}

export interface Wishlist {
  id: string;
  user_id: string;
  product_id: string;
  created_at?: string;
  // Relaciones
  product?: Product;
}

// ==========================================
// 4. PEDIDOS (Orders)
// ==========================================

export interface OrderItem {
  id: number;
  created_at?: string;
  order_id: number;
  product_id: string;
  variant_id: string;
  product_name: string;
  color_name: string;
  size_name: string;
  unit_price: number;
  quantity: number;
}

export interface Order {
  id: number;
  user_id: string;
  status: string;
  total: number;
  created_at?: string;
  order_item?: OrderItem[];
}