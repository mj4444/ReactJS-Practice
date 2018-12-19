import React from "react";

import PropTypes from "prop-types";

class Greeting extends React.Component{
    render(){
        return(
            <div>
                <h1>Name is:{this.props.name}</h1>
                <h1>Age is:{this.props.age}</h1>
            </div>
        );
    }
}
//If no Properties are provided at index.js
Greeting.defaultProps={
    name:"Default Value",
    age:18
};
//For Validation of Data Types of passed properties
Greeting.propTypes={
    name:PropTypes.string,
    age:PropTypes.number
};

export default Greeting;