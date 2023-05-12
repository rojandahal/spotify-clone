import { Outlet, NavLink } from "react-router-dom";
import "./sidebar.css";
import Logo from "./assets/spotify.png";
import { Col, Nav, NavItem, NavbarBrand, Row } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import NavBar from "./components/SideBar/NavBar";
import Footer from "./components/Footer/Footer";

export default function Root() {
  return (
    <>
      <Row className="body-container m-0">
        <Col className="navbar-container col-2">
          <Nav
            vertical
            className="sticky-top ms-4 fs-4"
            style={{
              height: "100vh",
              alignItems: "start",
            }}
          >
            <NavItem
              style={{
                marginBottom: "2rem",
                marginTop: "1.5rem",
                width: "100%",
              }}
            >
              <NavbarBrand href="/">
                <img
                  alt="logo"
                  src={Logo}
                  style={{
                    height: 40,
                    width: 40,
                    marginInlineEnd: "10px",
                  }}
                />
                Spotify
              </NavbarBrand>
            </NavItem>
            <NavItem className="mb-2">
              <NavLink active className="nav-color" to="/">
                <FaHome style={{ marginInlineEnd: "10px" }} />
                Home
              </NavLink>
            </NavItem>
            <NavItem className="mb-2">
              <NavLink className="nav-color" to="/features">
                <BsSearch style={{ marginInlineEnd: "10px" }} />
                Search
              </NavLink>
            </NavItem>
            <NavItem className="mb-2">
              <NavLink className="nav-color" to="/library">
                <BiLibrary style={{ marginInlineEnd: "10px" }} />
                Library
              </NavLink>
            </NavItem>
          </Nav>
        </Col>

        {/* Here all the components will load where navbar remains fixed */}
        <Col className="m-0 p-0 col-10">
          <NavBar />
          <Outlet />
          <Footer />
        </Col>
      </Row>
    </>
  );
}
