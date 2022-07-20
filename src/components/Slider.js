import "../styles/Slider.css"
import {useState} from "react";

const Slider = (props) => {
    const [picIndex, setPicIndex] = useState(0);

    const clickHandler = (event) => {
        setPicIndex(prevState => event.target.value === "left" ? prevState - 1 : prevState + 1);
        console.log(props.images);
    }

    return (
        <div className="card-avatar-img">
            <button className={props.images.length > 1 ? "button-visible" : ""} value="left" onClick={clickHandler}>⬅️
            </button>
            <img src={props.images.at(picIndex % props.images.length)} alt=""/>
            <button className={props.images.length > 1 ? "button-visible" : ""} value="right"
                    onClick={clickHandler}>➡️
            </button>
        </div>
    );
}

export default Slider;