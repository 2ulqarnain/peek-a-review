import { fetchData } from "@/utils/functions";
import { getCategories_res } from "@/apis/types";

export const getCategories = async (): Promise<getCategories_res> => {
  return fetchData("/api/categories/");
};