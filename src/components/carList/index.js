import React from 'react';
import classes from './carList.module.css';


import {Link} from "react-router-dom";
// import Dashboard from '../../containers/dashboard';

class carList extends React.Component{
    
    render(){
        return(
            <div className= {classes.carListContainer}>
                {/* <div className= {classes.icon}></div> */}
                <img src = {this.props.image} alt=''/>
                <div className = {classes.carListDalam}>
                    <p>{this.props.link}</p>
                    <p>{this.props.name}</p>
                                    
                    <p>{this.props.short_description}</p>
                    <ul>
                        <li>{this.props.bullet_description[0]}</li>
                        <li>{this.props.bullet_description[1]}</li>
                        <li>{this.props.bullet_description[2]}</li>
                        <li>{this.props.bullet_description[3]}</li>
                    </ul>

                    <button>
                    {/* <Link to={`/dashboard/${this.props.link}`}>
                        {this.props.cost}
                    </Link> */}

                    <Link  style={{textDecoration:'none'}} to={{
                        pathname: `/dashboard/${this.props.link}`,
                        state: this.props.carData,
                    }}>
                        {this.props.cost}
                    </Link>
                    </button>
                </div>
            </div>
            // <div className= {classes.carListContainer}>
            //     <p>1</p>
            //     <p>namam</p>
            //     <p>namam</p>
                
                
            // </div>
        )
    }
}

export default carList;