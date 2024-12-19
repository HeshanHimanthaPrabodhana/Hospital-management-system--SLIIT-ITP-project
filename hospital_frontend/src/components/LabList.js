import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


const LabList= ()=>{
	const[LabReports, setLabReports] = useState([]);
	const[searchTerm, setsearchTerm] = useState("");
	
    
	useEffect(()=>{
		loadUsers();
	},[]);

	const loadUsers = async ()=>{
		const result = await axios.get("http://localhost:8070/lab/");
		setLabReports(result.data.reverse());
	};

	const deleteLab = async id =>{
		await axios.delete(`http://localhost:8070/lab/delete/${id}`);
		swal({
			title: "Success",
			text: "Lab Report Deleted Successfully!",
			icon: "success",
			button: "OK"
		  });
		loadUsers();
	};
	





    return(
        <div>
			<br/><br/>
			
      <div className="fun">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>Lab report Management</span>
      </div>
        <div class="admin">
		<p></p><p></p>&nbsp;&nbsp;&nbsp;&nbsp;

	    <Link to={'/addlab'} > 
       <button type="submit" className="addvbtn"><b>+ Add New Lab Report</b></button>
        </Link>
		<p></p><p></p>
		
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




	<br/><br/>
       
    <div class="content">
     <h2 class="title">Lab Report List</h2>
  
	<table id="tableA" border="1px"  className="table table-bordered border-primary">
    
	  <thead>
		  
		<th>Report ID </th>  
	    <th>Patient ID </th>
		<th>Patient's Name</th>
	    <th>Test type</th>
		<th>Date</th>
		<th>Report description</th>
        <th>billId</th>
		<th> Edit </th>
		<th> Delete </th>
        
      </thead>
    
     <tbody>
		 {LabReports.filter(val =>{
                  if(searchTerm === ""){
						return val;
					} else if(
						val.pid.toLowerCase().includes(searchTerm.toLowerCase())||
						val.billid.toLowerCase().includes(searchTerm.toLowerCase())||
						val.testtype.toLowerCase().includes(searchTerm.toLowerCase())
					){
						return val;
					}

}).map((user, index ) => (
		 <tr>
			
			 <td>{user.rid}</td>
			 <td>{user.pid}</td>
		     <td>{user.pname}</td>
		     <td>{user.testtype}</td>
		     <td>{user.date}</td>
		     <td>{user.rdesc}</td>
             <td>{user.billid}</td>
			 
			
			 <td>
				<Link className="edit" to={`/editlab/${user._id}`}> 
			    <button type="submit" className="edit"><b>Edit</b></button>
				</Link>
			 </td>
			 <td>
			   <Link className="delete" to={'/viewlab'} onClick={()=> deleteLab(user._id)}>
			     <button type="submit" name="delete_btn" className="delete"><b>Delete</b></button>
			  </Link>
			 </td>
		  </tr>
		 ))}
        
		</tbody>
    </table>
	<p></p><p></p><p></p><p></p><p></p>
	<Link to={'/dashboard'} > 
       <button type="submit" className="addvbtn"><b>back</b></button>
        </Link>

  </div>	
 </div>
 </div>
    );
}
export default LabList;

