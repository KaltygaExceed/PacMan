import {useDispatch} from "react-redux";
import {gameStart} from "../../redux/actions/actions";
import style from "./initialPage.module.css"
import {NavLink} from "react-router-dom";

const InitialPage = () => {
    const dispatch = useDispatch()
    return (
        <div className={style.container}>
            <NavLink onClick={() => dispatch(gameStart())} to="/game" className={style.button}>
                {" "}
                START GAME
            </NavLink>
        </div>
    )
}
export default InitialPage