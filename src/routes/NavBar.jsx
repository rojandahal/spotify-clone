import { Button, Nav, NavItem, Navbar, NavbarText } from "reactstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function NavBar() {
  return (
    <Navbar className="d-flex flex-row mb-3" color="dark" dark>
      <Nav className="me-auto mb-3">
        <NavItem className="me-5 pt-2">
          <AiOutlineLeft />
        </NavItem>
        <NavItem className="me-5 pt-2">
          <AiOutlineRight />
        </NavItem>
      </Nav>
      <NavbarText className="dark me-5">Signup</NavbarText>
      <Button outline className="me-5">Login</Button>
    </Navbar>
  );
}
