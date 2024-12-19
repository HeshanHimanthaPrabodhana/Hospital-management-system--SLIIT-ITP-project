import React,{useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';

function FormDoc(){

  let history = useHistory();

  const [did, setDID]= useState("");
  const [name, setName]= useState("");
  const [contact, setPhone]= useState("");
  const [email, setEmail]= useState("");
  const [gender, setGender]= useState("");
  const [speciality, setSpeciality]= useState("");

   function sendData(e){
     e.preventDefault();
     const newDoctor={
       did,
       name,
       contact,
       email,
       gender,
       speciality
     }
     axios.post("http://localhost:8070/doctor/add", newDoctor).then(()=>{
       swal({
         title: "Success",
         text: "Doctor Added Successfully!",
         icon: "success",
         button: "OK"
       });
       history.push("/listDoctor");

     }).catch((err)=>{
       alert(err)
     })
   }

     return(
       <div>
      <div className="fun">
      <span>Doctor Management</span>
      </div>
        <form className="addform" onSubmit={sendData}>
            <h3 className="h3">New Doctor</h3>
        <div className="container">
          <label for="exampleInputID" >Doctor ID</label>
          <input type="number" className="form-control" id="did" placeholder="ID" required onChange={(e)=>{
            
            setDID(e.target.value);
          }} />
        
        </div>
        <div class="container">
          <label for="exampleInputName" >Doctor Name</label>
          <input type="text" className="form-control" id="name" placeholder="Full Name" required onChange={(e)=>{

            setName(e.target.value);
          }} />
        </div>
        <div className="container">
          <label for="exampleInputContact">Contact Number</label>
          <input type="tel" className="form-control" id="phone" name="phone" placeholder="0785412369" maxLength="10" pattern="[0-9]{3}[0-9]{7}" required onChange={(e)=>{

            setPhone(e.target.value);
          }} />
        </div>
        <div className="container">
          <label for="exampleInputEmail">Email</label>
          <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required onChange={(e)=>{

            setEmail(e.target.value);
          }}/>
        </div>
        <div className="container">
          <label for="exampleInputGender" >Gender</label>
          <input type="text" className="form-control" id="gender" placeholder="male/female" required onChange={(e)=>{

            setGender(e.target.value);
          }}/>
        </div>
        <div className="container">
          <label for="exampleInputSpecial" >Specialization</label>
          <input type="text" className="form-control" id="special" placeholder="Speciality" required onChange={(e)=>{

            setSpeciality(e.target.value);
          }} />
        </div>
        
        <button type="submit" className="addbtn1"><b>Add New Doctor</b></button>
      </form>
      </div>
     );
}
export default FormDoc;