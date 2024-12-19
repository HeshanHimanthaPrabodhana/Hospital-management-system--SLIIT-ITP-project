import React, { useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';


 function ViewWard(){

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

    /* const onSubmit = async e =>{
    e.preventDefault();

    await axios.put(`http://localhost:8070/payment/update/${id}`,users)
      history.push('/');

      }; */


      const loadUser = async () =>{

        const result = await axios.get(`http://localhost:8070/ward/getward/${id}`);
        setUsers(result.data);
      };

    /* onSubmit={findData} */

    return(

        <div className="add_ward">
      
         
        <form> 
        <center><h1>VIEW WARD</h1></center>

           {/* <div className="gl-0">
               <label for="id" className="form-label">Ward ID</label>
               <input type="text" className="form-control"  placeholder="Update Ward ID" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
    </div> */}

           <div className="gl-0">
               <label for="ward_id" className="form-label">Ward ID</label>
               <input type="text" className="form-control"  placeholder="Update Ward ID" name="ward_id" value ={ward_id} onChange={(e)=>onInputChange(e)} readOnly required />
           </div>

           <div className="gl-1">
               <label for="ward_name" className="form-label">Ward Name</label>
               <input type="text" className="form-control" id="ward_name" placeholder="Enter Ward Name" name="ward_name" value ={ward_name}  onChange={(e)=>onInputChange(e)} readOnly required/>
           </div>

           <div className="gl-2">
               <label for="ward_catogory" className="form-label">Ward Catogory</label>
               <input type="text" className="form-control" id="ward_catogory" placeholder="Enter Ward Catogory" name="ward_catogory" value ={ward_catogory}  onChange={(e)=>onInputChange(e)} readOnly required/>
           </div>

           <div className="gl-3">
               <label for="total_bed_amount" className="form-label">Total Bed Amount</label>
               <input type="text" className="form-control" id="total_bed_amount" placeholder="Enter Total Bed Amount" name="total_bed_amount" value ={total_bed_amount}  onChange={(e)=>onInputChange(e)} readOnly required/>
           </div>

           <div className="gl-4">
               <label for="empty_beds" className="form-label">Enter Empty Beds Amount</label>
               <input type="text" className="form-control" id="empty_beds" placeholder="Enter Empty Bed Amount" name="empty_beds" value ={empty_beds}  onChange={(e)=>onInputChange(e)} readOnly required/>
           </div>

           <br></br>
               <a href="/allwards"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
        </form>
    </div>


 
    
    );


}

export default  ViewWard;