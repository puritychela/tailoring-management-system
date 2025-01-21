import { Card, Heading, Image } from "@chakra-ui/react";
import useProduct, { Product } from "../hooks/useProduct";

interface Prop {
  product: Product;
}

const ProductsCard = ({ product }: Prop) => {
  return (
    <Card>
      <Image src={product.imageUrl} />
      <Heading>{product.name}</Heading>
    </Card>
  );
};

export default ProductsCard;
