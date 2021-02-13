import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadAlbums} from "../redux/actions";
<<<<<<< HEAD
=======
import Album from "./Album";
>>>>>>> 25811aecddae2269c6aaed519521355585a7da84

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums())
  }, []);

  return (
    <div>
<<<<<<< HEAD
=======
      <Album/>
>>>>>>> 25811aecddae2269c6aaed519521355585a7da84
    </div>
  );
}

export default App;
