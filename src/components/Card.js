import "../styles/Card.css";



function Card(props) {
    const { id, title, imgUrl, getInfoStatus, getId} = props;

    const handleClick = (e) => {
        e.preventDefault();
        getInfoStatus(true);
        getId(id);
    }

    return (
        <div>
            <div className="card" onClick={handleClick}>
                <img className="main-item" width="100%" src={imgUrl} alt="image"/>
                <p className="centered">{title}</p>
            </div>
        </div>
            
    )
}

export default Card;