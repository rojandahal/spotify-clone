import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userDetailAtom } from "../recoil/atoms/loginAtom";
import { firebaseStore } from "../Firebase/firebase";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import SongsTable from "../components/Table/SongsTable";
import data from "../assets/json/data.json";

export default function LikedSongs() {
  const user = useRecoilValue(userDetailAtom);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    getLikedSongs();
  }, []);

  const clickHandler = async (item) => {
    let itemArray = [];
    favList.map((song) => {
      if (song.id === item.id) {
        favList.splice(favList.indexOf(song), 1);
      }
      itemArray.push(song.id);
    });
    setFavList([...favList]);
    await updateDoc(doc(firebaseStore, "user", user.uid), {
      items: itemArray,
      i: increment(-1),
    });
  };

  const getLikedSongs = async () => {
    setFavList([]);
    const docRef = await getDoc(doc(firebaseStore, "user", user.uid));
    console.log(docRef.data());
    console.log("Get Songs")
    if (docRef.data().user === user.uid) {
      data.songs.map((item) => {
        if (docRef.data().items.includes(item.id)) {
          setFavList((prevList) => [...prevList, item]);
        }
      });
      //   console.log(favList);
    } else {
      console.log("No data");
    }
  };

  return (
    <>
      {user === null ? (
        <h1>Please Login to view your favorite songs</h1>
      ) : favList.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h1>Favorite List</h1>
          <SongsTable
            songsData={favList}
            release_date={"2019/01/01"}
            favoriteHandler={clickHandler}
            favTable="true"
          />
        </>
      )}
    </>
  );
}
