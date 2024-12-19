import React, {useState} from 'react';
import {useHistory }  from "react-router-dom";
import {FaUserCheck,FaUser,FaUserLock } from 'react-icons/fa'


const Reset = () => {

   


     
    return(

        <>
        <nav className="navbar-light-came">
        <form className="container-start">
        <div>
             <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                  </li>
                  <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                  </li>
    
                  </ul>
               </div>
        </form>
      </nav>
        <div className="container-log">
           
           <img src="./images/pass.svg" alt="" className=" lock-door" width="850px" height="430px" /> 
            
           <form method ="POST" className="form" /*onSubmit={}*/>
          
               <h1><b>Reset Password</b> </h1>
 
               <div className="form-inputs">
                    <label htmlFor="Email" className="form-lable">
                    <FaUser size="20px" />  Email
                    </label>
                    <input type="email" id="email"name="email"className="form-input" 
                    placeholder="Enter your Email"

                    />
               </div> 


                   
                       
                   
                    
                  <button className="form-input-btn-one" type="submit" name = "signin" id="signin"
                
                  > 
                     reset password
                  </button>

            </form>

        </div>

        </>
    );
};

export default Reset;