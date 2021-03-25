import React, { Component } from 'react';

class StateExample extends Component{

    constructor(props){
        super(props);  //super must be here for state to work
        this.state = {currentTemp: "78", location: "Indiana"};
    //     this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(){
    //     this.setState({currentTemp: "48"});
    // }

    //this does the same thing without using "bind"
    handleClick = () => {
        this.setState({currentTemp: "48"}) //Indiana doesn't need to be updated, so it stays the same
    }

    render(){
        return (
            <div>
                Hello, the current temp is {this.state.currentTemp} - in {this.state.location}
                <button onClick={this.handleClick}>Click Me To Change Temp</button>
            </div>
        )
    }
}

export default StateExample