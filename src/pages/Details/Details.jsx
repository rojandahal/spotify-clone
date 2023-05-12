import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { dataSelector } from "../../recoil/atoms/dataSelector";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { songAtom } from "../../recoil/atoms/loginAtom";
import { useEffect } from "react";
import data from "../../assets/json/data.json";
import "./details.css";
import SongsTable from "./SongsTable";

export default function Details() {
  const { id } = useParams();
  const { song } = useRecoilValue(dataSelector);
  const setSongAtom = useSetRecoilState(songAtom);

  useEffect(() => {
    if (song === null) {
      setSongAtom({ id: id });
    }
  }, [song, setSongAtom, id]);

  return (
    <>
      {song !== null ? (
        <Container fluid>
          <Row>
            <Col className=" col-3 d-flex justify-content-center">
              <img
                className="w-100"
                src={song.images[0].url}
                alt="album cover"
              />
            </Col>
            <Col className=" col-9">
              <p style={{ fontFamily: "Montserrat" }}>{song.category}</p>
              <h1>{song.name}</h1>
              <p className="mt-5" style={{ fontFamily: "Montserrat" }}>
                Artist: {song.artists.map((artist) => artist.name).join(", ")}
              </p>
              <p style={{ fontFamily: "Montserrat" }}>
                Album : {song.album_type}
              </p>
              <p style={{ fontFamily: "Montserrat" }}>
                Release Date: {song.release_date}
              </p>
            </Col>
          </Row>
          <Row className="mt-2">
            <SongsTable songsData={data} release_date={song.release_date} />
          </Row>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
