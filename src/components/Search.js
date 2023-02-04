import React from "react";
import search from "../images/search.png";
import "../styles/Search.css"

function Search() {
    return (
        <form action="/" method="get">
            <input
                className="search-bar"
                type="text"
                id="searchBar"
                placeholder="What are you craving for?"
            />
            <button type="submit">
                <img className="icon" src={search} alt="search" />
            </button>
        </form>
    )
}

export default Search;