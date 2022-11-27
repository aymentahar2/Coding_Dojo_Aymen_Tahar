import React, { Component } from 'react';
import classes from './newcomp.css';

class PersonComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.firstName,
            lastName:   this.props.lastName,
            age : this.props.age,
            hairColor : this.props.hairColor
        }
    }
    // state = 
    //     { firstName :"Jane", 
    //     lastName:"Doe",
    //      age :45, 
    //      hairColor:"Black",
    //     }
     
    incr = () => {
        // console.log ("hairColor")
                this.setState({
                age : this.state.age + 1
            }
        ) 

    }


    render(){
        return(
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{this.state.lastName}, {this.state.firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.state.hairColor}</p>
                    <hr />
                    <button onClick={() => { this.incr() }}>click me</button><br />
                    <hr />
                </div>
            </div>
        );

    }
}

export default PersonComponent;