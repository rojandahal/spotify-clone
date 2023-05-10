import { Button, Nav, NavItem, Navbar, NavbarText } from "reactstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./navbar.css";

export default function NavBar() {
  return (
    <Navbar className="d-flex flex-row mb-3" color="dark" dark>
      <Nav className="me-auto mb-3">
        <NavItem className="me-5 pt-2">
          <AiOutlineLeft className="navigation-arrow" />
        </NavItem>
        <NavItem className="me-5 pt-2">
          <AiOutlineRight className="navigation-arrow" />
        </NavItem>
      </Nav>
      <a href="/signup" className="navlink">
        <NavbarText className="text-white me-5">Signup</NavbarText>
      </a>
      <a href="/login">
        <Button className="login-button navlink text-black bg-white me-5">
          Login
        </Button>
      </a>
    </Navbar>
  );
}
