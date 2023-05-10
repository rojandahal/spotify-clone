import { FaHome } from "react-icons/fa";
import SongCard from "../../components/Cards/SongCard";

function Homepage() {
  return (
    <div>
      Homepage <FaHome />
      <SongCard
        songTitle="Logic Homicide"
        description="Logic, Eminem sang the song"
      />
    </div>
  );
}

export default Homepage;
