import React from "react";
 import"./Home.css"
 import {Link} from 'react-router-dom';

const Home=()=> {
    return(
        <div className="Home">
            <h1> Student Login and Registration Form Portal </h1>
            <div className="button"><Link to="Login"> Login</Link> </div>
            <div className="button"> <Link to="Register">Register</Link> </div>
            <div className="button"> Logout </div>

        </div>

    )
}
export default Home
