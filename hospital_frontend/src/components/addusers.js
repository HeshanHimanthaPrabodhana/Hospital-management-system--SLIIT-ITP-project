
import React,{useState} from "react";

import axios from "axios";
import {useHistory }  from "react-router-dom";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { NavLink } from "react-router-dom";




export default function AddUser(){
    
    let history = useHistory();
    const [uid,setUid] = useState("");
    const [uname,setUname]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [usertype,setUsertype]= useState("");
    const[phone,setPhone] = useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newUser = {

            uid,
            uname,
            email,
            password,
            usertype,
            phone
         }
         
         axios.post("http://localhost:8070/user/add",newUser).then(()=>{
            swal({

                title: "Success",
    
                text: "User Added Successfully !!",
    
                icon: "success",
    
                button: "OK"
    
              });
  

             history.push("/List");
             

             
    
             

         }).catch((err)=> {

            alert(err)
         })

    }

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
                  <li class="nav-item" role="presentation">
                     <NavLink  to='/logout'> <button  class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Logout</button></NavLink>
                  </li>
                  </ul>
               </div>
        </form>
      </nav>
    
        <div className="container">

                    
 
            <br></br>
             <Link className="btn btn-secondary mb-4" to={'/List'}>Back TO Home</Link>
            <form  action="/List" onSubmit={sendDetails} >
                <div className="form-group">
                    <h2> Add New User</h2>
                    <label forName ="User Id" className="form-label-add">User Id</label>
                    <input type="text" className="form-control" id="userId" onChange={(e)=>{

                             setUid(e.target.value);
                    }}/>
                    
                </div>

                <div className="form-group">
                    <label forName="User Name" className="form-label-add">User Name</label>
                    <input type="text"  className="form-control" id="userName" placeholder="Enter User Name" onChange={(e)=>{

                       setUname(e.target.value);

                       //{errors.uname && <p className="error">{errors.uname}</p>}
                    }}/>
                    
                    
                </div>

             

               <div className="form-group">
                    <label forName="email" className="form-label-add">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter User Email"  onChange={(e)=>{

                         setEmail(e.target.value);

                         //{errors.email && <p className="error">{errors.email}</p>}
                   }}/>
                  
                </div>  

                <div className="form-group">
                    <label forName="password" className="form-label-add">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" minlength="5" maxlength="8"  onChange={(e)=>{

                         setPassword(e.target.value);

                         //{errors.password && <p className="error">{errors.password}</p>}
                   }}/>
                   
                </div>
  
                <div className="form-group">
                <label forName="password" className="form-label-add">Admin Type</label>
                <select class="form-select" aria-label="Default select example" onChange={(e)=>{  setUsertype(e.target.value);}}>
                        
                            <option value="Admin Type">Admin Type</option>
                            <option value="Senior ">Senior </option>
                            <option value="Junior">Junior</option>
                          
               </select> 

                        
                  
                   
                </div>

                <div className="form-group">
                    <label forName="phone" className="form-label-add">Phone Number</label>
                    <input type="tel"  className="form-control" id="phone" placeholder="Your Phone Number[077123456]"  maxLength="10" pattern="[0-9]{3}[0-9]{7}"  onChange={(e)=>{

                         setPhone(e.target.value);
                   }}/>
                   
                </div>

                     <br></br>
                 
                       <button type="submit"  class="btn btn-primary btn-lg">Save Details</button>
                     
            </form>
        </div>

        </>
    );
}