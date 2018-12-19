import React from "react";
import EmployeeName from "./employeeName"

class Employee extends React.Component{
    render(){
        return(
            //EmployeeName Component is used to display EmpName from emp Object from index.js
            <div>
                <EmployeeName empName={this.props.emp.name} />
                <p>Employee City:{this.props.emp.city}</p>
            </div>
        );
    }
}

export default Employee;