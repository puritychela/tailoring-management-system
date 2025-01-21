import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import productService from "../services/product-service";
import { Category } from "./useCategory";

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
  gender: string;
  description: string;
  categoryId: number;
}

const useProduct = (selectedCategory: Category | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = productService.getAllProducts();
    request
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => cancel();
  }, []);
  return { products, error, isLoading, setError, setProducts };
};

export default useProduct;
