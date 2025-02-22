import { Button, Card, Heading, Image } from "@chakra-ui/react";
import { Product } from "../../shared/hooks/useProduct";

interface Prop {
  product: Product;
}

const ProductsCard = ({ product }: Prop) => {
  return (
    <Card>
      <Image height="350px" src={product.imageUrl} />
      <Heading>{product.name}</Heading>
      <Button>Add To Cart</Button>
    </Card>
  );
};

export default ProductsCard;
