import { FaHome } from "react-icons/fa";
import ArtistCard from "../../components/Cards/ArtistCard";
import { Container, Row } from "reactstrap";

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
    </div>
  );
}

export default Homepage;
