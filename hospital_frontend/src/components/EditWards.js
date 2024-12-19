import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';
import swal from 'sweetalert';


 function EditWard(){

  let history = useHistory();
  const {id} = useParams();
  const [users,setUsers]= useState({
    ward_id: "",
    ward_name: "",
    ward_catogory: "",
    total_bed_amount: "",
    empty_beds: ""
  });
    
  const{ward_id, ward_name, ward_catogory, total_bed_amount, empty_beds} = users;
  const onInputChange = e =>{
    setUsers({...users, [e.target.name]:e.target.value});
  };
    
     
     useEffect(() =>{
     loadUser();
  }, []);    

    const onSubmit = async e =>{
    e.preventDefault();

    await axios.put(`http://localhost:8070/ward/updateward/${id}`,users)
    swal({

      title: "Success",
  
      text: "Ward Update Successfully!",
  
      icon: "success",
  
      button: "OK"
  
    });
       history.push('/allwards');
  
       };


      const loadUser = async () =>{

        const result = await axios.get(`http://localhost:8070/ward/getward/${id}`);
        setUsers(result.data);
      };

    

    return(


      <div>

      <div className="fun">

      <span>Ward Management</span>

      </div>

      <div className="add_ward">
      
         
           <form onSubmit={e => onSubmit(e)}> 
           <center><h1>UPDATE WARD</h1></center>

             {/* <div className="gl-0">
                  <label for="id" className="form-label">Ward ID</label>
                  <input type="text" className="form-control"  placeholder="Update Ward ID" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
                 </div> */}

              <div className="gl-0">
                  <label for="ward-id" className="form-label1">Ward ID</label>
                  <input type="text" className="form-control1"  placeholder="Update Ward ID" name="ward_id" value ={ward_id} onChange={(e)=>onInputChange(e)} readOnly required />
              </div>

              <div className="gl-1">
                  <label for="ward_name" className="form-label1">Ward Name</label>
                  <input type="text" className="form-control1" id="ward_name" placeholder="Enter Ward Name" name="ward_name" value ={ward_name}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <div className="gl-2">
                  <label for="ward_catogory" className="form-label1">Ward Catogory</label>
                  <input type="text" className="form-control1" id="ward_catogory" placeholder="Enter Ward Catogory" name="ward_catogory" value ={ward_catogory}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <div className="gl-3">
                  <label for="total_bed_amount" className="form-label1">Total Bed Amount</label>
                  <input type="text" className="form-control1" id="total_bed_amount" placeholder="Enter Total Bed Amount" name="total_bed_amount" value ={total_bed_amount}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <div className="gl-4">
                  <label for="empty_beds" className="form-label1">Enter Empty Beds Amount</label>
                  <input type="text" className="form-control1" id="empty_beds" placeholder="Enter Empty Bed Amount" name="empty_beds" value ={empty_beds}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <br></br>
                  <button type="submit" className="btn0 btn-primary">Update Ward</button>
           </form>
           
           <a href="/allwards"><button type="submit" className="btn1 btn-primary">Cancel</button></a>

       </div>

      </div>
    
    );


}

export default  EditWard;