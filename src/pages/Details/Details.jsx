import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { dataSelector } from "../../recoil/selectors/dataSelector";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { songAtom, userDetailAtom } from "../../recoil/atoms/loginAtom";
import { useEffect } from "react";
import data from "../../assets/json/data.json";
import "./details.css";
import SongsTable from "../../components/Table/SongsTable";
import { FaPlay } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiSpotifyFill } from "react-icons/ri";
import { firebaseStore } from "../../Firebase/firebase";
import { setDoc, doc, getDoc, increment, updateDoc } from "firebase/firestore";

export default function Details() {
  const { id } = useParams();
  const { song } = useRecoilValue(dataSelector);
  const setSongAtom = useSetRecoilState(songAtom);
  const user = useRecoilValue(userDetailAtom);

  const clickHandler = async (item) => {
    console.log("Clicked", item);
    let favorite = { items: [item.id], user: user.uid, i: increment(1) };
    const docRef = await getDoc(doc(firebaseStore, "user", user.uid));

    docRef.data() === undefined
      ? await setDoc(doc(firebaseStore, "user", user.uid), favorite)
      : console.log("Doc Exists");

    if (docRef.data().user === user.uid) {
      if (docRef.data().items.includes(item.id)) {
        console.log("Already in favorite");
        return;
      } else {
        let newArray = docRef.data().items;
        newArray.push(item.id);
        await updateDoc(doc(firebaseStore, "user", user.uid), {
          items: newArray,
          i: increment(1),
        });
        return;
      }
    }
  };

  useEffect(() => {
    if (song === null) {
      setSongAtom({ id: id });
    }
  }, [song, setSongAtom, id]);

  return (
    <>
      {song !== null ? (
        <Container fluid className="header-background">
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
              <p style={{ fontFamily: "Montserrat" }}>
                <RiSpotifyFill fill="#1ED760" fontSize={20} />
                Made only for{" "}
                <span className="fs-5" style={{ fontFamily: "Roboto" }}>
                  {user.displayName}
                </span>
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="col-1">
              <h3>
                <FaPlay fill="#1ED760" className="m-2" fontSize={50} />
              </h3>
            </Col>
            <Col className="col-1">
              <h3>
                <AiOutlineHeart className="m-2" fontSize={50} />
              </h3>
            </Col>
            <Col className="col-1">
              <h3>
                <BsThreeDots className="m-2" fontSize={50} />
              </h3>
            </Col>
          </Row>
          <Row>
            <SongsTable
              songsData={data.songs}
              release_date={song.release_date}
              favoriteHandler={clickHandler}
            />
          </Row>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
