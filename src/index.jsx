import { Outlet, NavLink } from "react-router-dom";
import "./sidebar.css";
import Logo from "./assets/spotify.png";
import { Col, Nav, NavItem, NavbarBrand, Row } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { FcLike } from "react-icons/fc";
import NavBar from "./components/SideBar/NavBar";
import Footer from "./components/Footer/Footer";
import PlaySongsBar from "./components/BrowseSong/PlaySongs";

export default function Root() {
  return (
    <>
      <Row className="body-container m-0 p-0">
        <Col className="navbar-container" md={3} lg={2}>
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
              <NavLink className="nav-color" to="/search">
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
            <NavItem className="mb-2 mt-3">
              <NavLink className="nav-color" to="/create-playlist">
                <SiAddthis style={{ marginInlineEnd: "10px" }} /> Create
                Playlist
              </NavLink>
            </NavItem>
            <NavItem className="mb-2">
              <NavLink className="nav-color" to="/liked-songs">
                <FcLike style={{ marginInlineEnd: "10px" }} /> Liked Songs
              </NavLink>
            </NavItem>
            {/* <NavItem className="d-flex justify-content-end">
              <Row className="mt-5">
                <Col className="text-center text-white">
                  <p className="footer-p">Legal</p>
                </Col>
                <Col className="text-center text-white">
                  <p className="footer-p">Privacy Center</p>
                </Col>
                <Col className="text-center text-white">
                  <p className="footer-p">Privacy Policy</p>
                </Col>
                <Col className="text-center text-white">
                  <p className="footer-p">Cookies</p>
                </Col>
                <Col className="text-center text-white">
                  <p className="footer-p">About Ads</p>
                </Col>
              </Row>
            </NavItem> */}
          </Nav>
        </Col>

        {/* Here all the components will load where navbar remains fixed */}
        <Col className="m-0 p-0" lg={10} xs={12} md={9} sm={12}>
          <NavBar />
          <Outlet />
          <Footer />
        </Col>
        <PlaySongsBar />
      </Row>
    </>
  );
}
