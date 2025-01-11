export interface ProfileInfo {
  email: string;
  fullname: string;
  username: string;
  phone_number: string;
  store_name: string;
  store_tag: string;
  store_number: string;
  store_email: string;
  category: string;
  store_logo: string;
}

export interface ProductDetails {
  product_title: string;
  product_desc: string;
  price: string;
  old_price: string;
  product_collection: string[];
  inventory: string;
  has_variations: boolean;
  variations: { type: string; variants: string[] }[];
  product_images: File[];
  self_shipping: boolean;
  instashop_shipping: boolean;
}
