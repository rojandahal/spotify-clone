import { BsPlayCircleFill } from "react-icons/bs";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

export default function SearchHero() {
  return (
    <Card
      className="songcard shadow-sm"
      style={{
        width: "100%",
        backgroundColor: "#272727",
      }}
    >
      <div className="play-icon position-absolute">
        <BsPlayCircleFill fill="#1ED760" />
      </div>
      <CardBody>
        <img
          src="https://i.scdn.co/image/ab67616100005174895bf4b74a8c1ac20f8ac969"
          className="image-fluid rounded-circle w-25 h-50 ms-3"
          alt="album cover"
        />
        <CardTitle className="card-title mt-2 ms-3" tag="h2">
          Bartika Eam Rai
        </CardTitle>
        <Button className="rounded-5 ms-3 p-1 bg-dark border-0 w-25">
          Artist
        </Button>
      </CardBody>
    </Card>
  );
}
