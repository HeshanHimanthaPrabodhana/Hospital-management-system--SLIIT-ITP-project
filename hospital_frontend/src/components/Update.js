  
import React, { useState, useEffect } from "react";
import axios from "axios";
//import validation from './validation';
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";





function UserUpdate() {
    let history = useHistory();
    const { id } = useParams();
    const [users,setUsers] = useState({

           uid:"",
           uname: "",
           email: "",
           password: "",
           usertype: "",
           phone : ""
    });

     const {uid,uname,email,password,usertype,phone} = users;
     const onInputChange = e =>{
      setUsers({...users, [e.target.name]: e.target.value});


     };


   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));

     
    await axios.put(`http://localhost:8070/user/update/${id}`, users)
    swal({

        title: "Success",

        text: "Update Successfully !!",

        icon: "success",

        button: "OK"

      });
 

    history.push("/List");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8070/user/get/${id}`);
     
      setUsers(result.data);
      
  };



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
            <h2> Update User</h2>
            <form   onSubmit={e => onSubmit(e)} >


               
                <div className="form-group">
                    <label forName ="User Id" className="form-label-add">User Id</label>
                    <input type="text" className="form-control"  name="uid" minlength="4" maxlength="5" value ={uid} onChange={(e)=> onInputChange(e)}  readOnly/>
                    
                </div>

                <div className="form-group">
                    <label forName="User Name" className="form-label-add">User Name</label>
                    <input type="text"  className="form-control" id="uname" name="uname" value ={uname}  onChange={(e)=> onInputChange(e)} />
                    
                </div>

                <div className="form-group">
                    <label forName="Email" className="form-label-add">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value ={email}  onChange={(e)=>onInputChange(e)}/>
                   
                </div>

                <div className="form-group">
                    <label forName="password" className="form-label-add">Password</label>
                    <input type="Password" className="form-control" id="password" name="password"  minlength="5" maxlength="8" value ={password}  onChange={(e)=>onInputChange(e)}/>
                   
                </div> 


               <div className="form-group">
                    <label forName="userType" className="form-label-add">Admin Type</label>
                    <input type="text" className="form-control" id="userType" name="usertype" value ={usertype}  onChange={(e)=>onInputChange(e)}/>
                   
                </div>  

                <div className="form-group">
                    <label forName="phone" className="form-label-add">Phone Number</label>
                    <input type="number" className="form-control" id="phone" name="phone"  maxLength="10" pattern="[0-9]{2}[0-9]{7}" placeholder="[077-123456]" value ={phone}   onChange={(e)=>onInputChange(e)}/>
                   
                </div>  
                     <br></br>
                   <Link to={"/List"}>   <button type="submit"  className="btn btn-danger">Back</button></Link>
                       <button type="submit"  className="btn btn-warning">Update</button>
                        
            </form>
        </div>
        </>
    );
}

export default UserUpdate;