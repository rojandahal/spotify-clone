import { Col, Container, Row } from "reactstrap";
import SongCard from "../Cards/SongCard";
import { data } from "../../assets/json/data";

export default function BrowseSong({ category }) {
  return (
    <Container>
      <Row className="">
        <Col xs="auto" className=" fs-4">
          {category}
        </Col>
        <Col className="d-flex justify-content-end align-items-center fs-5 text-decoration-underline">
          See All
        </Col>
      </Row>

      <Row
        noGutters
        className="flex-wnorap"
        style={{
          overflow: "auto",
          flexWrap: "nowrap",
          scrollbarWidth: "none",
          cursor: "grab",
          maxWidth: "100vw",
          userSelect: "none",
        }}
      >
        {data.items.map((item, index) => {
          console.log(item.images[1].url);
          return (
            <Col
              key={index}
              xs="10"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              className=" my-2 d-flex justify-content-center"
            >
              <SongCard
                songTitle={item.name}
                description={item.artists.map((artist) => artist.name)}
                image={item.images[1].url}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
