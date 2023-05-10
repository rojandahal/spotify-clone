import { Outlet, NavLink } from "react-router-dom";
import "./sidebar.css";
import Logo from "../../assets/spotify.png";
import { Nav, NavItem, NavbarBrand } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

export default function Root() {
  return (
    <>
      <div className="body-container">
        <div className="navbar-container">
          <Nav
            vertical
            className="sticky-top"
            style={{
              height: "100vh",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <NavItem
              style={{
                marginBottom: "2rem",
                marginTop: "1.5rem",
                fontSize: "2rem",
              }}
            >
              <NavbarBrand href="/">
                <img
                  alt="logo"
                  src={Logo}
                  style={{
                    height: 50,
                    width: 50,
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
        </div>

        {/* Here all the components will load where navbar remains fixed */}
        <div className="components">
          <Outlet />
        </div>
      </div>
    </>
  );
}
