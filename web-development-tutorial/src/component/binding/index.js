import React, { Component } from 'react'

class Binding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      };

      //This is for non ES6 versions
      //Popular in using constructor
      this.handleClick = this.handleClick.bind(this);
    };

    // handleClick = () => {

    //     this.setState({
    //         count: this.state.count + 1,
    //     })

    // }


    //This is for normal function not for ES6
    handleClick(){

        this.setState({
            count: this.state.count + 1,
        })

    }
    

    render() {
        return (
            <div>

            <h1>{this.state.count}</h1>
            {/* This is for ES6 Versions */}
            {/* <button onClick={this.handleClick}>Increase</button> */}

            {/* This is for non ES6 versions { using bind() }*/}
            {/* <button onClick={this.handleClick.bind(this)}>Increase</button> */}

            {/* This is for non ES6 versions { using bind() in Constructor}*/}
            <button onClick={this.handleClick}>Increase</button>

            </div>
        )
    }
}


export default Binding;