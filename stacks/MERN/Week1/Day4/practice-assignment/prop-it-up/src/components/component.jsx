
import React, { Component } from 'react'
import classes from './component.css'
class PersonCard extends Component {

    render() {
        return (
            <div class='comp'>
            <h1>
              {this.props.firstName},{this.props.lastName}
              </h1>
              <p> Age : {this.props.age}</p>
              <p> Hair Color : {this.props.hairColor}</p>
            </div>  
        )
    }
}

export default PersonCard ;   