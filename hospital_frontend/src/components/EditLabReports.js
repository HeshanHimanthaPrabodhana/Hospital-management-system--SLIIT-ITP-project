import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
function EditLabReports(){
    let history = useHistory();
    const {id} = useParams();
    const [users,setUsers]= useState({
      rid: "",
      pid: "",
      pname: "",
      testtype: "",
      date: "",
      rdesc: "",
      billid: "",
     
      
    });

    const{rid,pid,pname,testtype,date,rdesc,billid} = users;
    const onInputChange = e =>{
      setUsers({...users, [e.target.name]:e.target.value});
    };

    useEffect(() =>{
      loadUser();
    },[]);

    const onSubmit = async e =>{
      e.preventDefault();

      await axios.put(`http://localhost:8070/lab/update/${id}`,users)
      swal({
        title: "Success",
        text: "Lab Report Updated Successfully!",
        icon: "success",
        button: "OK"
      });
      history.push('/viewlab');

    };

    const loadUser = async () =>{

      const result = await axios.get(`http://localhost:8070/lab/get/${id}`);
      setUsers(result.data);
    };
  
    return(
        <div>
      <div className="fun">
      <span>Lab Reports Management</span>
      </div>
        <form className="addform" onSubmit={e => onSubmit(e)}>
            <h3 className="h3">Edit Lab Report</h3>
            <div class="container">
          <label for="exampleInputID" >Report ID</label>
          <input type="text" className="form-control"  placeholder="Enter Report ID" name="rid" value ={rid} onChange={(e)=>onInputChange(e)} readOnly required />
        
        </div>    
            
        <div class="container">
          <label for="exampleInputID" >Patient ID</label>
          <input type="text" className="form-control"  placeholder="Enter Patient ID" name="pid" value ={pid}  onChange={(e)=>onInputChange(e)} required />
        
        </div>
        <div class="container">
          <label for="exampleInputName" >patient Name</label>
          <input type="text"  className="form-control"  placeholder="Full Name" name="pname" value ={pname}  onChange={(e)=>onInputChange(e)} required/>
        </div>

        <div class="container">
        <label for="exampleFormControlSelect1">Test type</label >
         <select class="form-control" id="exampleFormControlSelect1" name="testtype" value={testtype} onChange={(e)=>onInputChange(e)} required>
           <option>PCR</option>
           <option>Antigen</option>
           <option>Lipid Profile</option>
           <option>FBS</option>
           <option>ESR</option>
         </select>
        </div>

        <div class="container">
        <form action="https://example.com">
  <label>
    Enter the date:</label><br/>
    <input type="date" name="date" value ={date} onChange={(e)=>onInputChange(e)} required />
    <br/>
  
</form>
        </div>
        <div class="container">
          <label for="exampleInputEmail">Report Description</label>
          <input type="text" className="form-control" placeholder="Enter Report Description" name="rdesc" value ={rdesc}  onChange={(e)=>onInputChange(e)} required />
        </div>
        <div class="container">
          <label for="exampleInputGender" >Bill ID</label>
          <input type="text" className="form-control" placeholder="Enter BIll Id" name="billid" value ={billid}  onChange={(e)=>onInputChange(e)} required />
        </div>
       
        
        <button type="submit" className="editbtn1"><b>Save changes</b></button>

        <br/><br/>
        
      </form>
      <Link to ="/viewlab"><button type="submit" className="cancelbtn"><b>Cancel</b></button></Link>
      </div>
    );
}
export default EditLabReports;