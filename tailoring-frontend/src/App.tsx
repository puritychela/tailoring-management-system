import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./shared/Layout/NavBar";
import Sidebar from "./shared/Layout/SideBar";
import { Category } from "./shared/hooks/useCategory";
import { useState } from "react";
import ProductsGrid from "./web/products/ProductsGrid";
// import ProductsGrid from "./AdminPannel/products/ProductsGrid";
// import CategoryPage from "./AdminPannel/categories/CategoryPage";

function App() {
  const [selectedCategory, setSelectedCategoy] = useState<Category | null>(
    null
  );
  const [searchProduct, setSearchedProduct] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <GridItem area="nav" marginBottom="60px">
        <Navbar onSearch={(ProductName) => setSearchedProduct(ProductName)} />
      </GridItem>
      <Show above="md">
        <GridItem area="aside">
          <Sidebar
            onSelectCategory={(category) => setSelectedCategoy(category)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          {/* <CategoryPage /> */}
          <ProductsGrid
            selectedCategory={selectedCategory}
            searchProduct={searchProduct}
          />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
