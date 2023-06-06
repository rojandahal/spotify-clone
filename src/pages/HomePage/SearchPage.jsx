import BrowseSong from "../../components/BrowseSong/BrowseSong";
import data from "../../assets/json/data.json";
import { useRecoilValue } from "recoil";
import { searchAtom } from "../../recoil/atoms/loginAtom";
import SearchHeader from "../../components/SearchSong/SearchHeader";
import shuffle from "lodash.shuffle";
import songData from "../../assets/json/data.json";

export default function SearchPage() {
  const search = useRecoilValue(searchAtom);
  const shuffleSongs = shuffle(songData.albums).slice(0, 4);

  console.log(search);
  return (
    <>
      {search !== null ? <SearchHeader songData={shuffleSongs} /> : <></>}
      <BrowseSong data={data.songs} category={"Browse All"} searchPage={true} />
    </>
  );
}
