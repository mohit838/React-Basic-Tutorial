import React, { Component } from 'react'

class Event extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         changeValue: '',
      };
    };
    

    // handleClick = () => {
    //     console.log('Clicked')
    // }


    handleChange = (e) => {

        this.setState({
            changeValue: e.target.value
        }, () => {
            //console.log(this.state.changeValue);
        })
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.handleClick}>Click Here!!</button> */}
            
                <input type="text" placeholder="Enter Text" onChange={this.handleChange}></input>
                <p>{this.state.changeValue}</p>
            </div>
        )
    }
}

export default Event;