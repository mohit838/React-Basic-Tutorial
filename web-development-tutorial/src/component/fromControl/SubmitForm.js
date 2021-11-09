import React from 'react'
import './style.css';

export default function SubmitForm() {
    return (
        <div>
            <h1>Registration</h1>
            <div className="form-control">
                <from action="">
                    <div className="form-design">
                        <label htmlFor="name">Name:  </label>
                        <input type="text" name="name" id="name" placeholder="Enter Name" required></input>
                    </div>
                    <div className="form-design">
                        <label htmlFor="name">Email:  </label>
                        <input type="text" name="email" id="email" placeholder="Enter Email" required></input>
                    </div>
                    <div className="form-design">
                        <label htmlFor="name">Password: </label>
                        <input type="text" name="password" id="password" placeholder="Enter Password" required></input>
                    </div>
                </from>
            </div>

        </div>
    )
}
