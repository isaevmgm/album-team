import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadAlbums} from "../redux/actions";
import Photos from "./Photos";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums())
  }, []);

  return (
    <div>
      <Photos />
    </div>
  );
}

export default App;
