import "../styles/Main.css";
import Carousel from "react-grid-carousel";
import { useState, useEffect } from "react";
import Card from "./Card";

function Main(props) {
    const { query } = props;

    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                console.log(query);
                const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
                const json = await response.json();
                setResults(json.recipes);
            } catch (error) {
                console.log("No recipe exists :<", error);
            }
        }
        fetchData();
        
    }, [query]);

    try {
        return (
            <div className="main">
                <Carousel 
                    cols={4} rows={2} gap={20} 
                    responsiveLayout={[{breakpoint: 1200, cols: 3, rows: 2}, 
                                       {breakpoint: 990, cols: 2, rows: 2}]}
                    mobileBreakpoint = {670}
                    showDots
                >
                    {results.map((element, i) => (
                        <Carousel.Item key={element.recipe_id}>
                            <Card id={element.recipe_id} title={element.title} imgUrl={element.image_url}/>
                            {/*<img className="main-item" width="100%" src={element.image_url} alt="image"/>*/}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    } catch (e) {
        return (
            <div className="main">
                <p className="error">No results found. List of possible queries <a href="https://forkify-api.herokuapp.com/phrases.html" target="_blank">here</a>.</p>
            </div>
        )
    }
    
}

export default Main;