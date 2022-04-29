import axios from 'axios'
import React, { Component, useState } from 'react'

export class UserProfile extends Component {
    
    // localStorage.getItem('username')
    
    constructor(props) {
        super(props);


        this.state = {
            consultData: []

        }
    }
    
    componentDidMount(){
        var _this = this;
        
       
        const config = {
           Headers :{
               Authorization : 'Bearer '+ localStorage.getItem('response')
           }
        };
        
        axios.get("http://localhost:8082/dashboard",config).then(
            res => {
                _this.setState({
                    consultData: res.data
                  });
                

                console.log(res);
             
            },
            err =>{
                console.log(err);
            }
        )
    }
    render() {

        var storage = localStorage.getItem('username');
        // localStorage.removeItem('username');

      
        return (
            <div>
                <h2>Hi {storage}</h2>
                
            </div>
        )
    }
}

export default UserProfile
