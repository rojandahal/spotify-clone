import { Table } from "reactstrap";
import s from "lodash";
import PlaySongsBar from "../../components/BrowseSong/PlaySongs";
import { useSetRecoilState } from "recoil";
import { playAtom } from "../../recoil/atoms/loginAtom";

export default function SongsTable({ songsData, release_date }) {
  const data = s.shuffle(songsData.songs);
  const setPlay = useSetRecoilState(playAtom);

  const clickHandler = (name, image, artist, duration) => {
    console.log(name, image, artist, duration);
    setPlay({ name, image, artist, duration });
  };
  return (
    <Table className="text-white table-borderless">
      <thead className="border-bottom">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th></th>
          <th>Album</th>
          <th>Date Added</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr
              onClick={() => {
                clickHandler(
                  item.name,
                  item.image_url,
                  item.artist,
                  item.duration
                );
              }}
              key={index}
              className="table-row"
            >
              <th
                scope="row"
                className="table-index d-flex justify-content-center align-items-center"
              >
                {index + 1}
              </th>
              <td>
                <img
                  src={item.image_url}
                  style={{
                    width: "50px",
                  }}
                  alt="album cover"
                />
              </td>
              <td className="artist-name">
                {item.name} <br />
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "0.7rem",
                  }}
                >
                  {item.artist}
                </span>
              </td>
              <td>{item.album}</td>
              <td>{release_date}</td>
              <td>{item.duration}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
