export type getCategories_res = {
  [category: string]: Array<string>;
};

export type featuredProducts_res = {
  product: {
    id: number;
    name: string;
    image_url: string;
  };
  products: Array<{
    id: number;
    name: string;
    image_url: string;
  }>;
};

export type categoryData_res = {
  [category: string]: Array<{
    category: string;
    image_url: string;
    id: number;
    subcategory_name: string;
  }>;
};

export type product_res = {
  id: number;
  name?: string;
  price?: string;
  image_url?: string;
  affiliate_link?: string;
  affiliate_site?: string;
  rating?: any;
  featured_sites?: string;
  created_at?: string;
  updated_at?: string;
  category?: string;
  sub_category?: string;
};

export type similarProducts_res = Array<OtherTopProduct>;

export type OtherTopProduct = {
  id: number;
  name: string;
  price: string;
  image_url: string;
  affiliate_link: string;
  affiliate_site: string;
  rating: any;
  featured_sites: string;
  category: string;
  sub_category: string;
};
