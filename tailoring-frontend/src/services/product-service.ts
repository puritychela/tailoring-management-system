import apiClient from "./apiClient";

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
  gender: string;
  description: string;
  categoryId: number;
}

class ProductService {
  getAllProducts() {
    const controller = new AbortController();

    const request = apiClient.get<Product[]>("/products", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default new ProductService();
