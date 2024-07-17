export type getCategories_res = {
  [category: string]: Array<string>;
};

export type featuredProducts_res = {
  product: Product;
  products: Product[];
};

export type categoryData_res = {
  [category: string]: Array<{
    category: string;
    image_url: string;
    id: number;
    subcategory_name: string;
  }>;
};

export type product_res = Product;

export type similarProducts_res = Array<Product>;

export interface Product {
  id?: number;
  name?: string;
  price?: string;
  image_url?: string;
  affiliate_link?: string;
  affiliate_site?: string;
  rating?: number;
  featured_sites?: string;
  category?: string;
  sub_category?: string;
}
