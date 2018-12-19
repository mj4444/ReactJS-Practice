import React from "react";
import ReactDOM from "react-dom";
import Customer from "./component/Customer";
import CustomerOrder from "./component/CustomerOrder";
let customer={
    customerName:"Ravic",
    customerId:"C0101",
    customerAge:33,
    customerAddress:"Noida"
};
/* 1.For Customer */
//For Default Values
ReactDOM.render(<Customer/>,document.getElementById('root'));
//For Custom Values
ReactDOM.render(<Customer customerName={customer.customerName} customerId={customer.customerId} customerAge={customer.customerAge} customerAddress={customer.customerAddress}/>,document.getElementById('root'));
/* 2.For Customer Order Details */
//For 
ReactDOM.render(<CustomerOrder/>,document.getElementById('sample'));