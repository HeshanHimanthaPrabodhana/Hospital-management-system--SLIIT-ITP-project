import React,{useState} from "react";
import {FaFileMedical} from 'react-icons/fa'
import {MdOutlinePayments}  from 'react-icons/md'
import {BsCardChecklist}  from 'react-icons/bs'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"

import axios from "axios";

import swal from 'sweetalert';





function Pdashboard(){



    const [pemail,setPemail]= useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newUser = {

            pemail

         }
         
         axios.post("http://localhost:8070/login/addlogin",newUser).then(()=>{
            swal({

                title: "Success",
    
                text: "User Added Successfully !!",
    
                icon: "success",
    
                button: "OK"
    
              });
  
                

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
                     <NavLink  to='/logout'> <button  class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Logout</button></NavLink>
                  </li>
                  </ul>
               </div>
        </form>
      </nav>

        <React.Fragment>
         
            <h1 className='text-center text-danger text-capitalize my-5'>
               
                 WELCOME !!
            </h1>

            <div className="container-">
                <div className="row" id="home-row">
                    
                    <div className="col">
                    <div className="card" >
                       
                        <div className="card-body">
                        <img src="./images/p4.jpg" alt="" width="150px" height="150px"/>
                            <h5 className="card-title" ><b>Appointment</b></h5>
                           
                            <Link className="btn btn-info btn-lg" to={'/addAppoint' }   onSubmit={sendDetails} >Click Here</Link>
                        </div>
                  </div>
                  </div>


                    <div className="col">
                    <div className="card" >
                      
                        <div className="card-body">
                        <img src="./images/p6.jpg" alt="" width="150px" height="150px"/>
                            <h5 className="card-title"><b>Card Details</b></h5>
                           
                            <Link className="btn btn-info btn-lg" to={'/userpay' }   onSubmit={sendDetails} >Click Here</Link>
                        </div>
                    </div>
                    </div>
                    

                   

                 </div>
            
                </div>

        </React.Fragment>
        </>
    );
}
export default Pdashboard;