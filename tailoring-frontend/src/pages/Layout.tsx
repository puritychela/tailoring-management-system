import { useState } from "react";
import { Category } from "../shared/hooks/useCategory";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = () => {
  const [selectedCategory, setSelectedCategoy] = useState<Category | null>(
    null
  );
  const [searchProduct, setSearchedProduct] = useState<string | null>(null);
  return (
    <>
      <Grid>
        <GridItem marginBottom="60px">
          <Navbar onSearch={(ProductName) => setSearchedProduct(ProductName)} />
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
