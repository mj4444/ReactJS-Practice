import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Greeting from "./components/greeting";
import Employee from "./components/employee";

let name="Mike";
let age=22;
let emp={
    name:"Mike",
    city:"Noida"
};


ReactDOM.render(<App/>,document.getElementById('root'));
//For Custom Values 
ReactDOM.render(<Greeting name={name} age={age}/>,document.getElementById('sample'));
//For Default values
//ReactDOM.render(<Greeting/>,document.getElementById('sample'));

ReactDOM.render(<Employee emp={emp}/>,document.getElementById('demo'));