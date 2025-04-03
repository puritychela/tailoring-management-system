import { HStack, Box } from "@chakra-ui/react";
import SearchInput from "../shared/components/SearchInput";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const Token = localStorage.getItem("token");
  const { carts } = useContext(CartContext);

  return (
    <HStack
      padding="10px"
      h="50px"
      borderRadius="20px"
      className="navbar navbar-expand-md navbar-light fixed-top"
      style={{
        backgroundColor: "blueviolet",
        zIndex: 1030,
      }}
      width="100%"
      justifyContent="space-between"
    >
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>

      <Box>
        <SearchInput />
      </Box>

      <NavLink to="/cart">
        <div className="row position-relative">
          <MdOutlineShoppingCart size="1.5em" />
          {carts.length > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.8rem", padding: "4px 8px" }}
            >
              {carts.length}
            </span>
          )}
        </div>
      </NavLink>

      {isAdmin == "true" && <NavLink to="/admin">Admin</NavLink>}
      {Token ? (
        <NavLink to="/logout">Logout</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </HStack>
  );
};

export default Navbar;
