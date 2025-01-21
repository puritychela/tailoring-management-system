import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Layout/NavBar";
import Sidebar from "./Layout/SideBar";
import { Category } from "./hooks/useCategory";
import ProductsGrid from "./products/ProductsGrid";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategoy] = useState<Category | null>(
    null
  );

  console.log(selectedCategory);

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
        <Navbar />
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
          <ProductsGrid selectedCategory={selectedCategory} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
