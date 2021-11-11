import React from "react";
import {products} from "../../productData";
// import classes from './createProduct.module.css';


class CreateProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            cost: 0,
        }
    }

    submitForm(){    
        // console.log(this.state.name);
        if (this.state.name === "" | this.state.id === "" | this.state.description === "" | this.state.cost === ""){
            alert("Please fill in all the input field");
        }else{
            var tryVar = products.find( ele => ele['id'] === this.state.id);
            if (tryVar === undefined){
                alert("the id is not taken");
                products.push(this.state);
            }else{
                alert("the id is taken. Please choose another one");
            }
        }
        // if ()
        // products.push(this.state);
        // console.log(this.state);
    }
    render(){
        return(
            <div style={{width:'20vw', margin:'0 auto'}}>
                <form action='#' style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'5px', marginTop: '20px'}}>
                    <label htmlFor='id'>ID</label>
                    <input id='id' type='text' placeholder="ID" onChange={(idval)=>{this.setState({id:idval.target.value})}}/>
                    </div>

                    <div  style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'5px'}}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' placeholder="Name" onChange = {(nameVal) => {this.setState({name:nameVal.target.value})}}/>
                    </div>

                    <div  style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'5px'}}>
                    <label htmlFor='description'>Description</label>
                    <input id='description' type='text' placeholder="Description"  onChange = {(descVal) => {this.setState({description:descVal.target.value})}}/>
                    </div>

                    <div  style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'5px'}}>
                    <label htmlFor='cost'>Cost</label>
                    <input id='cost' type='text' placeholder="Cost"  onChange = {(costVal) => {this.setState({cost:costVal.target.value})}}/>
                    </div>

                    <button onClick = {() => {this.submitForm()}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateProduct;