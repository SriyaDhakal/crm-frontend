import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import "../../page/entry/entry.style.css"


export const Loginform = ({handleOnChange, handleOnSubmit, email, pass, value}) => {
    return( 


         <Container >
             <h1 > Client login </h1>
              
                <form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        // className="col-lg-5"
                        type="email"
                        name="email"
                    
                        onChange={handleOnChange }
                        //value={email}
                        placeholder="Enter Email"
                        required
                        
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        // className="col-md-5"
                        type="password"
                        name="password"
                        //value={pass}
                        onChange={handleOnChange }
                        placeholder="Enter Password"
                        required
                        
                        />
                    </Form.Group>
                    <Button type="Submit">login</Button>
                 </form>
                 
                 
                    <a href="#!">Forget Password</a>
                    
                


        </Container>
     );
};
