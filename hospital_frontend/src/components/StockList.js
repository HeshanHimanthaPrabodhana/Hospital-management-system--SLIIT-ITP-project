import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';


 


const StockList = () => {
  const [users, setUser] = useState([]);
  const[searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8070/stock/dis");
    setUser(result.data.reverse());
  };

  const deleteStock = async id => {
    await axios.delete(`http://localhost:8070/stock/remove/${id}`);
    swal({

      title: "Success",

      text: "Delete Successfully !!",

      icon: "success",

      button: "OK"

    });
    loadUsers();
  };


    
 // };
    return(

      
     <main id="site-main"> 
     
        <div className="container-list">
                   
        <h2 className="h2-user-list"><u>Stock List</u></h2>
            <div className="box-nav d-flex justify-between">
                <Link className="btn btn-secondary" to={'/dashboard'}>Back TO Home</Link>
               <Link  className="btn btn-primary" to={'/addst'}>
                     <b> Add Stock </b>
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
                               
                               <th>StockID</th>
                               <th>MedicineName</th>
                               <th>StockAmount</th>
                               <th>ExpireDate</th>
                               <th>Price</th>
                               <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody className="tbody">
                        {users.filter(val =>{

                                  if(searchTerm === ""){

                                      return val;

                                  } else if(

                                      val.sid.toLowerCase().includes(searchTerm.toLowerCase())||
                                      val.m_name.toLowerCase().includes(searchTerm.toLowerCase())||
                                      val.exp_date.toLowerCase().includes(searchTerm.toLowerCase())
                                      

                                  ){

                                      return val;

                                  }

                                  })
                                                          
                        
                        
                         .map((user, index) => (
                               <tr>
                               
                                <td>{user.sid}</td>
                                <td>{user.m_name}</td>
                                <td>{user.s_amount}</td>
                                <td>{user.exp_date}</td>
                                <td>{user.price}</td>
                                <td>
                                     

                                   <Link class="btn btn-success"  to={`/edits/${user._id}` }>
                                   <b> Edit </b>

                                     
                                  
                                       
                                     </Link>
                                       

                                     <Link class="btn btn-danger" onClick={() => deleteStock(user._id)}>
                                     <b> Delete </b>
                                    
                                  
                                       
                                     </Link>
                                </td>
                            </tr>
                              ))}
                        </tbody>
                    </table>
                </form>       

        
        </div>
     </main>   
    )
}

export default StockList;