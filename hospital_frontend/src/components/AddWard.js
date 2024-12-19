import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { useHistory } from 'react-router';


export default function AddWard(){

  let history = useHistory();

    
    const [ward_id, setWardID] = useState("");
    const [ward_name, setWardName] = useState("");
    const [ward_catogory, setCatogory] = useState("");
    const [total_bed_amount, setBedAmount] = useState("");
    const [empty_beds, setEmptyBeds] = useState("");

    

    function sendData(e){
      e.preventDefault();
      

      const newWard ={
        ward_id,
        ward_name,
        ward_catogory,
        total_bed_amount,
        empty_beds
      }

      
       axios.post("http://localhost:8070/ward/wardadd",newWard).then(()=>{
        /* alert("Ward Added") */
        swal({

          title: "Success",
  
          text: "Ward Added Successfully!",
  
          icon: "success",
  
          button: "OK"
  
        });
           history.push("/allwards");
       }).catch((err)=>{
          alert(err)
       })

    }
    

    return(

      <div>

      <div className="fun">

      <span>Ward Management</span>

      </div>
      
       
      <div className="add_ward">
      
         
           <form onSubmit={sendData}> 
           <center><h1>ADD WARD</h1></center>

           <div className="gl-0">
                  <label for="ward_id" className="form-label1">Ward ID</label>
                  <input type="text" className="form-control1" id="ward_id" placeholder="Enter Ward ID" 
                  onChange={(e)=>{
                    setWardID(e.target.value);
                  }}/>
              </div>
              
              <div className="gl-1">
                  <label for="ward_name" className="form-label1">Ward Name</label>
                  <input type="text" className="form-control1" id="ward_name" placeholder="Enter Ward Name" 
                  onChange={(e)=>{
                    setWardName(e.target.value);
                  }}/>
              </div>

              <div className="gl-2">
                  <label for="ward_catogory" className="form-label1">Ward Catogory</label>
                  <input type="text" className="form-control1" id="ward_catogory" placeholder="Enter Ward Catogory" 
                  onChange={(e)=>{
                    setCatogory(e.target.value);
                  }}/>
              </div>

              <div className="gl-3">
                  <label for="total_bed_amount" className="form-label1">Total Bed Amount</label>
                  <input type="text" className="form-control1" id="total_bed_amount"  oninvalid="this.setCustomValidity('Please Enter Total Bed Amount')" placeholder="Enter Total Bed Amount" 
                  onChange={(e)=>{
                    setBedAmount(e.target.value);
                  }}/>
              </div>

              <div className="gl-4">
                  <label for="empty_beds" className="form-label1">Enter Empty Beds Amount</label>
                  <input type="text" className="form-control1" id="empty_beds"  oninvalid="this.setCustomValidity('Please Enter Empty Bed Amount')" placeholder="Enter Empty Bed Amount" 
                  onChange={(e)=>{
                    setEmptyBeds(e.target.value);
                  }}/>
              </div>

              <br></br>
                  <button type="submit" className="btn0 btn-primary">Add Ward</button>
           </form>
           <a href="/allwards"><button type="submit" className="btn1 btn-primary">Cancel</button></a>


       </div>



</div>



       
       
    
    )


}