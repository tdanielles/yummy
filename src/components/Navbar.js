import Search from "./Search";
import Logo from "./Logo";
import "../styles/Navbar.css";

function Navbar(props) {
    const { getQuery, liked, getInfoStatus, getId } = props;

    const handleClick = (e) => {
        getId(findIdByTitle(e.target.textContent));
        getInfoStatus(true);
    }

    const findIdByTitle = (title) => {
        let object = liked.find(object => object.title == title);
        return object.id;
    }

    return (
        <div className="navbar">
            <Logo/>
            <Search getQuery={getQuery}/>
            <div className="dropdown">
                <button className="like-btn">Liked recipes</button>
                <div className="dropdown-content">
                    {liked.map(({id, title}) => (
                        <p onClick={handleClick}>{title}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar;