import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
function EditVaccines(){
    let history = useHistory();
    const {id} = useParams();
    const [users,setUsers]= useState({
      vid: "",
      vname: "",
      vdesc: "",
      price: "",
      pid: "",
      billid: ""
    });

    const{vid,vname,vdesc,price,pid,billid} = users;
    const onInputChange = e =>{
      setUsers({...users, [e.target.name]:e.target.value});
    };

    useEffect(() =>{
      loadUser();
    },[]);

    const onSubmit = async e =>{
      e.preventDefault();

      await axios.put(`http://localhost:8070/vaccine/update/${id}`,users)
      swal({
        title: "Success",
        text: "Vaccine Updated Successfully!",
        icon: "success",
        button: "OK"
        });
      history.push('/viewvaccine');
      

    };

    const loadUser = async () =>{

      const result = await axios.get(`http://localhost:8070/vaccine/get/${id}`);
      setUsers(result.data);
    };
  
    
    return(
        <div>
      <div className="fun">
      <span>Vaccine Management</span>
      </div>
        <form className="addform" onSubmit={e => onSubmit(e)}>
            <h3 className="h3">Edit Vaccine Details</h3>
            <div class="container">
          <label for="exampleInputID" >Vaccine ID</label>
          <input type="text" className="form-control"  placeholder="Enter vaccine ID" name="vid" value ={vid} onChange={(e)=>onInputChange(e)} readOnly required />
        
        </div>    
            
        <div class="container">
        <label for="exampleFormControlSelect1">Vaccine name</label >
         <select class="form-control" id="exampleFormControlSelect1" name="vname" value={vname} onChange={(e)=>onInputChange(e)} required>
           <option>Sinopharm</option>
           <option>Pfizer</option>
           <option>Astrazenica</option>
         </select>
        </div>

        <div class="container">
          <label for="exampleInputName" >Vaccine Description</label>
          <input type="text"  className="form-control"  placeholder="Enter Description" name="vdesc" value ={vdesc}  onChange={(e)=>onInputChange(e)} required/>
        </div>
        <div class="container">
          <label for="exampleInputContact">Price</label>
          <input type="text" className="form-control" placeholder="Enter price" name="price" value ={price}  onChange={(e)=>onInputChange(e)} required/>
        </div>
        <div class="container">
          <label for="exampleInputEmail">patient ID</label>
          <input type="text" className="form-control" placeholder="Enter Patient ID" name="pid" value ={pid}  onChange={(e)=>onInputChange(e)} required />
        </div>
        <div class="container">
          <label for="exampleInputGender">Bill ID</label>
          <input type="text" className="form-control" placeholder="Enter Bill ID" name="billid" value ={billid}  onChange={(e)=>onInputChange(e)} required />
        </div>
       
        
        <button type="submit" className="editbtn1"><b>Save changes</b></button>
        
      </form>
      <Link to ={"/viewvaccine"}><button type="submit" className="cancelbtn"><b>Cancel</b></button></Link>
      </div>
    );
}
export default EditVaccines;