import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';



const ViewAppointment = ()=>{
   const[appointment, setAppointment] = useState({
    //AppointmentNo:"",  
    Appointment_ID: "",
    Patient_Name: "",
    Doctor_Name: "",
    Appointment_Date: "",
    Description: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadUser();
   }, []);
   const loadUser = async() =>{
	   const res = await axios.get(`http://localhost:8070/appointment/get/${id}`);
	   setAppointment(res.data);
   }

    return(
        <div>
        <div className="fun">
        <span>Appointment Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Appointment Details </h2><br/>
	 <center>
     <table class="table">
	
	 
		

	
	<tr>
		<td><h3> Appointment ID :</h3></td>
		<td><h3>{appointment.Appointment_ID}</h3></td>
	</tr>

	<tr>
		<td><h3> Patient Name :</h3></td>
		<td><h3>{appointment.Patient_Name}</h3></td>
	</tr>
	
	<tr>
		<td> <h3> Doctor Name :</h3></td>
		<td><h3>{appointment.Doctor_Name}</h3></td>
	</tr>

	<tr>
		<td> <h3> Appointment Date :</h3></td>
		<td><h3>{appointment.Appointment_Date}</h3></td>
	</tr>

	<tr>
		<td> <h3> Description :</h3></td>
		<td><h3>{appointment.Description}</h3></td>
	</tr>
	</table>
	</center>
           <br/><h5>If you need,</h5>
			    <br/>
				<center>
				<Link className="update" to={`/aupdate/${id}`}> 
				<button type="submit" class="btn btn-primary"><h5><b> Edit Appointment</b></h5></button>
				</Link>
				</center>
     
	 		 	
	 
    
	
 </div>
 </div>
    );
}

export default ViewAppointment;