import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import swal from 'sweetalert';
function EditAppointment(){
    let history = useHistory();
    const {id} = useParams();
    const [users,setUsers]= useState({
      Appointment_ID: "",
      Patient_Name: "",
      Doctor_Name: "",
      Appointment_Date: "",
      Description: ""
     });

    const{Appointment_ID,Patient_Name,Doctor_Name,Appointment_Date,Description} = users;
    const onInputChange = e =>{
      setUsers({...users, [e.target.name]:e.target.value});
    };

    useEffect(() =>{
      loadUser();
    }, []);

    const onSubmit = async e =>{
      e.preventDefault();

      await axios.put(`http://localhost:8070/appointment/aupdate/${id}`,users)
      swal({
        title: "Success",
        text: "Appointment Updated Successfully!",
        icon: "success",
        button: "OK"
      });
      history.push('/addList');

    };

    const loadUser = async () =>{

      const result = await axios.get(`http://localhost:8070/appointment/get/${id}`);
      setUsers(result.data);
    };
  
    return(
      <div>
      <div className="fun">
      <span>Appointment Management</span>
      </div>

      <div className="container">
        <form className="addform" onSubmit={e => onSubmit(e)}>
            <center><h3 className="h3">Edit Appointment</h3></center>
            
        
            <div className="container">
                  <label for="id" >AppointmentNo</label>
                  <input type="text" className="form-control"  placeholder="Update Appointment No" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
              </div>



        <div class="container">
          <label for="Appointment_ID"> Appointment_ID </label>
          <input type="text" className="form-control" id="appointment_ID" placeholder="Update Appointment_ID" name="Appointment_ID" value ={Appointment_ID}  onChange={(e)=>onInputChange(e)} readOnly required />
        </div>

        <div class="container">
          <label for="Patient_Name" >Patient_Name</label>
          <input type="text"  className="form-control"  placeholder="Enter Patient Name" name="Patient_Name" value ={Patient_Name}  onChange={(e)=>onInputChange(e)} required/>
        </div>

        <div class="container">
           <label for="Doctor_Name">Doctor_Name</label>
           <input type="text" className="form-control" placeholder="Enter Doctor Name" name="Doctor_Name" value ={Doctor_Name}  onChange={(e)=>onInputChange(e)} required/>
        </div>

        <div class="container">
          <label for="Appointment_Date"> Appointment_Date</label>
          <input type="date" className="form-control" placeholder="Enter Appointment Date" name="Appointment_Date" value ={Appointment_Date} />
        </div>

        <div class="container">
          <label for=" Description" > Description</label>
          <input type="text" className="form-control" placeholder="Enter Description" name="Description" value ={Description}  onChange={(e)=>onInputChange(e)} required />
        </div>
        
        <br/>
        <button type="submit" className="btn1 btn-primary"><b>Update Appointment</b></button>
        
      </form>
      <a href="/addList"><button type="submit" className="btn1 btn-primary"><b>Cancel</b></button></a>
      </div>
      </div>
    );

}
export default  EditAppointment;