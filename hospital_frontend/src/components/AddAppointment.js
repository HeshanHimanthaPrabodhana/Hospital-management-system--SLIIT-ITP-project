import React,{useState} from "react"
import axios from "axios";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
export default function AddAppointment(){
    let history = useHistory();
    const [Appointment_ID, setAppointmentID] = useState("");
    const [Patient_Name, setPatientName] = useState("");
    const [Doctor_Name, setDoctorName] = useState("");
    const [Appointment_Date, setAppointmentDate] = useState("");
    const [Description, setDescription] = useState("");


    function sendData(e){
     
        e.preventDefault();
    
        const newAppointment = {
            Appointment_ID,
            Patient_Name,
            Doctor_Name,
            Appointment_Date,
            Description
        }

        console.log(newAppointment);
    
        axios.post("http://localhost:8070/appointment/add",newAppointment).then(() =>{
            swal({
                title: "Success",
                text: "Doctor Added Successfully!",
                icon: "success",
                button: "OK"
              });
              history.push("/addList");
            setAppointmentID("");
            setPatientName("");
            setDoctorName("");
            setAppointmentDate("");
            setDescription("");
            
            

        }).catch((err)=>{
            alert(err)
        })
    }


    return(
        <div className="container">
         <form onSubmit={sendData}>
  <div className="form-group">
      <h2><center>Add Appointments </center></h2>
      
    <label for="ID">Appointment ID</label>
    <input type="text" class="form-control" id="ID" placeholder="Enter Appointment ID" required minLength="3"
    onChange={(e)=> {
        setAppointmentID(e.target.value);
    }} />
    <br/>
  </div>

  <div className="form-group">

    <label for="name" >Patient Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Patient Name" required minLength="5"

    onChange={(e)=> {
        setPatientName(e.target.value);
    }} />
      <br/> 
  </div>

  <div className="form-group">

    <label for="doctor" >Doctor Name</label>
    <input type="text" class="form-control" id="doctor" placeholder="Enter Doctor Name" required minLength="5"

    onChange={(e)=> {
        setDoctorName(e.target.value);
    }} />
      <br/>
  </div>

  <div className="form-group">

  <label for="date" >Date</label>

<input type="date" className="form-control" id="date" placeholder="Enter Date" required

onChange={(e)=> {
    setAppointmentDate(e.target.value);
}} />
    
      <br/>
  </div>

  <div className="form-group">

    <label for="description" >Description</label>
    <input type="text" class="form-control" id="description" placeholder="Enter Description" minLength="5" 

    onChange={(e)=> {
        setDescription(e.target.value);
     }} />
       <br/>
  </div>
 
  <div className="col-12">
    <center>
    <button type="submit" class="btn btn-primary"> Add Appointment </button> 
    
          

    </center>
    <br/>
  </div>
</form>
        </div>
    )
}