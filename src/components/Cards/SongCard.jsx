import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./songcard.css";
import { BsPlayCircleFill } from "react-icons/bs";

function SongCard({ song, description, image, clickHandler }) {
  return (
    <>
      <Card
        className="songcard"
        style={{
          width: "12rem",
          height: "18rem",
          backgroundColor: "#272727",
        }}
        onClick={clickHandler.bind(this, song)}
      >
        <img className="card-image position-relative" alt="image" src={image} />
        <div className="play-icon position-absolute">
          <BsPlayCircleFill fill="#1ED760" />
        </div>
        <CardBody>
          <CardTitle className="card-title" tag="h5">
            {song.name}
          </CardTitle>
          <CardText className="card-text text-truncate">{description}</CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default SongCard;
