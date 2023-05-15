import { Col, Container, NavbarText, Row } from "reactstrap";
import SongCard from "../Cards/SongCard";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { songAtom } from "../../recoil/atoms/loginAtom";
import { useNavigate } from "react-router-dom";

export default function BrowseSong({ data, category, searchPage }) {
  const [wrapState, setWrapState] = useState("flex-nowrap");
  const setSong = useSetRecoilState(songAtom);
  const navigate = useNavigate();

  const handleWrapChange = () => {
    wrapState === "flex-nowrap"
      ? setWrapState("flex-wrap")
      : setWrapState("flex-nowrap");
  };

  const songClickHandler = (songData) => {
    if (!searchPage) {
      let song = { ...songData, category: category };
      setSong(song);
      navigate(`/song/${song.id}`);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs="auto" className=" fs-4">
          {category}
        </Col>
        <Col className="d-flex justify-content-end align-items-center fs-5 text-decoration-underline">
          {searchPage ? (
            <></>
          ) : (
            <NavbarText
              style={{ cursor: "pointer" }}
              onClick={handleWrapChange}
            >
              See All
            </NavbarText>
          )}
        </Col>
      </Row>

      <Row
        className={searchPage ? "wrap" : wrapState}
        style={{
          overflow: "auto",
          scrollbarWidth: "none",
          cursor: "grab",
          maxWidth: "100vw",
          userSelect: "none",
        }}
      >
        {data.map((item, index) => {
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
                song={item}
                description={
                  item.artist
                    ? item.artist
                    : item.artists.map((artist) => artist.name)
                }
                image={item.image_url ? item.image_url : item.images[1].url}
                clickHandler={songClickHandler}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
