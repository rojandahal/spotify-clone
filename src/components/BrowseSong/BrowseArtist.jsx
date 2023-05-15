import { Col, Container, Row } from "reactstrap";
import { useRecoilValue } from "recoil";
import { userDetailAtom } from "../../recoil/atoms/loginAtom";
import ArtistLongCard from "../Cards/ArtistLongCard";
import data from "../../assets/json/data.json";
import s from "lodash";

export default function BrowseArtist() {
  const user = useRecoilValue(userDetailAtom);
  const shuffledAlbums = s.shuffle(data.albums).slice(0, 6);
  return (
    <Container fluid>
      {user === null ? (
        <></>
      ) : (
        <>
          <Row>
            <Col className="col-1">
              <h2 style={{ fontFamily: "Roboto" }}>Hello</h2>
            </Col>
            <Col className="col-4 d-flex align-items-center pt-2">
              <p> {user.displayName}</p>
            </Col>
          </Row>
          <Row>
            {shuffledAlbums.map((item, index) => {
              return (
                <Col key={index} className="col-4">
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
