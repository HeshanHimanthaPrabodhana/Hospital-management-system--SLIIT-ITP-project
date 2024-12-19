import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


const VaccineList = ()=>{
	const[Vaccines, setVaccines] = useState([]);
	  const[searchTerm, setsearchTerm] = useState("");
	
	

	useEffect(()=>{
		loadUsers();
	},[]);

	const loadUsers = async ()=>{
		const result = await axios.get("http://localhost:8070/vaccine/");
		setVaccines(result.data.reverse());
	};

	const deleteVaccine = async id =>{
		await axios.delete(`http://localhost:8070/vaccine/delete/${id}`);
		swal({
			title: "Success",
			text: "Vaccine Deleted Successfully!",
			icon: "success",
			button: "OK"
		  });
		loadUsers();
		
	};

	
    return(
        <div>
			<br/>
      <div className="fun">&nbsp;&nbsp;
      <span>Vaccine Management</span>
      </div>
	  <br/>
        <div class="admin">
        &nbsp;&nbsp;&nbsp;
	    <Link to={'/addvaccine'} > 
       <button type="submit" className="addvbtn"><b> + Add New vaccine</b></button>
        </Link>
		<br/>
		&nbsp;&nbsp;&nbsp;
		<div   className="search">
					<div className=" col-lg-3 mt-2 mb-2 mr-1">
					<input className="form-control"
					type="search"
					placeholder="search here"
					name="searchTerm"
					// onChange={this.handleTextSearch}
					onChange={(e)=>{
					setsearchTerm(e.target.value);
					}}
					/>
					</div>
					</div>   


       
	<br/>
    <div class="content">
     <h2 class="title">Vaccination details List</h2>

	 
  
	 <br/>
	 <div>
	<table id="tableA" border="2px"  className="table table-bordered border-primary">
    
	  <thead >
		  
		<th>Vaccine ID </th>  
	    <th>Vaccine Name</th>
	    <th>Vaccine description</th>
		<th>Vaccine price</th>
		<th>Patient ID</th>
		<th>Bill ID</th>
	
		<th> Edit </th>
		<th> Delete </th>
        
      </thead>
    
     <tbody>
		 {Vaccines.filter(val =>{
                  if(searchTerm === ""){
						return val;
					} else if(
						val.pid.toLowerCase().includes(searchTerm.toLowerCase())||
						val.billid.toLowerCase().includes(searchTerm.toLowerCase())||
						val.vname.toLowerCase().includes(searchTerm.toLowerCase())
					){
						return val;
					}
}).map((user, index ) => (

		 <tr>

			 <td>{user.vid}</td>
		     <td>{user.vname}</td>
		     <td>{user.vdesc}</td>
		     <td>{user.price}</td>
		     <td>{user.pid}</td>
		     <td>{user.billid}</td>
             
			 
			
			 <td>
				<Link className="edit" to={`/editvaccine/${user._id}`}> 
			    <button type="submit" className="edit"><b>Edit</b></button>
				</Link>
			 </td>
			 <td>
			   <Link className="delete" to={'/viewvaccine'} onClick={()=> deleteVaccine(user._id)}>
			     <button type="submit" name="delete_btn" className="delete"><b>Delete</b></button>
			  </Link>
			 </td>
		  </tr>
		 ))}
        
		</tbody>
    </table>
	</div>
	<p></p><p></p><p></p><p></p><p></p><p></p>
	<Link to={'/dashboard'} > 
       <button type="submit" className="addvbtn"><b>back</b></button>
        </Link>
  </div>	
 </div>
 </div>
    );
}
export default VaccineList;
