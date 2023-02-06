import "../styles/Card.css";
function Card(props) {
    const { id, title, imgUrl } = props;

    return (
            <div className="card">
                <img className="main-item" width="100%" src={imgUrl} alt="image"/>
                <p className="centered">{title}</p>
            </div>
    )
}

export default Card;