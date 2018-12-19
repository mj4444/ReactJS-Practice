import React from "react";
import PropTypes from "prop-types";

class Customer extends React.Component{
    render(){
        return(
            <div>
                <h1>1.Customer Details</h1>
                <hr></hr>
                <li>Customer Id:{this.props.customerId}</li>
                <li>Customer Name:{this.props.customerName}</li>
                <li>Customer Age:{this.props.customerAge}</li>
                <li>Customer Address:{this.props.customerAddress}</li>
            </div>
        );
    }
}

Customer.defaultProps={
    customerName:"Default",
    customerId:"Default",
    customerAge:18,
    customerAddress:"Default"
};

Customer.propTypes={
    customerName:PropTypes.string,
    customerId:PropTypes.string,
    customerAge:PropTypes.number,
    customerAddress:PropTypes.string
};

export default Customer;