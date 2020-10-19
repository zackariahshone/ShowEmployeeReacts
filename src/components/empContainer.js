// import { expr } from "jquery";
//import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import React from "react";



const EmpContainer = (props) => {
  console.log('this is props' ,props);
  return (


    <Container>
      <div className = 'row'>
        
          {props.workers.map(emps => (
         <div className = "col">
        <div className="card">

          <div className = "card-header">
          <p>{emps.name}</p>
            <p></p>
          <div className="card-body">
            <p className="card-text">{emps.occupation}</p>
            <p className="card-text">{emps.location}</p>
            <p className="card-text">Worker Id: {emps.id}</p>
          </div>
          </div>
          </div>
        </div>
          ))}
      </div>
      
    </Container>


  )

}

export default EmpContainer;