import "../styles/Main.css";
import Carousel from "react-grid-carousel";
import { useState, useEffect } from "react";
import Card from "./Card";

function Main(props) {
    const { query, getInfoStatus, getId } = props;

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
                                       {breakpoint: 990, cols: 2, rows: 2},
                                       {breakpoint: 670, cols: 1, rows: 2}]}
                    mobileBreakpoint={0}
                    showDots
                >
                    {results.map((element) => (
                        <Carousel.Item key={element.recipe_id}>
                            <Card id={element.recipe_id} title={element.title} imgUrl={element.image_url} getInfoStatus={getInfoStatus} getId={getId}/>
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