// import create from "./http-service";
import create from "./http-service";

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
  gender: string;
  description: string;
  categoryId: number;
}

export default create("/products");
