import React,{useState} from 'react';
import {useHistory}  from 'react-router-dom';
import { Link } from "react-router-dom";
import {FaUserLock } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import swal from 'sweetalert';



import { Router } from 'react-router';
//import UserList from './UserList';


const PatientLogin = () => {

     let history = useHistory();

    const [pemail,setPemail] = useState('');
    const [cpassword, setCpassword] = useState('');


 
    const loginPatient = async (e) => {
        e.preventDefault();

        const res   =  await fetch('http://localhost:8070/patient/login', {

            method :"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pemail,
                cpassword
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
            history.push("/dash");
        }
    }

     
    return(
        <>
       
        <div className="background-patientLogin">
               
               <img src="./images/sec.svg" alt=""  width="800px" height="450px" /> 
            
            <form method ="POST" className="form-patientLogin" /*onSubmit={}*/>
             
               <h1>Patient Login </h1>
              
               <div className="form-inputs-patientLogin">
                    <label htmlFor="User Name" className="form-lable-patientLogin">
                    <MdEmail size="20px" />  Email
                    </label>
                    <input type="email" id="pemail"name="pemail"className="form-input-patientLogin" placeholder="Enter your username"
                        required
                        value={pemail}
                        onChange={(e) => setPemail(e.target.value)}
                       
             
                    
                    /*value={values.username}
                      onChange={handleChange}
                    {errors.username && <p>{errors.username}</p>} */
                    />
               </div> 
               <div className="form-inputs-patientLogin">
                    <label htmlFor="Password" className="form-lable-patientLogin">
                    <FaUserLock size="20px"/> Password
                    </label>
                    <input type="password" id="cpassword"name="cpassword" className="form-input-patientLogin" placeholder="Enter your password"
                         required
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                     
                     /* value={values.password}
                        onChange={handleChange}
                       {errors.password && <p>{errors.password}</p>} */
                    />
               </div>   

               <span className="form-input-forget_password">
               <Link to={'/reset'}><u>Forgot Password</u></Link>
               </span>

               <button className="form-input-btn" type="submit" name ="signin" id="signin" value ="log In" onClick = {loginPatient} >
                   Log In
               </button>
                 <br></br>
               <span className="form-input-account">
                    <h7>Don't have an account?</h7> <Link to={'/signup'}><u>Sign up here</u></Link>
               </span>

            </form>
        </div>
        </>
    );
};

export default PatientLogin;

