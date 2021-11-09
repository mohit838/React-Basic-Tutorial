import React, { Component } from 'react'
import './state.css'



export default class State extends Component {

    //'rconst' is the shortcut of constructor

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0,
        };
      };

    
    increment = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    decrement = () => {
        this.setState({
           count: this.state.count - 1,
        })
    }
      

    render() {

        const {count} = this.state;

        return (
            <div>
                <h1>State Practice</h1>
                <hr/>
                <h1>Count: {count}</h1>
                <button onClick={this.increment} className="btn"> + </button>
                <button onClick={this.decrement} className="btn" disabled={count === 0 ? true : false}> - </button>
            </div>
        )
    }
}
