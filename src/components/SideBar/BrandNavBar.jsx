import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../assets/spotify.png";

export default function BrandNavBar() {
  return (
    <Navbar color="black" className="ps-5" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src={Logo}
          style={{
            height: 40,
            width: 40,
          }}
        />
        Spotify
      </NavbarBrand>
    </Navbar>
  );
}
