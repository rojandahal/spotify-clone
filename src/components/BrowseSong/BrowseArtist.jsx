import { Col, Container, Row } from "reactstrap";
import { useRecoilValue } from "recoil";
import { userDetailAtom } from "../../recoil/atoms/loginAtom";
import ArtistLongCard from "../Cards/ArtistLongCard";
import data from "../../assets/json/data.json";
import shuffle from "lodash.shuffle";

export default function BrowseArtist() {
  const user = useRecoilValue(userDetailAtom);
  const shuffledAlbums = shuffle(data.albums).slice(0, 6);
  return (
    <Container fluid>
      {user === null ? (
        <></>
      ) : (
        <>
          <Row>
            <Col xs={3} lg={1} className="d-flex align-items-center ">
              <h2 style={{ fontFamily: "Roboto" }}>Hello </h2>
              <span className="ms-2"> {user.displayName}</span>
            </Col>
          </Row>
          <Row>
            {shuffledAlbums.map((item, index) => {
              return (
                <Col key={index} lg={4} sm={12} md={6} xs={12}>
                  <ArtistLongCard
                    imageUrl={item.image_url}
                    artist={item.artist}
                  />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
}
