import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import { useHistory } from 'react-router';
import {FaTrashAlt} from 'react-icons/fa'

const AllPayments = () => {
  const [payments, setPayments] = useState([]);

 /* let history = useHistory();   */


  const[searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8070/payment/");
    setPayments(result.data.reverse());
  };


  function deletePayment(id) {
    axios.delete(`http://localhost:8070/payment/delete/${id}`).then(() => {
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
  }
  /* const deletePayment = async id =>{
    await axios.delete(`http://localhost:8070/payment/delete/${id}`);
    alert("Payment Deleted")
    loadUsers();
  };  */

  return (
    <div>

    <main id="site-main"> 
     
        <div className="container-list">
                  
        <br></br>
        <h2 className="h2-user-list"><u>All Payments</u></h2>
            <div className="box-nav d-flex justify-between">
                <Link className="btn btn-secondary" to={'/dashboard'}>Back TO Home</Link>
               <Link  className="btn btn-primary" to={'/add'}>
                     <b> Add Payment </b>
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
                               
              <th scope="col">Bill ID</th>
              <th scope="col">Patint Name</th>
              <th scope="col">Patient Nic</th>
              <th scope="col">Phone No</th>
              <th scope="col">Service Obtain</th>
              <th scope="col">Amount (Rs.)</th>
              <th scope="col">Method</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody className="tbody">
                        {payments.filter(val =>{

                                  if(searchTerm === ""){

                                      return val;

                                  } else if(

                                      val.patient_id.toLowerCase().includes(searchTerm.toLowerCase())||
                                      val.patient_name.toLowerCase().includes(searchTerm.toLowerCase())

                                  ){

                                      return val;

                                  }

                                  })
                                                          
                        
                        
                         .map((user, index) => (
                               <tr>
                               
                <td>{user.patient_id}</td>
                <td>{user.patient_name}</td>
                <td>{user.patient_nic}</td>
                <td>{user.p_num}</td>
                <td>{user.ser_obtain}</td>
                <td>{user.amount}</td>
                <td>{user.pay_method}</td>
                <td>{user.date}{user.month}{user.year}</td>
                <td>{user.time}</td>
                                <td>

                                   <Link class="btn btn-info"  to={`/viewpay/${user._id}` }>
                                      <AiFillEye size="23px" color="white"/>
                                  
                                       
                                     </Link>  

                                   <Link class="btn btn-success"  to={`/update/${user._id}` }>
                                      <AiFillEdit size="23px" color="white"/>
                                  
                                       
                                     </Link>
                                       

                                     <Link class="btn btn-danger" onClick={() => deletePayment(user._id)}>
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

export default AllPayments; 