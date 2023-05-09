import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./songcard.css";
import { BsPlayCircleFill } from "react-icons/bs";

function SongCard({ songTitle, description }) {
  return (
    <>
      <Card
        className="songcard"
        style={{
          width: "12rem",
          height: "18rem",
          backgroundColor: "#272727",
        }}
      >
        <img
          className="card-image position-relative"
          alt="image"
          src="https://picsum.photos/300/200"
        />
        <div className="play-icon position-absolute">
          <BsPlayCircleFill />
        </div>
        <CardBody>
          <CardTitle className="card-title" tag="h5">
            {songTitle}
          </CardTitle>
          <CardText className="card-text">{description}</CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default SongCard;
