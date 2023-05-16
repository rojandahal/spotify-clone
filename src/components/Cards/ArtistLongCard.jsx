import { BsPlayCircleFill } from "react-icons/bs";
import { Card, Col, Row } from "reactstrap";

export default function ArtistLongCard({ imageUrl, artist }) {
  return (
    <Card
      className="songcard w-auto my-2 shadow"
      style={{
        height: "7rem",
        backgroundColor: "#272729",
      }}
    >
      <Row>
        <Col lg={3} sm={3} md={4} xs={4}>
          <img
            className="card-image-long position-relative shadow-lg"
            alt="image"
            src={imageUrl}
          />
        </Col>
        <Col
          className="d-flex align-items-center"
          style={{ fontFamily: "Roboto" }}
          lg={4}
          sm={6}
          md={4}
          xs={4}
        >
          {artist}
        </Col>
        <Col lg={2} sm={3} md={3} xs={4}>
          <div className="play-icon-long position-absolute">
            <BsPlayCircleFill fill="#1ED760" />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
