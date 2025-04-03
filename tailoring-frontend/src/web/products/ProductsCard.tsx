import { Button, Card, Heading, Image } from "@chakra-ui/react";
import { useContext, useReducer } from "react";
import cartReducer, { CartProduct } from "../../Reducers/CartReducer";
import { Product } from "../../hooks/useProduct";
import CartContext from "../../context/CartContext";

interface Prop {
  product: Product;
}
const initialCart: CartProduct[] = [];

const ProductsCard = ({ product }: Prop) => {
  const { dispatch } = useContext(CartContext);
  return (
    <Card>
      <Image height="300px" src={product.image} />
      <Heading size="lg">{product.name}</Heading>
      <Button onClick={() => dispatch({ type: "ADD", product: product })}>
        Add To Cart
      </Button>
    </Card>
  );
};

export default ProductsCard;
