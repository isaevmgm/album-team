import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadAlbums} from "../redux/actions";
import Album from "./Album";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums())
  }, []);

  return (
    <div>
      <Album/>
    </div>
  );
}

export default App;
