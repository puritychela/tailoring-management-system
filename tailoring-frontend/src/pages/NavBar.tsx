import { HStack, Box, Spacer } from "@chakra-ui/react";
import SearchInput from "../shared/components/SearchInput";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
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
      // justifyContent="space-around"
    >
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>

      <Box flexGrow={1}>
        <SearchInput onSearch={onSearch} />
      </Box>

      <NavLink to="/cart">
        <TiShoppingCart size="1.5em" />
      </NavLink>

      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="mt-3 nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/register">
                  SignUp
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </HStack>
  );
};

export default Navbar;
