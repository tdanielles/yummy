import { useEffect, useState } from "react";
import "../styles/Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare, faUser } from "@fortawesome/free-solid-svg-icons";

function Info(props) {
    const { id } = props;
    const [info, setInfo] = useState({});
    const [time, setTime] = useState(0);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            console.log({id});
            const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            const json = await response.json();
            setInfo(json.recipe);
            setTime(Math.ceil(json.recipe.ingredients.length / 3)*15);
            setIngredients(json.recipe.ingredients);
        }
        fetchData();
    }, [])

    return (
        <div className="info">
            <img className="food-img" src={info.image_url} alt="image"/>
            <div className="recipe-title">
                <h1>{info.title}</h1>
            </div>

            <div className="desc">
                <div className="desc-right">
                    <div className="desc-sub">
                        <div className="icon"><FontAwesomeIcon icon={faClock} /></div>
                        <p>{time} minutes</p>
                    </div>
                    <div className="desc-sub">
                        <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
                        <p>1 serving</p>
                    </div>
                </div>
                <div className="desc-sub">
                    <div className="icon end like"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
            </div>
            
            <div className="ing-container">
                <p className="ing-title">Ingredients</p>
                <ul className="ing-list">
                    {ingredients.map((element) => (
                        <li className="ing-each"><FontAwesomeIcon className="icon" icon={faCircleCheck} />{element}</li>
                    ))}
                </ul>
            </div>

            <div className="directions">
                <a href={info.source_url} target="_blank">
                    <button className="dir-btn">
                        Directions &nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                </a>
            </div>

        </div>
    )
}

export default Info;