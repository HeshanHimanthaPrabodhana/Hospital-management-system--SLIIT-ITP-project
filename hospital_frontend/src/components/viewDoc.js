import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const ViewDoc = ()=>{
   const[doctor, setDoctor] = useState({
	   did: "",
	   name: "",
	   contact:"",
	   email: "",
	   gender: "",
	   speciality: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadUser();
   }, []);
   const loadUser = async() =>{
	   const res = await axios.get(`http://localhost:8070/doctor/get/${id}`);
	   setDoctor(res.data);
   }

    return(
        <div>
        <div className="fun">
        <span>Doctor Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Doctor Details </h2><br/>
     <table class="table">
	
	 
		
	<tr>
		<td><h3>Doctor ID:</h3></td>
		<td><h3>{doctor.did}</h3></td>
	</tr>
	<tr>
		<td><h3> Doctor Name:</h3></td>
		<td><h3>{doctor.name}</h3></td>
	</tr>
	<tr>
		<td><h3> Phone Number:</h3></td>
		<td><h3>{doctor.contact}</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Email:</h3></td>
		<td><h3>{doctor.email}</h3></td>
	</tr>
	<tr>
		<td> <h3>Gender:</h3></td>
		<td><h3>{doctor.gender}</h3></td>
	</tr>
	<tr>
		<td> <h3>Specialization:</h3></td>
		<td><h3>{doctor.speciality}</h3></td>
	</tr>
	<tr>
	   <td>
           <br/><h5>If you need,</h5>
			    <br/>
				<Link className="edit" to={`/editDoc/${doctor._id}`}> 
				<button type="submit" class="edit"><h5><b>Edit Details</b></h5></button>
				</Link>
       </td> 
	</tr>	
	 
	 		 	
	</table>

	
 </div>
</div>
    );
}

export default ViewDoc;