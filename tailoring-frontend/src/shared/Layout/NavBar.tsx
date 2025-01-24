import { HStack } from "@chakra-ui/react";
import SearchInput from "../components/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack
      padding="10px"
      h="50px"
      borderRadius="20px"
      className="navbar navbar-expand-md  navbar-light d-flex align-items-center fixed-top"
      style={{
        backgroundColor: "blueviolet", // Add your desired background color
        zIndex: 1030, // Ensures the navbar stays above other elements
      }}
    >
      <a className="nav-link me-auto" href="/">
        Home
      </a>

      <SearchInput onSearch={onSearch} />

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
        className="collapse navbar-collapse  justify-content-end"
        id="navbarNav"
      >
        <ul className="mt-3 nav-item dropdown justify-content-center align-items-center">
          <a
            className="nav-link dropdown-toggle "
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="nav-link" href="/profile">
                Profile
              </a>
            </li>
            <li>
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="nav-link" href="/register">
                SignUp
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </HStack>
  );
};

export default Navbar;
