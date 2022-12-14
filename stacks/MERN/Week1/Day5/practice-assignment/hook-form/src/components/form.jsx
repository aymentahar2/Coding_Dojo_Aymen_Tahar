import React, { useState } from 'react';


const Forms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

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
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div>
            <label>Last Name: </label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
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
};

export default Forms;