import "../styles/Card.css";
import avatar from "../img/avatar.jpg";

const Card = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card-avatar">
                <div className="card-avatar-img">
                    <img src={avatar} alt="" height="160px" width="auto"/>
                </div>
                <div className={"card-able card-able-" + props.able}>
                    {props.able ? "действующий" : "недействующий"}
                </div>
            </div>
            <div className="card-info">
                <span className="card-info-header">{props.title}</span>
                <p>{props.text}</p>
            </div>
            <div className="card-button">
                <div className="card-button-inside">
                    {props.standards} стандартов <a href={props.link}>Перейти</a>
                </div>
            </div>
        </div>
    )
}

export default Card;