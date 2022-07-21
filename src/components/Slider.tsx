import "../styles/Slider.css"
import {useReducer} from "react";

const Slider = (props) => {
    const reducer = (state: { picIndex: number }, action: { type: string }): { picIndex: number } => {
        switch (action.type) {
            case "left":
                return {picIndex: state.picIndex - 1};
            case "right":
                return {picIndex: state.picIndex + 1};
            default:
                return state;
        }
    }

    const initialState = {picIndex: 0};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="card-avatar-img">
            <button className={props.images.length > 1 ? "button-visible" : ""}
                    onClick={() => dispatch({type: "left"})}>
                ⬅️
            </button>
            <img src={props.images.at(state.picIndex % props.images.length)} alt=""/>
            <button className={props.images.length > 1 ? "button-visible" : ""}
                    onClick={() => dispatch({type: "right"})}>
                ➡️
            </button>
        </div>
    );
}

export default Slider;