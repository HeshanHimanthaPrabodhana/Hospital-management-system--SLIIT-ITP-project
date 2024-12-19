import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import swal from 'sweetalert';
function EditDoc(){

    let history = useHistory();
    const {id} = useParams();
    const [users,setUsers]= useState({
      did: "",
      name: "",
      contact: "",
      email: "",
      gender: "",
      speciality: ""
    });

    const{did,name,contact,email,gender,speciality} = users;
    const onInputChange = e =>{
      setUsers({...users, [e.target.name]:e.target.value});
    };

    useEffect(() =>{
      loadUser();
    }, []);

    const onSubmit = async e =>{
      e.preventDefault();

      await axios.put(`http://localhost:8070/doctor/update/${id}`,users)
      swal({
        title: "Success",
        text: "Doctor Updated Successfully!",
        icon: "success",
        button: "OK"
      });
      history.push('/listDoctor');

    };

    const loadUser = async () =>{

      const result = await axios.get(`http://localhost:8070/doctor/get/${id}`);
      setUsers(result.data);
   
    };
  
    return(
        <div>
      <div className="fun">
      <span>Doctor Management</span>
      </div>
        <form className="addform" onSubmit={e => onSubmit(e)}>
            <h3 className="h3">Edit Doctor</h3>
             
            
        <div class="container">
          <label for="exampleInputID" >Doctor ID</label>
          <input type="number" className="form-control"  placeholder="ID"  name="did" value ={did}  onChange={(e)=>onInputChange(e)} required />
        
        </div>
        <div class="container">
          <label for="exampleInputName" >Doctor Name</label>
          <input type="text"  className="form-control"  placeholder="Full Name" name="name" value ={name}  onChange={(e)=>onInputChange(e)} required/>
        </div>
        <div class="container">
          <label for="exampleInputContact">Contact Number</label>
          <input type="tel" className="form-control" placeholder="0785412369" maxLength="10" pattern="[0-9]{3}[0-9]{7}" name="contact" value ={contact}  onChange={(e)=>onInputChange(e)} required/>
        </div>
        <div class="container">
          <label for="exampleInputEmail">Email</label>
          <input type="email" className="form-control" placeholder="example@gmail.com" name="email" value ={email}  onChange={(e)=>onInputChange(e)} required />
        </div>
        <div class="container">
          <label for="exampleInputGender" >Gender</label>
          <input type="text" className="form-control" placeholder="male/female" name="gender" value ={gender}  onChange={(e)=>onInputChange(e)} required />
        </div>
        <div class="container">
          <label for="exampleInputSpecial" >Specialization</label>
          <input type="text" className="form-control" placeholder="Speciality" name="speciality" value ={speciality}  onChange={(e)=>onInputChange(e)} required />
        </div>
        
        <button type="submit" className="editbtn1"><b>Update Doctor</b></button>
        
      </form>
      <a href="/listDoctor"><button type="submit" className="cancelbtn"><b>Cancel</b></button></a>
      </div>
    );
}
export default EditDoc;