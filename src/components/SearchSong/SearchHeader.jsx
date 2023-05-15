import { Col, Container, Row } from "reactstrap";
import SearchHero from "./SearchHero";
import SongList from "./SongList";

export default function SearchHeader({ songData }) {
  return (
    <Container fluid>
      <Row>
        <Col xl={4} xs={6}>
          <h2>Top Result</h2>
          <SearchHero />
        </Col>
        <Col xl={7} xs={12}>
          <h2>Songs</h2>
          {songData.map((item, index) => {
            return (
              <SongList
                key={index}
                image={item.image_url}
                name={item.name}
                artist={item.artist}
                duration="5:30"
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
