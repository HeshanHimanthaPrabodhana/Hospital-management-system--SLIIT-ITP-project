import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
const AllAppointments = () =>{
const [appointments, setAppointments] = useState([]);
useEffect(() =>{
    loadUsers();
}, []);

   const loadUsers = async () =>{
     const result = await axios.get("http://localhost:8070/appointment/");
             setAppointments(result.data.reverse());
         };
   function deleteAppointment(id){
       axios.delete(`http://localhost:8070/appointment/delete/${id}`).then(()=>{
           alert("Delete Successfully");
   }).catch((err) =>{ 
       console.log(err);
   })
   window.location.reload();
};


/*const deleteAppointment = async id =>{
    await axios.delete('http://localhost:8060/appointment/delete/${id}');
    alert("Appointment Deleted")
    loadUsers();
}; */ 



         return(
            <div>
           <div className="fun">
      <span>All Appointments</span>
      </div>
          <div>
          <Link to={'/addAppoint'} > 
           <button type="submit" className="addvbtn"><b>Add New Appointment</b></button>
          </Link>
          <Link to={'/dashboard'} > 
       <button type="submit" className="dash"><b>Dashboard</b></button>
        </Link>
          
          <div class="search-container">
          <form className="search">
            <input type="text" placeholder="Search Appointment" name="search1" />
            <right><button type="submit">Search</button></right>
          </form>
          </div>
        </div>
        <br></br>
				<br></br> 
        <div className="container-list">
      
        <table  className="table">
        <thead className="thead-dark" >
           <tr>
         
           <th scope="col">Appointment_ID</th>  
            <th scope="col">Patient_Name</th>
            <th scope="col">Doctor_Name</th>
            <th scope="col">Appointment_Date</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
            
            </tr>
          </thead>
        
         <tbody>
             {appointments.map((user, index ) => (
             <tr>
              
                 <td>{user.Appointment_ID}</td>
                 <td>{user.Patient_Name}</td>
                 <td>{user.Doctor_Name}</td>
                 <td>{user.Appointment_Date}</td>
                 <td>{user.Description}</td>
                <td>

                   
                   <th scope="col">
                   <Link className="edit" to={`/aget/${user._id}`}>
                   <AiFillEye size="23px" color="white"/>
                   </Link>
                   </th>
                  

                   <th scope="col">
                   <Link className="edit" to={`/aupdate/${user._id}`}>
                   <AiFillEdit size="23px" color="white"/>
                   </Link>
                   </th>

                   <th scope="col">
                   <Link className="delete" onClick={()=> deleteAppointment(user._id)}>
                   <FaTrashAlt size="23px" color="white"/>
                   </Link>
                   </th>

                    

                 </td>
              </tr>
             ))}
             </tbody>
        </table>
      </div>	
     </div>
     
    
        );
    }
    export default AllAppointments;
