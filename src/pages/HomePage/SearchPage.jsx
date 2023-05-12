import BrowseSong from "../../components/BrowseSong/BrowseSong";
import data from "../../assets/json/data.json";

export default function SearchPage() {
  return (
    <BrowseSong data={data.songs} category={"Browse All"} searchPage={true} />
  );
}
