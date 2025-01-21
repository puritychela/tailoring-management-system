import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductsCardContainer from "./ProductsCardContainer";
import useProduct from "../hooks/useProduct";
import ProductsCardSkeleton from "./ProductsCardSkeleton";
import ProductsCard from "./ProductsCard";
import { Category } from "../hooks/useCategory";

interface Prop {
  selectedCategory: Category | null;
}

const ProductsGrid = ({ selectedCategory }: Prop) => {
  const { products, error, isLoading } = useProduct(selectedCategory);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProductsCardContainer key={skeleton}>
            <ProductsCardSkeleton />
          </ProductsCardContainer>
        ))}
      {products.map((product) => (
        <ProductsCardContainer key={product.id}>
          <ProductsCard product={product} />
        </ProductsCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
