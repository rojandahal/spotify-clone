import { FaHome } from "react-icons/fa";
import { Container, Row } from "reactstrap";
import SongCard from "../../components/Cards/SongCard";
import ArtistCard from "../../components/Cards/ArtistCard";

function Homepage() {
  return (
    <div>
      Homepage <FaHome />
      <Container>
        <Row xs="auto" md="2">
          {[...Array(10)].map((x, i) => (
            <ArtistCard key={i} />
          ))}
        </Row>
      </Container>
      <SongCard
        songTitle="Logic Homicide"
        description="Logic, Eminem sang the song"
      />
    </div>
  );
}

export default Homepage;
