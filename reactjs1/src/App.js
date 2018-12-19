import React from "react";
import Home from "./components/home"; //Week-2 Part-6

class App extends React.Component {
  render() {
    let msg="";
    let x=5;
    let i=2;
    let myStyle={
      boxShadow:"0px 0px 4px 1px black",
      color:"Blue",
      borderRadius:"8px 8px 8px 8px",
      width:"300px"
    }
    let depts=['IT',"HR","Account"];
    if(x==1){
      msg="Inside If";
    }
    else{
      msg="Inside Else";
    }
    return (
      //Parent Node: Div and Child Nodes: h1,p
      //Code inside {} is the JS code
      //Inside return() only ternary conditional operator is allowed
      //Home Component inside App Component
      <div>
        <h1 style={myStyle}>Welcome to ReactJS</h1>
        <p>Paragraph</p>
        <p>Sum is:{1+1}</p>
        <p>Message:{msg}</p>
        <p>i={i==1?'True':'False'}</p>
        <p>Department Names Are:{depts.map(i=>i+",")}</p>
        <Home message={"Select the Link"} value={"Test"}></Home>
      </div>
    );
  }
}

export default App;