import React from "react";
import classes from './component.module.css';
import {Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <header className={classes.header}>
                <Link to="/dashboard" style={{textDecoration:'none'}}><h3>Logo</h3></Link>                
            </header>
        )
    }
}

export default Header;