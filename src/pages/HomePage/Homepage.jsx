import BrowseArtist from "../../components/BrowseSong/BrowseArtist";
import BrowseSong from "../../components/BrowseSong/BrowseSong";
import { data } from "../../assets/json/data";
function Homepage() {
  return (
    <>
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
      {/* {console.log(auth.currentUser)} */}
      <BrowseArtist />
      <BrowseSong data={data.items} category="Popular" />
      <BrowseSong data={data.items} category="Focus" />
    </>
  );
}

export default Homepage;
