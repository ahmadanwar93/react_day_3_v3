import React from "react";
import classes from "./login.module.css";
// import Header from "../../components/header";
import {Link} from 'react-router-dom';

class Login extends React.Component{
    render(){
        return(
            <div className={classes.maincontainer}>
                {/* <Header /> */}
                <h1>Login</h1>
                <input type='text' placeholder='email'></input>
                <input type='text' placeholder='password'></input>
                <button>
                    <Link to="/dashboard">login </Link>
                </button>
            </div>
        )
    }
}

export default Login;