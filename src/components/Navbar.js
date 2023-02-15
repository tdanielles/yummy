import { auth } from "../firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import Search from "./Search";
import Logo from "./Logo";
import "../styles/Navbar.css";
import { faGithub, faGratipay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
    const { getQuery, liked, getInfoStatus, getId, loggedIn, toggleLog, getFromFireStore, getFromLocalStorage } = props;

    const signIn = async(e) => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toggleLog(true);
        } catch (e) {
            console.log("Sign in pop up error");
        }
        await getFromFireStore();
        console.log(liked);
    }

    const signOutUser = (e) => {
        signOut(auth);
        toggleLog(false);
        getFromLocalStorage();
    }

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
            <div className="buttons">
                <div className="dropdown">
                    <FontAwesomeIcon className="icon" icon={faGratipay}/>
                    <button className="like-btn liked">Liked recipes</button>
                    <div className="dropdown-content">
                        {liked.map(({id, title}) => (
                            <p onClick={handleClick}>{title}</p>
                        ))}
                    </div>
                </div>
                {!loggedIn && <div className="log-in">
                    <button onClick={signIn} className="log-btn">Log in</button>
                </div>}
                {loggedIn && <div className="log-out dropdown">
                    <button className="like-btn desktop">Hi, {auth.currentUser.displayName.split(' ')[0]}!</button>
                    <button className="log-btn mobile">Hi!</button>
                    <div className="dropdown-content">
                        <p onClick={signOutUser}>Log out</p>
                    </div>
                </div>}
            </div>
            
        </div>
    )
}

export default Navbar;