import  { useState } from "react";
import "./entry.style.css";
import { Loginform } from "../../components/login/login.comp"; 


export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Creating a function everytime we change this input,Capture that input value and keep in state here

    const handleOnchange = e =>{
      const {name, value} = e.target;
      switch(name){
        case "email":
          setEmail(value);
          break
          

           case  "password":
              setPassword(value);
              break;
              default:
                break
        };
      
    };
    const handleOnSubmit = e =>{
        e.preventDefault()
      
       //TODO call Api to submit the form
        console.log(email, password);
    };
    return(
     <div className="entry-page bg-info">
    
        <Loginform  

        handleOnchange= {handleOnchange}
        handleOnSubmit= {handleOnSubmit}
        email={email}
        pass={password}
        />
    
    
    </div>
    );
};
