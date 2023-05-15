import { AiFillHeart } from "react-icons/ai";
import { Col, Row } from "reactstrap";
import "./songlist.css";

export default function SongList({ image, name, artist, duration }) {
  return (
    <Row className="songs-name">
      <Col className="col-12 mt-2">
        <Row>
          <Col xs={1}>
            <img src={image} alt="image" className="image-fluid w-100 h-75" />
          </Col>
          <Col xs={5} className="song-artist">
            <Row>{name} </Row>
            <Row>{artist}</Row>
          </Col>
          <Col className="d-flex align-items-center justify-content-end" xs={2}>
            <AiFillHeart className="song-like-logo" />
          </Col>
          <Col className="d-flex align-items-center" xs={3}>
            {duration}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
