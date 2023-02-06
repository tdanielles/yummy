import search from "../images/search.png";
import "../styles/Search.css"
import { useState } from "react";

function Search(props) {
    const { getQuery } = props;
    
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getQuery(query);
    }

    return (
        <form action="/" method="get" onSubmit={handleSubmit}>
            <input
                className="search-bar"
                type="text"
                id="searchBar"
                placeholder="What are you craving for?"
                onChange={e => setQuery(e.target.value)}
            />
            <button type="submit">
                <img className="icon" src={search} alt="search" />
            </button>
        </form>
    )
}

export default Search;