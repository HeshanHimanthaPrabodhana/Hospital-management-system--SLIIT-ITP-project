import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
function ViewPres(){
	const[prescript, setPrescript] = useState({
		presID: "",
		patientName: "",
		patientAge: "",
		doctorName: "",
		description: ""
	})
	const {id} = useParams();
	useEffect(() =>{
		loadUser();
	}, []);
	const loadUser = async() =>{
		const res = await axios.get(`http://localhost:8070/prescription/pget/${id}`);
		setPrescript(res.data);
	}
    return(
        <div>
        <div className="fun">
        <span>Prescription Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Prescription Details </h2><br/>
     <table class="table">
	 <tr>
		<td><h3>Prescription ID:</h3></td>
		<td><h3>{prescript.presID}</h3></td>
	</tr>
	<tr>
		<td><h3>Patient Name:</h3></td>
		<td><h3>{prescript.patientName}</h3></td>
	</tr>
	<tr>
		<td><h3> Patient Age:</h3></td>
		<td><h3>{prescript.patientAge}</h3></td>
	</tr>
	<tr>
		<td><h3> Doctor Name:</h3></td>
		<td><h3>{prescript.doctorName}</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Description:</h3></td>
		<td><h3>{prescript.description}</h3></td>
	</tr>
	<tr>
	   <td>
           <br/><h5>If you need,</h5>
			    <br/>
				<Link className="edit" to={`/editPres/${prescript._id}`}> 
				<button type="submit" class="edit"><h5><b>Edit Details</b></h5></button>
				</Link>
       </td> 
	</tr>		 		 	
	</table>
	
 </div>
</div>
    );
}
export default ViewPres;