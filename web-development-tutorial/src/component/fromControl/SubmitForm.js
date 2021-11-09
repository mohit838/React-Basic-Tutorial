import React, { useState } from 'react'
// import './style.css';

//Another way to create style
import style from './style.css';

export default function SubmitForm() {


    //Another way to use {Dis-Structure}
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleNameChange = (e) => {
        // console.log(e.target.value);
        // Another way
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        // console.log(e.target.value);
        // Another way
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        // console.log(e.target.value);
        // Another way
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log('Form Is Submitted.');
        let userInfo = {
            Name: name,
            Email: email,
            password: password
        }
        //For ES6 This is more efficient when Left and Right side are same name
        // let userInfo = {
        //     name: name, then use only name,
        //     email: email, then use only email,
        //     password: password then use only password
        // }
        console.log(userInfo);

        //Another way to print results
        // console.log(name, email, password);
        e.preventDefault();
    }


    return (
        <div>
            <h1>Registration</h1>
            <div style={style.formGroup}>
            {/* Another way to use style */}
                <form action="" onSubmit={handleSubmit}>
                    <div className="formDesign">
                        <label htmlFor="name">Name:  </label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name}
                        placeholder="Enter Name" 
                        onChange={handleNameChange} 
                        required></input>
                    </div>

                    <div className="formDesign">
                        <label htmlFor="name">Email:  </label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        placeholder="Enter Email" 
                        onChange={handleEmailChange} 
                        required></input>
                    </div>

                    <div className="formDesign">
                        <label htmlFor="name">Password: </label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        placeholder="Enter Password" 
                        onChange={handlePasswordChange} 
                        required></input>
                    </div>

                    <div className="formDesign">
                        <button type="submit">Registration</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
