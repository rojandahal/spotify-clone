import { Col, Navbar, Progress } from "reactstrap";
import {
  AiOutlineHeart,
  AiFillStepBackward,
  AiFillStepForward,
  AiFillPlayCircle,
  AiOutlineRedo,
} from "react-icons/ai";
import { MdOutlinePictureInPictureAlt } from "react-icons/md";
import { BsShuffle, BsList } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { MdOutlineComputer } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import "./playCard.css";
import { useRecoilValue } from "recoil";
import { playAtom } from "../../recoil/atoms/loginAtom";
function PlaySongsBar() {
  const getPlay = useRecoilValue(playAtom);
  console.log(getPlay);

  return getPlay ? (
    <Navbar
      className="bg-black playsong d-flex justify-content-between playy rounded-3"
      sticky="bottom"
    >
      <Col className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={getPlay.image}
            className="img-fluid rounded-3"
            style={{ width: "50px" }}
          />
          <div className="ms-3 ">
            <h6 className="text-white m-0 fs-6">{getPlay.name}</h6>
            <p className="text-secondary fs-6 mb-1 icon">{getPlay.artist}</p>
          </div>
          <div className="d-flex ms-4 gap-3 align-items-center">
            <AiOutlineHeart size={20} className="icon" />
            <MdOutlinePictureInPictureAlt size={20} className="icon" />
          </div>
        </div>
      </Col>
      <Col className="d-flex flex-column align-items-center justify-content-between gap-1 ">
        <div className="d-flex align-items-center gap-3 ">
          <BsShuffle size={23} className="icon" color="green" />
          <AiFillStepBackward size={25} className="icon" />
          <AiFillPlayCircle size={40} className="text-white play" />
          <AiFillStepForward size={25} className="icon" />
          <AiOutlineRedo size={25} className="icon" />
        </div>
        <div className="d-flex gap-2 align-items-center">
          <p className="text-white m-0 para">0:00</p>
          <Progress color="success" className="progress prog bg-secondary " />
          <p className="text-white m-0 para">{getPlay.duration}</p>
        </div>
      </Col>
      <Col className="d-flex ">
        <div className="d-flex ms-auto me-2 align-items-center gap-2">
          <TbMicrophone2 size={20} className="icon" />
          <BsList size={20} className="icon" />
          <MdOutlineComputer size={20} className="icon" />
          <GiSpeaker size={20} className="icon" />
          <Progress color="success" className=" progs " />
        </div>
      </Col>
    </Navbar>
  ) : (
    <> </>
  );
}
export default PlaySongsBar;
