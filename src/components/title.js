// import { expr } from "jquery";
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import React from "react";

const mainTitle = () =>{

        return(
           
            
           <Container> 
            <Jumbotron>

                <h1> This is who works for you</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                        <input
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Sort your employees"
                        id="search"
                        />
                <button  className="btn btn-primary mt-3">
                    Sort
                </button>
            </div>
        </form>
            </Jumbotron>
            </Container>
                

        )

}

export default mainTitle;