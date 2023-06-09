import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Nav,
  NavItem,
  Navbar,
  NavbarText,
} from "reactstrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./navbar.css";
import { auth } from "../../Firebase/firebase";
import { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchAtom, userDetailAtom } from "../../recoil/atoms/loginAtom";
import { useMatch, useNavigate } from "react-router";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const setSearch = useSetRecoilState(searchAtom);
  const user = useRecoilValue(userDetailAtom);
  const match = useMatch("/search/*");
  const [scroll, setScroll] = useState(false);
  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    auth.signOut();
    navigateTo("/login");
  };

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearch(null);
    } else {
      setSearch(true);
    }
  };

  const toggleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar
      className={`d-flex flex-row sticky-top ${
        scroll ? "bg-dark" : "bg-transparent"
      }`}
      dark
    >
      <Nav className="me-auto mb-3">
        {match ? (
          <NavItem className="me-5 pt-2">
            <Input
              onChange={handleSearch}
              id="exampleSearch"
              name="search"
              placeholder="search for songs"
              type="search"
              className="rounded-5 bg-dark text-white border-1"
            />
          </NavItem>
        ) : (
          <>
            <NavItem className="me-5 pt-2">
              <AiOutlineLeft className="navigation-arrow" />
            </NavItem>
            <NavItem className="me-5 pt-2">
              <AiOutlineRight className="navigation-arrow" />
            </NavItem>
          </>
        )}
      </Nav>
      {user ? (
        <>
          <Button
            className="rounded-5 me-3 bg-white text-black border-0"
            color="secondary"
            style={{
              fontFamily: "Roboto",
            }}
          >
            Upgrade
          </Button>
          <Button
            className="rounded-5 me-3 bg-black text-white border-0"
            color="secondary"
          >
            <MdOutlineDownloadForOffline className="me-2 mb-1" />
            Install App
          </Button>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="bg-transparent border-0">
              <img
                className="rounded-circle"
                src={profile}
                style={{ width: "30px" }}
              ></img>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Profile </DropdownItem>
              <DropdownItem>{user.displayName}</DropdownItem>
              <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </>
      ) : (
        <>
          <a href="/signup" className="navlink">
            <NavbarText className="text-white me-5">Signup</NavbarText>
          </a>
          <a href="/login">
            <Button className="login-button navlink text-black bg-white me-5">
              Login
            </Button>
          </a>
        </>
      )}
    </Navbar>
  );
}
