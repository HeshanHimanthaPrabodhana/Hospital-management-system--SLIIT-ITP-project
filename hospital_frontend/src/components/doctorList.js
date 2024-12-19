import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ImUserPlus } from 'react-icons/im'
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

const DocList = ()=>{
	const[doctors, setDoctors] = useState([]);
	const[searchTerm, setsearchTerm] = useState("");

	useEffect(()=>{
		loadUsers();
	},[]);

	const loadUsers = async ()=>{
		const result = await axios.get("http://localhost:8070/doctor/");
		setDoctors(result.data.reverse());
	};

	const deleteDoctor = async id =>{
		await axios.delete(`http://localhost:8070/doctor/delete/${id}`);
		swal({
			title: "Success",
			text: "Doctor Deleted Successfully!",
			icon: "success",
			button: "OK"
		  });
		loadUsers();
	};
 

	
	
    return(
		<div>
      <div className="fun">
      <span>Doctor Management</span>
      </div>
        <div className="admin">
        <Link to={'/dashboard'} > 
       <button type="submit" className="dash"><b>Dashboard</b></button>
        </Link>
	    <Link to={'/addDoc'} > 
       <button type="submit" className="addbtn"><b>Add New Doctor</b></button>
        </Link>
     <div class="search-container">
      <form className="search">
        <input type="text" placeholder="Search Doctor" name="search" onChange={(e)=>{
             setsearchTerm(e.target.value);
		}} />
      </form>
    </div>

                <br></br>
				<br></br>
				<div className="container-list">
               <form>
                   <table className="table">
                       <thead className="thead-dark">
                           <tr>
                               
						             <th> ID </th>
	                       <th>Name</th>
		                   <th>Phone Number</th>
		                   <th>Email</th>
		                   <th>Gender</th>
                           <th>Specialization</th>
						             <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className="tbody">
                        {doctors.filter(val =>{

                                  if(searchTerm === ""){

                                      return val;

                                  } else if(

                                      val.name.toLowerCase().includes(searchTerm.toLowerCase())||
                                      val.speciality.toLowerCase().includes(searchTerm.toLowerCase())
                                     

                                  ){

                                      return val;

                                  }

                                  })
                                                          
                        
                        
                         .map((user, index) => (
                               <tr>
                               
							             <td>{user.did}</td>
		                       <td>{user.name}</td>
		                       <td>{user.contact}</td>
		                       <td>{user.email}</td>
		                       <td>{user.gender}</td>
                               <td>{user.speciality}</td>
                                <td>

								   <Link class="btn btn-info"  to={`/viewDoc/${user._id}` }>
                                      <AiFillEye size="23px" color="white"/>
                                  
                                       
                                     </Link>  

                                   <Link class="btn btn-success"  to={`/editDoc/${user._id}` }>
                                      <AiFillEdit size="23px" color="white"/>
                                  
                                       
                                     </Link>
                                       

                                     <Link class="btn btn-danger" onClick={() => deleteDoctor(user._id)}>
                                     <FaTrashAlt size="23px" color="white"/>
                                  
                                       
                                     </Link>
                                </td>
                            </tr>
                              ))}
                        </tbody>
                    </table>
                    <h6>Click to get a PDF of all doctors details :</h6>

                    <Link to="/repoDView"><button type="submit" className="btn19 btn-primary">PDF generate</button></Link>
                </form>       
				</div>

        </div>
     </div>
    );
}
export default DocList;