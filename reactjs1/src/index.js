import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Greeting from "./components/greeting";


let name="Max";
let age=30;
ReactDOM.render(<App/>,document.getElementById("root"));

//name and age are props which are used by this.props.name and this.props.age in Greeting Component
ReactDOM.render(<Greeting name={name} age={age}/>,document.getElementById("sample"));
