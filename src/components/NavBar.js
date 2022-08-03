import {NavLink} from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <NavLink to="/">Home  |  </NavLink>
            <NavLink to="/howToPlay">How To Play  |  </NavLink>
            <NavLink to="/play">Play   |</NavLink>
        </nav>
    );
}

export default NavBar;