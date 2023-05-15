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
        <Col className="col-3">
          <img
            className="card-image-long position-relative shadow-lg"
            alt="image"
            src={imageUrl}
          />
        </Col>
        <Col
          className="col-6 d-flex align-items-center"
          style={{ fontFamily: "Roboto" }}
        >
          {artist}
        </Col>
        <Col className="col-2">
          <div className="play-icon-long position-absolute">
            <BsPlayCircleFill fill="#1ED760" />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
