import React from "react";

class EmployeeName extends React.Component{
    render(){
        return(
            <div>
                <p>Employee Name:{this.props.empName}</p>
            </div>
        );
    }
}

export default EmployeeName;