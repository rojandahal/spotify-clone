import { auth } from "../../Firebase/firebase";
import BrowseSong from "../../components/BrowseSong/BrowseSong";
function Homepage() {
  return (
    <div>
      {/* <Container>
        <Row xs="auto" md="2">
          {[...Array(10)].map((x, i) => (
            <ArtistCard key={i} />
          ))}
        </Row>
      </Container>
      <SongCard
        songTitle="Logic Homicide"
        description="Logic, Eminem sang the song"
      /> */}
      {console.log(auth.currentUser)}
      <BrowseSong category="Popular" />
      <BrowseSong category="Focus" />
    </div>
  );
}

export default Homepage;
