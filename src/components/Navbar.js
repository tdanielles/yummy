import Search from "./Search";
import Logo from "./Logo";
import "../styles/Navbar.css";

function Navbar(props) {
    const { getQuery } = props;

    return (
        <div className="navbar">
            <Logo/>
            <Search getQuery={getQuery}/>
        </div>
    )
}

export default Navbar;