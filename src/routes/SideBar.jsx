import { Outlet, NavLink } from "react-router-dom";
import "./sidebar.css";
import Logo from "../assets/spotify.png";
import { Nav, NavItem, NavbarBrand } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import NavBar from "./NavBar";

export default function Root() {
  return (
    <>
      <div className="body-container">
        <div className="navbar-container">
          <Nav
            vertical
            style={{
              backgroundColor: "black",
              height: "100vh",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <NavItem style={{ marginBottom: "2rem", marginTop: "1.5rem" }}>
              <NavbarBrand href="/">
                <img
                  alt="logo"
                  src={Logo}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                Spotify
              </NavbarBrand>
            </NavItem>
            <NavItem>
              <NavLink active className="nav-color" to="/">
                <FaHome style={{ marginInlineEnd: "10px" }} />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-color" to="/features">
                <BsSearch style={{ marginInlineEnd: "10px" }} />
                Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-color" to="/library">
                <BiLibrary style={{ marginInlineEnd: "10px" }} />
                Library
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        {/* Here all the components will load where navbar remains fixed */}
        <div className="components">
          <NavBar />
          <div className="sub-components">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
