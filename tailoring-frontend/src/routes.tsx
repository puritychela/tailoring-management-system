import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ShoppingCart from "./pages/ShoppingCart";
import RegisterComponent from "./pages/Auths/Register";
import LoginComponent from "./pages/Auths/Login";
import ProductGrid from ".//AdminPannel/products/ProductsGrid";
import Logout from "./pages/Auths/Logout";
import DashBoard from "./AdminPannel/DashBoard/DashBoard";
import CategoryPage from "./AdminPannel/categories/CategoryPage";
import User from "./AdminPannel/Components/User";
import Shirt from "./AdminPannel/Components/Shirt";
import Skirt from "./AdminPannel/Components/Skirt";
import TrouserComponent from "./AdminPannel/Components/TrouserComponent";
import Dress from "./AdminPannel/Components/Dress";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />, // Layout wraps all pages
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "register", element: <RegisterComponent /> },
      { path: "login", element: <LoginComponent /> },
      { path: "logout", element: <Logout /> },
      {
        path: "admin",
        element: <DashBoard />,
        children: [
          { index: true, element: <ProductGrid /> },
          { path: "categories", element: <CategoryPage /> },
          { path: "dresses", element: <Dress /> },
          { path: "trousers", element: <TrouserComponent /> },
          { path: "skirts", element: <Skirt /> },
          { path: "shirts", element: <Shirt /> },
          { path: "users", element: <User /> },
        ],
      },
    ],
  },
]);

export default router;
