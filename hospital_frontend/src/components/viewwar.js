import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const ViewWar = ()=>{
   const[ward, setWard] = useState({
    ward_id: "",
    ward_name: "",
    ward_catogory: "",
    total_bed_amount: "",
    empty_beds: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadUser();
   }, []);
   const loadUser = async() =>{
	   const res = await axios.get(`http://localhost:8070/ward/getward/${id}`);
	   setWard(res.data);
   }

    return(
        <div>
        <div className="fun">
        <span>Ward Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Ward Details </h2><br/>
     <table class="table">
	
	 
	 <tr>
		<td><h3> Ward ID :</h3></td>
		<td><h3>{ward.ward_id}</h3></td>
	</tr>	
	
	<tr>
		<td><h3> Ward Name :</h3></td>
		<td><h3>{ward.ward_name}</h3></td>
	</tr>
	<tr>
		<td><h3> Ward Catogory :</h3></td>
		<td><h3>{ward.ward_catogory}</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Total Bed Amount :</h3></td>
		<td><h3>{ward.total_bed_amount}</h3></td>
	</tr>
	<tr>
		<td> <h3>Empty Bed Amount :</h3></td>
		<td><h3>{ward.empty_beds}</h3></td>
	</tr>
	
	<tr>
	   <td>
           <br/><h5>If you need,</h5>
			    <br/>
				<Link className="update" to={`/updateward/${ward._id}`}> 
				<button type="submit" class="updateward"><h5><b>Edit Details</b></h5></button>
				</Link>
				<Link className="cancel" to="/allwards"> 
				<button type="submit" class="cancel"><h5><b>Cancel</b></h5></button>
				</Link>
       </td> 
	</tr>	
	 
	 		 	
	</table>

	
 </div>
</div>
    );
}

export default ViewWar;