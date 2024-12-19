import React, {useState} from 'react';
import {useHistory }  from "react-router-dom";
import {FaUserCheck,FaUser,FaUserLock } from 'react-icons/fa'
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


const FormLogin = () => {

    let history = useHistory();

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res   =  await fetch('http://localhost:8070/user/signin', {

            method :"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
 
        const data =  res.json();
        if(res.status === 400 || !data){
            swal({

                title: "Warning",
    
                text: "Invalid Credentials !!",
    
                icon: "warning",
    
                button: "OK"
    
              });
         
            console.log("Invalid Credentials");

        }else{

            swal({

                title: "Success",
    
                text: "Login Successfully !!",
    
                icon: "success",
    
                button: "OK"
    
              });
            
            console.log("Login Successfully !!");
            history.push("/dashboard")
        }
    }


     
    return(
        <>
       
        <div className="container-log">
           
           <img src="./images/lojic.svg" alt="" className=" lock-door" width="900px" height="450px" /> 
            
           <form method ="POST" className="form" /*onSubmit={}*/>
          
               <h1><b>Internal User Login</b> </h1>
            
               <div className="form-inputs">
                    <label htmlFor="Email" className="form-lable">
                    <FaUser size="20px" />  Email
                    </label>
                    <input type="email" id="email"name="email"className="form-input" 
                    
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"

                    />
               </div> 
               <div className="form-inputs">
                    <label htmlFor="Password" className="form-lable">
                       <FaUserLock size="20px"/> Password
                    </label>
                    <input type="password" id="password"name="password" className="form-input"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                      
                        
                       
                    />
               </div>   

                   
                       <Link to={'/reset'}><h5 className="input-h-five"><u>Forget password</u></h5></Link>
                   
                    
                  <button className="form-input-btn-one" type="submit" name = "signin" id="signin"
                     value = "log In"
                     onClick = {loginUser}
                  > 
                  Log In
                  </button>

            </form>

        </div>

        </>
    );
};

export default FormLogin;