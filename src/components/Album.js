import {useSelector} from "react-redux";
import Albums from "./Albums";

function Album() {
    const albums = useSelector(state => state.albums.items)
    console.log(albums)
    return (
        <div>
            <div className="albums">
                <ul>
                    {albums.map(alb => {
                        return (
                            <Albums alb={alb} key={alb.id}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Album