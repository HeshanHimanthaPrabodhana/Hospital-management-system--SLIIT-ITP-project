import React from "react";
import {RiAdminFill} from 'react-icons/ri'
import {GiHealing} from 'react-icons/gi'
import {FaUserMd,FaPrescriptionBottleAlt,FaUserNurse,FaFileMedical,FaCreditCard,FaBed,FaWheelchair,FaCapsules,FaSyringe,FaClinicMedical,FaPrescriptionBottle} from 'react-icons/fa'
import {AiOutlineStock} from 'react-icons/ai'
import {ImLab, ImTextColor} from 'react-icons/im'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";




function Home(){

    return(
        
        <>
        <nav className="navbar-light-came">
        <form className="container-start">
        <div>
             <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                      <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                  </li>
                  
                  <li class="nav-item" role="presentation">
                     <NavLink  to='/logout'> <button  class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Logout</button></NavLink>
                  </li>
                  </ul>
               </div>
        </form>
      </nav>
        <React.Fragment>
             <div className="fun">
             <span><b>Admin Panel</b></span>
             </div>
            <h1 className='text-center text-danger text-capitalize my-5'>
               
                 Dashboard
            </h1>

            <div className="container-">
                <div className="row" id="home-row">
                    
                    <div className="col">
                    <div class="card" >
                       
                        <div className="card-body">
                        <RiAdminFill size="90px" />
                            <h5 className="card-title" >User Management</h5>
                           
                            <Link className="btn btn-primary" to={'/List' }>Click Here</Link>
                        </div>
                  </div>
                  </div>


                    <div className="col">
                    <div className="card" >
                      
                        <div className="card-body">
                           <FaUserMd size="90px"/>
                            <h5 className="card-title">Doctor Management</h5>
                           
                            <Link className="btn btn-primary" to={'/listDoctor'}>Click Here</Link>
                        </div>
                    </div>
                    </div>
                    

                     <div className="col">
                     <div className="card" color="red" >
                        
                        <div className="card-body">
                        <FaUserNurse size="90px"/>
                            <h5 className="card-title">Nurse Management</h5>
                           
                            <a href="#" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaWheelchair size="90px"/>
                            <h5 className="card-title">Patient Management</h5>
                           
                            <a href="#" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaPrescriptionBottleAlt size="90px"/>
                            <h5 className="card-title"> Prescription Management</h5>
                           
                            <Link to={'/listPres'} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>




            
                </div>

                 <br></br>
              
                <div className="row">
                    <div className="col">
                    <div class="card" >
                       
                        <div className="card-body">
                        <FaFileMedical size="90px"/>
                            <h5 className="card-title">Appointment Management</h5>
                           
                            <Link to={'/addList'} className="btn btn-primary">Click Here</Link>
                        </div>
                   </div>
                   </div>

                   <div className="col">
                   <div className="card" >
                        
                        <div className="card-body">
                        <FaCreditCard size="90px"/>
                            <h5 className="card-title">Payment Management</h5>
                           
                            <Link to={'/payments'} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                     <div className="card" >
                        
                        <div className="card-body">
                        <AiOutlineStock size="90px"/>
                            <h5 className="card-title">Stock Management</h5>
                            <Link to={'/sview'} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaBed size="90px"/>
                            <h5 className="card-title">Ward Management
                            </h5>
                           
                            <Link to={'/allwards'} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>


                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <ImLab size="90px"/>
                            <h5 className="card-title">Lab-Report Management</h5>
                           
                            <Link to={'/viewlab'} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>

                    
                 </div> 
                 <br></br>
                 <div className="row">
                    <div className="col">
                    <div class="card" >
                       
                        <div className="card-body">
                        <FaSyringe size="90px"/>
                            <h5 className="card-title">Vaccine Management</h5>
                           
                            <Link to={'/viewvaccine'} className="btn btn-primary">Click Here</Link>
                        </div>
                   </div>
                   </div>

                   <div className="col">
                    <div class="card" >
                       
                        <div className="card-body">
                        <FaCapsules size="90px"/>
                            <h5 className="card-title">Medicine Management</h5>
                           
                            <Link to={'/mview'} className="btn btn-primary">Click Here</Link>
                        </div>
                   </div>
                   </div>
                   <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaClinicMedical size="90px"/>
                            <h5 className="card-title">Ward Allocation
                            </h5>
                           
                            <Link to={''} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaPrescriptionBottle size="90px"/>
                            <h5 className="card-title">Cleaning Management
                            </h5>
                           
                            <Link to={''} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>
                   </div>
            </div>
        </React.Fragment>
        </>
    );

}
export default Home;