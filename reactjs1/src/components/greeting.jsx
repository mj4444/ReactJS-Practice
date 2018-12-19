import React from "react";


//Week-2 Part-5
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


export default Greeting;