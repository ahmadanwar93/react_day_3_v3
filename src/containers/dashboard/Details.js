import React from 'react';
// import classes from './details.modules.css';
class Details extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: this.props.location.state
        }
        console.log(this.state.data.img);
    }
    render(){
        return(
            <div style={{width:"80vw", margin:'0 auto', marginTop:'20px'}}>
                <div>
                {/* <img src={this.state.data.img}/> */}
                {/* <img src = {this.state.data.img} alt=''/> */}
                    <h1  style={{marginBottom:'20px'}}>{this.state.data.name}</h1>
                    <h4  style={{marginBottom:'20px'}}>{this.state.data.short_description}</h4>
                    {/* <p>Long description goes here</p> */}
                    {/* <ul>
                        <li>{this.state.data.bullet_description[0]}</li>
                        <li>{this.state.data.bullet_description[1]}</li>
                        <li>{this.state.data.bullet_description[2]}</li>
                        <li>{this.state.data.bullet_description[3]}</li>
                    </ul> */}

                    {/* alternative way */}
                    <ul style={{marginBottom:'20px'}}>
                        {this.state.data.bullet_description.map((bullet)=>(
                            <li>{bullet}</li>
                        ))}
                    </ul>
                    <h5  style={{marginBottom:'20px'}}>{`RM ${this.state.data.cost}`}</h5>
                    <button  style={{marginBottom:'20px'}}>Buy now</button>
                </div>
            </div>
        )
    }
}

export default Details;
