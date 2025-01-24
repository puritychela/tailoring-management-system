import { Category } from "./useCategory";
import useData from "./useData";

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
  gender: string;
  description: string;
  categoryId: number;
}

const useProducts = (
  searchedProduct: string | null,
  selectedCategory: Category | null
) =>
  useData<Product>(
    `/products`,
    {
      params: {
        ...(selectedCategory && {
          filter: "categoryId",
          value: selectedCategory?.id,
        }),
        ...(searchedProduct && { name: searchedProduct }),
      },
    },
    [selectedCategory?.id, searchedProduct]
  );

export default useProducts;
