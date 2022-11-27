import React  from 'react';
import classes from './person.css';


const Test = (props) => {
     return (
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{props.persons.lastName}, {props.persons.firstName}</h1>
                    <p>Age: {props.persons.age}</p>
                    <p>Hair Color: {props.persons.hairColor}</p>
                </div>
            </div>
        );
    } 


export default Test;