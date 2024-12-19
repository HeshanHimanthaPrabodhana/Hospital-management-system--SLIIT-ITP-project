import React, {useState} from "react"
import axios from "axios";
import { useHistory } from "react-router";

export default function AddMedicine(){
  let history = useHistory();



  const [m_name, setM_name] = useState("");
  const [mid, setMid] = useState("");
  const [m_type, setM_type] = useState("");
  const [m_desc, setM_desc] = useState("");


  function sendData(e){
    e.preventDefault();
    //alert("insert");
     
       
        const newMedicine ={

          m_name,
          mid,
          m_type,
          m_desc

        }

        axios.post("http://localhost:8070/medicine/add",newMedicine).then(()=>{
            alert("Medicine Added") 
            history.push("/mview");  
        }).catch((err)=>{
            alert(err)
        })



        console.log(newMedicine);
  
  }


    return(
      <div className="container">
        <h1>Add Medicine Form</h1>

      
    

        <div className="container">
            <form onSubmit={sendData}>
              <div className="mb-3">
                <label for="m_name" >Medicine Name</label>
                <input type="text" className="form-control" id="m_name" placeholder="Enter Medicine Name" onChange ={(e)=>{

                     setM_name(e.target.value);
                }}/>

     
   </div>

   <div className="mb-3">
                <label for="mid" >Medicine ID</label>
                <input type="text" className="form-control" id="mid" placeholder="Enter Medicine ID" onChange ={(e)=>{

                  setMid(e.target.value);
                }}/>

    </div>


    <div className="mb-3">
                <label for="m_type" >Medicine Type</label>
                <input type="text" className="form-control" id="m_type" placeholder="Enter Medicine Type" onChange ={(e)=>{

                  setM_type(e.target.value);
                }}/>

    </div>

    <div className="mb-3">
                <label for="m_desc" >Medicine Desciption</label>
                <input type="text" className="form-control" id="m_desc" placeholder="Enter Medicine Description" onChange ={(e)=>{

                  setM_desc(e.target.value);
                }}/>

    </div>


    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
   <button type="add" class="btn btn-primary me-md-2">Add</button>
  
   </div>
 </form>
</div>
</div>
    )
}