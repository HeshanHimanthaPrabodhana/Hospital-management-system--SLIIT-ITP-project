import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ImUserPlus } from 'react-icons/im'
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
const PresList = () => {
  const[prescripts, setPrescript] = useState([]);
  const[searchTerm, setsearchTerm] = useState("");
  useEffect(()=>{
		loadPrecripts();
	},[]);

	const loadPrecripts = async ()=>{
		const result = await axios.get("http://localhost:8070/prescription/");
		setPrescript(result.data.reverse());
	};

	const deletePrescript = async id =>{
		await axios.delete(`http://localhost:8070/prescription/pdelete/${id}`);
    swal({
			title: "Success",
			text: "Prescription Deleted Successfully!",
			icon: "success",
			button: "OK"
		  });
		loadPrecripts();
	};


    return(
        <div>
        <div className="fun">
        <span>Prescription Management</span>
        </div>
          <div class="admin">
          <Link to={'/dashboard'} > 
       <button type="submit" className="dash"><b>Dashboard</b></button>
        </Link>
          <Link to={'/addPres'}>
         <button type="submit" className="addbtn"><b>Add New Prescription</b></button>
          </Link>

       <div class="search-container">
        <form className="search">
          <input type="text" placeholder="Search Doctor" name="search" onChange={(e)=>{
             setsearchTerm(e.target.value);
		   }}/>
        </form>
      </div>
         
      <br></br>
				<br></br>

      <div class="container-list">
        <form>
    
      <table className="table">
      
        <thead className="thead-dark">
        <tr>
          <th> Presciption ID </th>
          <th> Patient Name </th>
          <th> Patient Age</th>
          <th> Doctor Name</th>
          <th> Description</th>
          <th> Action </th>
          </tr>
        </thead>
      
       <tbody className="tbody">
          {prescripts.filter(val =>{
		      	if(searchTerm === ""){
			      	return val;
		      	} else if(
			    	val.patientName.toLowerCase().includes(searchTerm.toLowerCase())||
			    	val.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
		    	){
			    	return val;
		      	}
		    }).map((prescript, index ) => (
           <tr>
               
               <td>{prescript.presID}</td>
               <td>{prescript.patientName}</td>
               <td>{prescript.patientAge}</td>
               <td>{prescript.doctorName}</td>
               <td>{prescript.description}</td>

              
			 <td>
				       <Link className="btn btn-info" to={`/viewPres/${prescript._id}`}> 
                <AiFillEye size="23px" color="white"/>
				        </Link>
			
                 <Link className= "btn btn-success" to={`/editPres/${prescript._id}`}>
                 <AiFillEdit size="23px" color="white"/>
                                  
                  </Link>
               
               <Link className="btn btn-danger" onClick={()=> deletePrescript(prescript._id)}>
               <FaTrashAlt size="23px" color="white"/>

              </Link>
               </td>
            </tr>
            ))}
        
          </tbody>
      </table>
      </form>
    </div>	
   </div>
   </div>
    );
}
export default PresList;