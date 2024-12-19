import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import swal from 'sweetalert';
function EditPres(){

    let history = useHistory();
    const {id} = useParams();
    const [prescripts,setPrescript]= useState({
      presID: "",
      patientName: "",
      patientAge: "",
      doctorName: "",
      description: ""
     
    });

    const{presID,patientName,patientAge,doctorName,description} = prescripts;
    const onInputChange = e =>{
      setPrescript({...prescripts, [e.target.name]:e.target.value});
    };

    useEffect(() =>{
      loadUser();
    }, []);

    const onSubmit = async e =>{
      e.preventDefault();

      await axios.put(`http://localhost:8070/prescription/pupdate/${id}`,prescripts)
      swal({
        title: "Success",
        text: "Prescription Updated Successfully!",
        icon: "success",
        button: "OK"
      });
      history.push('/listPres');

    };

    const loadUser = async () =>{

      const result = await axios.get(`http://localhost:8070/prescription/pget/${id}`);
      setPrescript(result.data);
    };
    return(
        <div>
        <div className="fun">
        <span>Prescription Management</span>
        </div>
          <form className="addform"  onSubmit={e => onSubmit(e)}>
              <h3 className="h3">Edit Prescription</h3>
       
         <div class="container">
          <label for="exampleInputID" >Doctor ID</label>
          <input type="number" className="form-control" placeholder="ID" name="presID" value ={presID}  onChange={(e)=>onInputChange(e)} required />
        </div>
         
          <div class="container">
            <label for="exampleInputName" >Patient Name</label>
            <input type="text" className="form-control" placeholder="Patient Name" name="patientName" value ={patientName}  onChange={(e)=>onInputChange(e)} required/>
          </div>
          <div class="container">
            <label for="exampleInputAge">Patient Age</label>
            <input type="number" className="form-control" placeholder=" Enter a valid Age"  name="patientAge" min="1" max="120" value ={patientAge}  onChange={(e)=>onInputChange(e)} required/>
          </div>
          <div class="container">
            <label for="exampleInputName">Doctor Name</label>
            <input type="text" className="form-control" placeholder="Doctor Name" name="doctorName" value ={doctorName}  onChange={(e)=>onInputChange(e)} required/>
          </div>
          <div class="container">
            <label for="exampleInputDescription" >Description</label>
            <input type="text" className="form-control" placeholder="Description" name="description" value ={description}  onChange={(e)=>onInputChange(e)} required/>
          </div>
          
          <button type="submit" className="editbtn1"><b>Update Prescription</b></button>
     
        </form>
        <a href="/listPres"><button type="submit" className="cancelbtn"><b>Cancel</b></button></a>
        </div>
    );
}
export default EditPres;