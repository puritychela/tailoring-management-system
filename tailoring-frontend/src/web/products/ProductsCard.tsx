import { Button, Card, Heading, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { Product } from "../../hooks/useProduct";
import CartContext from "../../context/CartContext";

interface Prop {
  product: Product;
}

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
