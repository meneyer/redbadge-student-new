//Create a class component based on the functionalProps.jsx file
//Keep the usage of destructuring props in this challenge.

import React, { Component } from 'react';
import { Alert, Container } from "reactstrap"

class ClassComponentProps extends Component{
    displayAlerts(){
        const {numbers} = this.props;
        return numbers.map((num, index) => (
            <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
            The number is {num}{" "}
            </Alert>        
        ));
    }
    render() {
        return(
            <div>
                <Container>
                    <h3>Changed to Class Component Props</h3>
                    {this.displayAlerts()}
                </Container>
            </div>
        )
    }
}

export default ClassComponentProps;


//2 different ways to make the same thing happen
//OPTION TWO

// import React, { Component } from 'react';
// import { Alert, Container } from "reactstrap"

// class ClassComponentProps extends Component{
//     render(){
//     const {numbers} = this.props;
//     const displayAlerts = () => numbers.map((num, index) => 
//         <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
//             The number is {num}{" "}
//         </Alert>        
//     )
//         return(
//             <div>
//                 <Container>
//                     <h3>Changed to Class Component Props</h3>
//                     {displayAlerts()}
//                 </Container>
//             </div>
//         )
//     }
// }

// export default ClassComponentProps;