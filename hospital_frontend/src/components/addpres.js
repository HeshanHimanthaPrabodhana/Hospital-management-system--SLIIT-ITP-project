import React, {useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
function FormPres(){

  let history = useHistory();

  const [presID, setPID]= useState("");
  const [patientName, setPName]= useState("");
  const [patientAge, setAge]= useState("");
  const [doctorName, setDName]= useState("");
  const [description, setDesc]= useState("");

  function sendPData(e){
    e.preventDefault();
    const newPrescript={
      presID,
      patientName,
      patientAge,
      doctorName,
      description
    }
    axios.post("http://localhost:8070/prescription/padd", newPrescript).then(()=>{
      swal({
        title: "Success",
        text: "Prescription Added Successfully!",
        icon: "success",
        button: "OK"
      });
      history.push("/listPres");


    }).catch((err)=>{
      alert(err)
    })
  } 

    return(
        <div>
        <div className="fun">
        <span>Prescription Management</span>
        </div>
          <form className="addform" onSubmit={sendPData}>
              <h3 className="h3">New Prescription</h3>

              <div className="container">
            <label for="exampleInputName" >Prescription ID</label>
            <input type="number" className="form-control" id="pID" placeholder="Prescription ID" required onChange={(e)=>{
              
              setPID(e.target.value);
            }} />
          </div>
         
          <div className="container">
            <label for="exampleInputName" >Patient Name</label>
            <input type="text" className="form-control" id="pname" placeholder="Patient Name" required onChange={(e)=>{
              
              setPName(e.target.value);
            }} />
          </div>
          <div className="container" >
            <label for="exampleInputAge" >Patient Age</label>
            <input type="number" className="form-control"  placeholder=" Enter a valid Age"  id="age" name="age" min="1" max="120" required onChange={(e)=>{
              
              setAge(e.target.value);
            }} /> 
          </div>
          <div className="container">
            <label for="exampleInputName" >Doctor Name</label>
            <input type="text" className="form-control" id="dname" name="dname" placeholder="Doctor Name" required onChange={(e)=>{
              
              setDName(e.target.value);
            }} />
          </div>
          <div className="container">
            <label for="exampleInputDescription">Description</label>
            <input type="text" className="form-control" id="desc" placeholder="Description" required onChange={(e)=>{
              
              setDesc(e.target.value);
            }} />
          </div>

          <button type="submit" className="addbtn1"><b>Add New Prescription</b></button>
        </form>
        </div>
    );
}
export default FormPres;