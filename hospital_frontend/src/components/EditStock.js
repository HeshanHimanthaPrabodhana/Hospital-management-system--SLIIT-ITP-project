 import React, {useState,useEffect} from "react"
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";


export default function EditStock(){
//EditStock
  let history = useHistory();
  const {id} = useParams();
  const [users,setUsers] = useState({
    sid:"",
    m_name:"",
    s_amount:"",
    exp_date:"",
    price:""

  })


  
 const {sid, m_name, s_amount, exp_date, price} = users;     
const onInputChange = e =>{      
  setUsers({...users, [e.target.name]: e.target.value});     
};   
  useEffect(()=> { 
        loadUser();   
  }, []);   
  const onSubmit = async e => {    
    e.preventDefault();   
    // setErrors(validation(values));         a
    await axios.put(`http://localhost:8070/stock/up/${id}`, users)
    //`http://localhost:8070/stock/up/${id}`   
     history.push("/sview"); 
    //    history.push("/sview"); 
  };   
  
  
   const loadUser = async () => {      
      const result = await axios.get(`http://localhost:8070/stock/show/${id}`);
      //`http://localhost:8070/stock/push/${id}`           
      setUsers(result.data);  
    };



    return(
      <div className="container">
        <h1>Edit Stock Form</h1>


        <div className="container">
            <form onSubmit={e => onSubmit(e)}>

    
              <div className="mb-3">
                <label for="sid">Stock ID</label>
                <input type="text" className="form-control" id="sid" placeholder="Enter Medicine ID" name="s_id" value ={sid} onChange={(e)=> onInputChange(e)
                }/>

     
   </div>

   <div className="mb-3">
                <label for="m_name" >Stock Name</label>
                <input type="text" className="form-control" id="m_name" placeholder="Enter Medicine Name" name="m_name" value ={m_name} onChange={(e)=> onInputChange(e)
                }/>

    </div>


    <div className="mb-3">
                <label for="m_type" >Stock Amount</label>
                <input type="text" className="form-control" id="m_type" placeholder="Enter Medicine Type" name="s_amount" value ={s_amount} onChange={(e)=> onInputChange(e)
                }/>

    </div>

    <div className="mb-3">
                <label for="m_desc" >Expire Date</label>
                <input type="text" className="form-control" id="m_desc" placeholder="Enter Medicine Description" name="exp_date" value ={exp_date} onChange={(e)=> onInputChange(e)
                }/>

    </div>
    

<div className="mb-3">
             <label for="mid" >Price</label>
             <input type="text" className="form-control" id="mid" placeholder="Enter Medicine ID" name="price" value ={price} onChange={(e)=> onInputChange(e)
             }/>

 </div>
     


    
   <button type="submit" class="btn btn-primary">Update Details</button>
 </form>
</div>
</div>
    )
}