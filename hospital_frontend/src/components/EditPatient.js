  
import React, { useState, useEffect } from "react";
import axios from "axios";
//import validation from './validation';
import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import {NavLink} from 'react-router-dom';

function EditPatient() {
    let history = useHistory();
    const { id } = useParams();
    const [users,setUsers] = useState({

           pname:"",
           pemail: "",
           fpassword: "",
           cpassword: "",
           gender: "",
           phonenum : ""
    });

     const {pname,pemail,fpassword,cpassword,gender,phonenum} = users;
     const onInputChange = e =>{
      setUsers({...users, [e.target.name]: e.target.value});


     };


    useEffect(() => {
     loadUser();
    }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));

     
    await axios.put(`http://localhost:8070/patient/edit/${id}`, users)
    swal({

        title: "Success",

        text: "Update Successfully !!",

        icon: "success",

        button: "OK"

      });


      history.push("/patientList");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8070/patient/take/${id}`);
     
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
            <h2> Update Patient</h2>
            <form   onSubmit ={e => onSubmit(e)} >

                <div className="form-group">
                        <label forName ="Ob_Id" className="form-label-add">Object Id</label>
                        <input type="text" className="form-control"  value ={id} onChange={(e)=> onInputChange(e)}  readOnly/>
                        
                </div>
                <div className="form-group">
                    <label forName ="pname" className="form-label-add">Full name</label>
                    <input type="text" className="form-control"  name="pname" value ={pname} onChange={(e)=> onInputChange(e)} />
                    
                </div>

                <div className="form-group">
                    <label forName="Email" className="form-label-add">Email</label>
                    <input type="email"  className="form-control" name="pemail" value ={pemail}  onChange={(e)=> onInputChange(e)}/>
                    
                </div>

                <div className="form-group">
                    <label forName="fpassword" className="form-label-add">Password</label>
                    <input type="password" className="form-control" minlength="5" maxlength="8" name="fpassword" value ={fpassword}  onChange={(e)=>onInputChange(e)} readOnly/>
                   
                </div>

                <div className="form-group">
                    <label forName="cpassword" className="form-label-add">Confirm Password</label>
                    <input type="Password" className="form-control" minlength="5" maxlength="8"  name="cpassword" value ={cpassword}  onChange={(e)=>onInputChange(e)} readOnly/>
                </div> 


               <div className="form-group">
                    <label forName="gender" className="form-label-add"> Gender</label>
                    <input type="text" className="form-control"  pattern="Male|Female"  name="gender" value ={gender}  onChange={(e)=>onInputChange(e)}/>
                   
                </div>  

                <div className="form-group">
                    <label forName="phonenum" className="form-label-add">Phone Number</label>
                    <input type="tel" className="form-control"  name="phonenum" maxLength="10" pattern="[0-9]{3}[0-9]{7}" value ={phonenum}  placeholder=" 077-1231231" onChange={(e)=>onInputChange(e)}/>
                   
                </div>  
                     <br></br>
                 
                     <Link to={"/patientList"}>   <button type="submit"  className="btn btn-danger">Back</button></Link>
                       <button type="submit"  className="btn btn-warning">Update</button>
                                 
                    
                     
            </form>
        </div>
        </>
    );
}

export default EditPatient;