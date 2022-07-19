import "../styles/Card.css";

const Card = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card-avatar-img">
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