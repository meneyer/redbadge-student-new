import React, { Component } from 'react';

class PropsExample extends Component {
    render () {
        const {name, business} = this.props  //if you use this, you don't need line 8 as you'd use line 9 instead since it has "this.props" in the destructured object
        return (
            <div>
                {/* {this.props.name} is the founder of {this.props.business} */}
                {name} is the founder of {business}
            </div>
            )
    }
}

export default PropsExample;