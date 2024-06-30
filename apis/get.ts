import { fetchData } from "@/utils/functions";
import {
  categoryData_res,
  featuredProducts_res,
  getCategories_res,
  product_res,
  similarProducts_res,
} from "@/apis/types";

export const getCategories = async (): Promise<getCategories_res> => {
  return fetchData("/api/categories/");
};

export const getFeaturedProduct = async (): Promise<featuredProducts_res> => {
  return fetchData("/api/featured-products/");
};

export const getCategoriesData = async (): Promise<categoryData_res> => {
  return fetchData("/api/category-products");
};

export const getProductById = async (
  productID: number | string,
): Promise<product_res> => {
  return fetchData(`/product/${productID}`);
};

export const getSimilarProductsByProduct = async (
  productID: number | string,
): Promise<similarProducts_res> => {
  return fetchData(`/api/products/${productID}/similar/`);
};
