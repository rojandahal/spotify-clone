import { CardImg, CardTitle, Col } from "reactstrap";
import Profile from "../../assets/profile.png";

export default function ArtistCard() {
  return (
    <Col
      md="3"
      className="d-flex flex-column align-items-center gy-4 gx-4"
      xs="auto"
    >
      <CardImg style={{ width: "20%" }} alt="Card image cap" src={Profile} />
      <CardTitle>Artist Name</CardTitle>
    </Col>
  );
}
