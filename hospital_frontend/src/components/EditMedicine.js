import React, {useState,useEffect} from "react"
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";


export default function EditMedicine(){
//EditStock
  let history = useHistory();
  const {id} = useParams();
  const [users,setUsers] = useState({
    m_name:"",
    mid:"",
    m_type:"",
    m_desc:""
  })


  
 const {m_name, mid, m_type, m_desc} = users;     
const onInputChange = e =>{      
  setUsers({...users, [e.target.name]: e.target.value});     
};   
  useEffect(()=> { 
        loadUser();   
  }, []);   
  const onSubmit = async e => {    
    e.preventDefault();   
    // setErrors(validation(values));         a
    await axios.put(`http://localhost:8070/medicine/update/${id}`, users)
    //`http://localhost:8070/stock/up/${id}`   
     history.push("/mview"); 
    //    history.push("/sview"); 
  };   
  
  
   const loadUser = async () => {      
      const result = await axios.get(`http://localhost:8070/medicine/get/${id}`);
      //`http://localhost:8070/stock/push/${id}`           
      setUsers(result.data);  
    };



    return(
      <div className="container">
        <h1>Edit Medicine Form</h1>


        <div className="container">
            <form onSubmit={e => onSubmit(e)}>

    
              <div className="mb-3">
                <label for="m_name">Medicine Name</label>
                <input type="text" className="form-control" id="m_name" placeholder="Enter Medicine Name" name="m_name" value ={m_name} onChange={(e)=> onInputChange(e)
                }/>

     
   </div>

   <div className="mb-3">
                <label for="mid" >Medicine ID</label>
                <input type="text" className="form-control" id="mid" placeholder="Enter Medicine ID" name="mid" value ={mid} onChange={(e)=> onInputChange(e)
                }/>

    </div>


    <div className="mb-3">
                <label for="m_type">Medicine Type</label>
                <input type="text" className="form-control" id="m_type" placeholder="Enter Medicine Type" name="m_type" value ={m_type} onChange={(e)=> onInputChange(e)
                }/>

    </div>

    <div className="mb-3">
                <label for="m_desc" >Medicine Desciption</label>
                <input type="text" className="form-control" id="m_desc" placeholder="Enter Medicine Description" name="m_desc" value ={m_desc} onChange={(e)=> onInputChange(e)
                }/>

    </div>


    
   <button type="submit" class="btn btn-primary">Update Details</button>
 </form>
</div>
</div>
    )
}