import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import { useHistory } from 'react-router';
import {FaTrashAlt} from 'react-icons/fa'


const AllWards = () =>{
const [wards, setWards] = useState([]);
let history = useHistory();
const[searchTerm, setsearchTerm] = useState("");

useEffect(() => {
      loadUsers();
}, []);

const loadUsers = async ()=>{
  const result = await axios.get("http://localhost:8070/ward/allwards");
  setWards(result.data.reverse());
};

function deleteWard(id) {
  axios.delete(`http://localhost:8070/ward/deleteward/${id}`).then(() => {
   /* alert("Delete Successfully"); */
    swal({

      title: "Success",

      text: "Payment Delete Successfully!",

      icon: "success",

      button: "OK"

    });
    loadUsers();
  }).catch((err) => {
    console.log(err);
  })
  //window.location.reload();
}
/*
const deleteWard = async id =>{
  await axios.delete(`http://localhost:8070/ward/deleteward/${id}`);
  alert("Ward Deleted")
  loadUsers();
};

*/


return(

  <div>

  <main id="site-main"> 
   
      <div className="container-list">
                
      <br></br>
      <h2 className="h2-user-list"><u>All Wards</u></h2>
          <div className="box-nav d-flex justify-between">
              <Link className="btn btn-secondary" to={'/dashboard'}>Back to Home</Link>
             <Link  className="btn btn-primary" to={'/wardadd'}>
                   <b> Add Ward </b>
              </Link>

            </div>
            <div   className="search">
            
            <div className=" col-lg-3 mt-2 mb-2 mr-1">
              <input
              className="form-control"
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

              <br></br>
              
             <form>
                 <table className="table">
                     <thead className="thead-dark">
                         <tr>
                             
             <th scope="col">Ward ID</th>
             <th scope="col">Ward Name</th>
             <th scope="col">Ward Catogory</th>
             <th scope="col">Total Bed Amount</th>
             <th scope="col">Empty Beds Amount</th>
             <th scope="col">Action</th>

                          </tr>
                      </thead>
                      <tbody className="tbody">
                      {wards.filter(val =>{

                                if(searchTerm === ""){

                                    return val;

                                } else if(

                                    val.ward_id.toLowerCase().includes(searchTerm.toLowerCase())||
                                    val.ward_name.toLowerCase().includes(searchTerm.toLowerCase())

                                ){

                                    return val;

                                }

                                })
                                                        
                      
                      
                       .map((user, index) => (
                             <tr>
                             
             <td>{user.ward_id}</td>
             <td>{user.ward_name}</td>
             <td>{user.ward_catogory}</td>
             <td>{user.total_bed_amount}</td>
             <td>{user.empty_beds}</td>
                              <td>

                                 <Link class="btn btn-info"  to={`/viewwar/${user._id}` }>
                                    <AiFillEye size="23px" color="white"/>
                                
                                     
                                   </Link>  

                                 <Link class="btn btn-success"  to={`/updateward/${user._id}` }>
                                    <AiFillEdit size="23px" color="white"/>
                                
                                     
                                   </Link>
                                     

                                   <Link class="btn btn-danger" onClick={() => deleteWard(user._id)}>
                                   <FaTrashAlt size="23px" color="white"/>
                                
                                     
                                   </Link>
                              </td>
                          </tr>
                            ))}
                      </tbody>
                  </table>
              </form>       

      
      </div>
   </main>   
   </div>
  
)
}

export default AllWards;