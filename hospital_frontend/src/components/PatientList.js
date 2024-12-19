  
import React, { useState, useEffect } from "react";
import axios from "axios";
import {ImUserPlus } from 'react-icons/im'
import { Link } from "react-router-dom";
import {AiFillEdit} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import swal from 'sweetalert';
import { NavLink } from "react-router-dom";


const PatientList = () => {
  const [users, setUser] = useState([]);
  const[searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8070/patient/fetch");
    setUser(result.data.reverse());
  };

  const deletePatient = async uid => {
    await axios.delete(`http://localhost:8070/patient/remove/${uid}`);
    swal({

      title: "Success",

      text: "Delete Successfully !!",

      icon: "success",

      button: "OK"

    });
    loadUsers();
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
     <main id="site-main"> 
        <div className="container-list">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand active"><b>User Management</b></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#"></a>
                  <a class="nav-link" href="#">  </a>
                  <a class="nav-link" href="#"></a>
                  
                  <Link to={"/List"}><button class="btn btn-outline-info me-2" type="button"><b>Users list</b></button></Link>
                  <Link to={"/patientList"}><button class="btn btn-outline-info me-2" type="button"><b>Patients list</b></button></Link>
                  <Link to={"/cart"}><button class="btn btn-outline-warning me-2" type="button"><b>Purchase Ward Items</b></button></Link>
                </div>
              </div>
            </div>
          </nav>
        <br></br>
        <h2 className="h2-user-list"><u>Patients List</u></h2>
            <div className="box-nav d-flex justify-between">
            <Link className="btn btn-secondary" to={'/List'}>Back </Link>
               <Link  className="btn btn-primary" to={'/signup'}>
                     <ImUserPlus  size="27px"/> <b> Add Patient </b>
                </Link>
                </div>

                    <div   className="search">
                  
                  <div className=" col-lg-3 mt-2 mb-2 mr-1">
                    <input
                    className="form-control"
                    type="search"
                    placeholder="search here"
                    name="searchTerm"
                  // onChange={this.handleTextSearch}

                  onChange={(e)=>{

                    setsearchTerm(e.target.value);
      
              }}
                    
                    
                    />
                    
                  </div>
              </div>   


                <br></br>

               <form>
                   <table className="table">
                       <thead className="thead-dark">
                           <tr>
                               
                               <th>PatientName</th>
                               <th>Email</th>
                               <th>Password</th>
                               <th>Gender</th>
                               <th>PhoneNum</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody className="tbody">
                        {users.filter(val =>{

                              if(searchTerm === ""){

                                  return val;

                              } else if(

                              
                                  val.pname.toLowerCase().includes(searchTerm.toLowerCase())||
                                  val.pemail.toLowerCase().includes(searchTerm.toLowerCase())

                              ){

                                  return val;

                              }

                              })
                                            
                        
                        .map((user, index) => (
                            <tr>
                                
                                <td>{user.pname}</td>
                                <td>{user.pemail}</td>
                                
                                 <td>*******</td>
                                <td>{user.gender}</td>
                                <td>{user.phonenum}</td>
                              
                                <td>
                                     


                                   <Link class="btn btn-success" to={`/update/${user._id}`}>
                                        <AiFillEdit size="30px" color="white"/>
                                  
                                       
                                     </Link>
                                       

                                     <Link class="btn btn-danger" onClick={() => deletePatient(user._id)}>
                                        <FaTrashAlt size="30px" color="white"/>
                                  
                                       
                                     </Link>
                                </td>
                            </tr>
                              ))}
                        </tbody>
                    </table>
                    <h6>Click to get a PDF of all registered patient details :</h6>

                    <Link to="/regList"><button type="submit" className="btn19 btn-primary">PDF generate</button></Link>
                </form>       

        
        </div>
     </main>  

     </> 
    )
}

export default PatientList;