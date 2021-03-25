// Create a class version of the Functional Component
import React, { Component } from 'react';
import { Button, Container } from "reactstrap";

class ClassClickCounter extends Component{
    constructor(props){
        super(props);
        this.state = {countDown: this.props.initialValue}
    }

    // countDown = () => {
    //     this.setState({countDown: this.state.countDown -1}
    //     )
    // }

    //stop at 0
    countDown = () => {
        if(this.state.countDown === 0){
            this.setState({countDown: 0})
        } else {
            this.setState({countDown: this.state.countDown -1}
            )
        }
    }

    render(){
        return(
            <div>
                <Container>
                    <p>The total clicks left are {this.state.countDown} </p>
                    <Button onClick={this.countDown}>Remove One Click</Button>
                </Container>
            </div>
        )
    }
}

export default ClassClickCounter

/////////////////////////////////////////////////////
//INSTRUCTOR ANSWER

// class ClassClickCounter extends Component{
//     constructor(props){
//         super(props);
//         this.state = {countValue: this.props.initialValue}
//     }

//     handleClick = () => {
//         this.setState({countValue: this.state.countValue -1})
//     }

//     render(){
//         return(
//             <Container>
//                 <p>The total clicks left are {this.state.countValue}</p>
//                 <Button onClick={this.handleClick}> Click Me From Function</Button>
//             </Container>
//         )
//     }
// }

// export default ClassClickCounter
