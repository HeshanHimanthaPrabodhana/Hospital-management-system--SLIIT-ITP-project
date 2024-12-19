import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const ViewPay = ()=>{
   const[payment, setPayment] = useState({
	patient_id: "",
    patient_name: "",
    patient_nic: "",
    p_num: "",
	ser_obtain: "",
    amount: "",
    pay_method: "",
    date: "",
    month: "",
    year: "",
    time: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadUser();
   }, []);
   const loadUser = async() =>{
	   const res = await axios.get(`http://localhost:8070/payment/get/${id}`);
	   setPayment(res.data);
   }

    return(
        <div>
        <div className="fun">
        <span>Payment Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Payment Details </h2><br/>
     <table class="table">
	
	 
		
	 <tr>
		<td><h3> Bill ID :</h3></td>
		<td><h3>{payment.patient_id}</h3></td>
	</tr>
	
	<tr>
		<td><h3> Patient Name :</h3></td>
		<td><h3>{payment.patient_name}</h3></td>
	</tr>

	<tr>
		<td><h3> Patient NIC :</h3></td>
		<td><h3>{payment.patient_nic}</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Phone Number :</h3></td>
		<td><h3>{payment.p_num}</h3></td>
	</tr>
	<tr>
		<td> <h3>Service Obtain :</h3></td>
		<td><h3>{payment.ser_obtain}</h3></td>
	</tr>
	<tr>
		<td> <h3>Amount :</h3></td>
		<td><h3>{payment.amount}</h3></td>
	</tr>
	<tr>
		<td> <h3>Payment Method :</h3></td>
		<td><h3>{payment.pay_method}</h3></td>
	</tr>
    <tr>
		<td> <h3>Date :</h3></td>
		<td><h3>{payment.date}{payment.month}{payment.year}</h3></td>
	</tr>
    <tr>
		<td> <h3>Time :</h3></td>
		<td><h3>{payment.time}</h3></td>
	</tr>
	<tr>
	   <td>
           <br/><h5>If you need,</h5>
			    <br/>
				<Link className="update" to={`/update/${payment._id}`}> 
				<button type="submit" class="update"><h5><b>Edit Details</b></h5></button>
				</Link>
				<Link className="cancel" to="/"> 
				<button type="submit" class="cancel"><h5><b>Cancel</b></h5></button>
				</Link>
       </td> 
	</tr>	
	 
	 		 	
	</table>

	
 </div>
</div>
    );
}

export default ViewPay;