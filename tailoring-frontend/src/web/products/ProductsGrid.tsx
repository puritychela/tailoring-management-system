import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductsCardContainer from "./ProductsCardContainer";
import ProductsCardSkeleton from "./ProductsCardSkeleton";
import ProductsCard from "./ProductsCard";
import { Category } from "../../shared/hooks/useCategory";
import useProducts from "../../shared/hooks/useProduct";

interface Prop {
  searchProduct: string | null;
  selectedCategory: Category | null;
}

const ProductsGrid = ({ searchProduct, selectedCategory }: Prop) => {
  const { data, error, isLoading } = useProducts(
    searchProduct,
    selectedCategory
  );

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
      {data.length === 0 && (
        <Text fontSize="xl" color="red">
          No products on category {selectedCategory?.name}{" "}
        </Text>
      )}
      {data.map((product) => (
        <ProductsCardContainer key={product.id}>
          <ProductsCard product={product} />
        </ProductsCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
