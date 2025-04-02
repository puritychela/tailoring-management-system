import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ShoppingCart from "./pages/ShoppingCart";
import RegisterComponent from "./pages/Auths/Register";
import LoginComponent from "./pages/Auths/Login";
import ProductGrid from ".//AdminPannel/products/ProductsGrid";
// import WebDashboard from "./pages/WebDashboard";
import PrivateRoute from "./shared/components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all pages
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "register", element: <RegisterComponent /> },
      { path: "login", element: <LoginComponent /> },

      // Protected Routes for Logged-In Users
      // {
      //   path: "dashboard",
      //   element: <PrivateRoute />, // Accessible to all logged-in users
      //   children: [{ index: true, element: <WebDashboard /> }],
      // },

      {
        path: "admin",
        element: <PrivateRoute adminOnly={true} />, // Only admins can access
        children: [{ index: true, element: <ProductGrid /> }],
      },
    ],
  },
]);

export default router;
