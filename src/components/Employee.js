import React, { Component } from "react";
import Title from "./title";
// import EmployeeContainer from "./empContainer"
import Employees from "../friends.json";
import EmpContainer from "./empContainer";


class EmployeeHome extends Component {

    state = {
        employees : Employees
    }


    alphabetize = () =>{
        
    }

 employeeSet = () =>{
    this.setState({employees : Employees})
}

    render(){
        return(
            <div>
               <Title/> 

                <EmpContainer workers = {this.state.employees}/>


                
            </div>
        )
    }

}

export default EmployeeHome;