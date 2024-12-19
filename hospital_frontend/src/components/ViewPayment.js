import React, { useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';


 function ViewPayment(){

  let history = useHistory();
  const {id} = useParams();
  const [users,setUsers]= useState({
    patient_id: "",
    patient_name: "",
    patient_nic: "",
    p_num: "",
    amount: "",
    pay_method: "",
    date: "",
    time: ""
  });
    
  const{patient_id, patient_name, patient_nic,p_num,amount, pay_method,date,time} = users;
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

        const result = await axios.get(`http://localhost:8070/payment/get/${id}`);
        setUsers(result.data);
      };

    /* onSubmit={findData} */

    return(

      <div className="add_pay">
         
      <form> 
      <center><h1>VIEW PAYMENT</h1></center>

      {/*   <div className="kl-0">
                  <label for="id" className="form-label">Bill ID</label>
                  <input type="text" className="form-control"  placeholder="Update Bill ID" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
    </div> */}

         <div className="kl-01">
          <label for="patient_id" className="form-label">Bill ID</label>
          <input type="text" className="form-control" placeholder="Update Bill ID" name="patient_id" value={patient_id} onChange={(e)=>onInputChange(e)} readOnly required  />
         </div>

         <div className="kl-1">
             <label for="patient_name" className="form-label">Patient Name</label>
             <input type="text" className="form-control" id="patient_name" placeholder="Enter Patient Name"  name="patient_name" value ={patient_name}  onChange={(e)=>onInputChange(e)} readOnly required />
         </div>

         <div className="kl-2">
             <label for="patient_nic" className="form-label">Patient NIC</label>
             <input type="text" className="form-control" id="patient_nic" placeholder="Enter Patient NIC" name="patient_nic" value ={patient_nic}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-3">
             <label for="p_num" className="form-label">Phone Number</label>
             <input type="text" className="form-control" id="p_num" placeholder="Enter Phone Number" maxLength="9" pattern="[0-9]{2}[0-9]{7}" name="p_num" value ={p_num}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-4">
             <label for="amount" className="form-label">Amount (Rs :)</label>
             <input type="text" className="form-control" id="amount" placeholder="Enter Amount" name="amount" value ={amount}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-5">
             <label for="pay_method" className="form-label">Payment Method</label>
             <input type="text" className="form-control" id="pay_method" placeholder="Enter Payment Method" name="pay_method" value ={pay_method}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-6">
             <label for="date" className="form-label">Date</label>
             <input type="text" className="form-control" id="date" placeholder="Enter Date" name="date" value ={date}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-7">
             <label for="time" className="form-label">Time</label>
             <input type="text" className="form-control" id="time" placeholder="Enter Time" name="time" value ={time}  onChange={(e)=>onInputChange(e)} readOnly required/>
             
         </div>
         <br></br>
         <button type="submit" className="btn btn-primary">Print Invoice</button><br></br>
                  <a href="/"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
      </form>
  </div>


 
    
    );


}

export default  ViewPayment;