import React from "react";
// import Header from "../../components/header";
import {products} from "../../productData"; 
import CarList from '../../components/carList';
import {Link } from 'react-router-dom';


class Dashboard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name:'',
        }        
    }

    submitSearch(){    
        // alert (this.state.name);
        // const searchResult = products.filter(word => word['name'].match(/Touareg/gi));
        // alert(searchResult['name']);

        // var string2 = this.state.name;
        // var regex = new RegExp( string2, 'g' );
        // var searchResult = 'abc';
        // console.log(this.state.name);

        // for (let i=0; i < products.length; i++){
            // if (products[i]['name'] == string2){
            //     console.log(products[i]);
            // }

            // if (products[i]['name'].includes(string2)){
            //     console.log()
            // }
        }

        // console.log(searchResult);
        // console.log(searchResult[0]['name']);
    // }

    render(){
        // console.log(products);
        return(
            <div>
            {/* <Header /> */}
            {/* <h1>This is dashboard</h1> */}
            <div style={{marginBottom:'20px', display:'flex', justifyContent:'center', marginTop:'20px'}}>
            <input style={{marginRight:'20px'}} id='name' type='text' placeholder="Search" onChange = {(nameVal) => {this.setState({name:nameVal.target.value})}}/>
                

                <Link to="/create"  style={{textDecoration:'none'}}>Create New Product </Link>
            </div>
            
            {/* bullet_description={list.bullet_description} */}

            {/* .filter((searchResult)=>{
                            if(this.state.name === ""){
                                return searchResult;
                            }else if (searchResult['name'].toLowerCase().includes(this.state.name)){
                                return searchResult;
                            }
                        }) */}

            <div style={{display:'flex', flexWrap:'wrap'}}>
                        {products.
                        filter((ele =>{
                            if(this.state.name ===""){
                                return ele;
                            }else if(ele["name"].includes(this.state.name)) {
                                return ele;
                            }
                        }))
                        .map(list => 
                        <CarList 
                        carData = {list}
                        link={list.id} name={list.name} short_description={list.short_description} bullet_description={list.bullet_description} image = {list.image} cost = {list.cost}

                        />)}
                
            </div>
            {/* <CarList /> */}
            
            </div>
        )
    }
}

export default Dashboard;