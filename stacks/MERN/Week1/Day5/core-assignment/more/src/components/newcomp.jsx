import React, { useState } from 'react';


const Forms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    } ;

    const handleLastName = (e) => {
            setLastName(e.target.value);
            if(e.target.value.length <2) {
                setLastNameError("Last Name must be 2 characters or longer!");
            } else {
                setLastNameError("");
            }
    } ; 

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    } ;

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else if(password !== confirmpassword) {
            setPasswordError("password must match");
        } else {
            setPasswordError("");
        }
    } ;


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password,confirmpassword };
        console.log("Welcome", newUser);
        setFirstName ('')
        setLastName ('')
        setEmail("")
        setPassword("")
        setConfirmPassword ("")
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={handleFirstName } />
                    <p style={{color:'red'}}>{ firstNameError }</p> 
            </div>
            <div>
            <label>Last Name: </label>
            <input type="text" onChange={handleLastName} />
            <p style={{color:'red'}}>{ lastNameError }</p> 
        </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} />
                <p style={{color:'red'}}>{ emailError }</p> 
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={handlePassword} />
                <p style={{color:'red'}}>{ passwordError}</p> 
            </div>
            <div>
            <label>Password: </label>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword} />
            <p>Your Form Data</p>
            <p> First Name :{firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Email : {email}</p>
            <p> Password : {password}</p>
            <p>Confirm Password : {confirmpassword}</p>
        </div>
            <input type="submit" value="Create User" />
        </form>
    );
} ;

export default Forms ; 