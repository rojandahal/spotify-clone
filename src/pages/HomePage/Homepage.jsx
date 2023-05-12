import { useRecoilValue } from "recoil";
import BrowseSong from "../../components/BrowseSong/BrowseSong";
import { userDetailAtom } from "../../recoil/atoms/loginAtom";

function Homepage() {
  const userDetail = useRecoilValue(userDetailAtom);
  console.log(userDetail);
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
      {/* {console.log(auth.currentUser)} */}
      <BrowseSong category="Popular" />
      <BrowseSong category="Focus" />
    </div>
  );
}

export default Homepage;
