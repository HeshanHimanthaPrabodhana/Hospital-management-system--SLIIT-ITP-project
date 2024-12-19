import React,{useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom";


export default function AddlabReport(){

    const [rid, setRid] = useState();  
    const [pid, setPid] = useState();  
    const [pname, setPname] = useState();  
    const [testtype, setTesttype] = useState();
    const [date, setDate] = useState();  
    const [rdesc, setRdesc] = useState();
    const [billid, setBillid] = useState();
  
    

    
    function sendData(e){
      e.preventDefault();
      
      const AddLabReport = {
        rid,
        pid,
        pname,
        testtype,
        date,
        rdesc,
        billid
      }
      
      axios.post("http://localhost:8070/lab/add",AddLabReport).then(()=>{
        alert("Lab report added")


      }).catch((err)=>{
          alert(err)
      })

    }


    return(
<div id="front">
      <div className="container">
    
    <div className="fun">
      <span>Lab Reports Management</span>
      </div>
           <br/>
    <form onSubmit={sendData}>

    <h3 className="h3">Adding Lab Reports</h3> <p></p><p></p><br/>
  
    <div class="mb-3">
    <label for="Test type" >Report ID</label>
    <input type="text" class="form-control" id="InputTesttype" placeholder="Enter Report ID" onChange={(e)=>{
         
         setRid(e.target.value);
    }}/>

  </div>

  <div class="mb-3">
    <label for="Test type">Patient ID</label>
    <input type="text" class="form-control" id="InputDescription" placeholder="Enter patient's ID" onChange={(e)=>{
         
         setPid(e.target.value);
    }}required/>
  </div>

  <div class="mb-3">
    <label for="Test type" >Patient's Name</label>
    <input type="text" class="form-control" id="InputDescription" placeholder="Enter patient's name" onChange={(e)=>{
         
         setPname(e.target.value);
    }}required/>
  </div>

  <div class="form-group">
    <label for="Test type">Test type</label >
    <select type="text" class="form-control" id="exampleFormControlSelect1" onChange={(e)=>{
         
         setTesttype(e.target.value);
    }}>
      <option>PCR</option>
      <option>Antigen</option>
      <option>Lipid Profile</option>
      <option>FBS</option>
      <option>ESR</option>
    </select>
  </div>
    
  <div class="mb-3">
    <label for="Test type" >report description</label>
    <input type="text" class="form-control" id="InputDescription" placeholder="Enter Report description" onChange={(e)=>{
         
         setRdesc(e.target.value);
    }}required/>
  </div>

  <form action="/AddLabReport">
  <label>
    Enter the date:</label><br/>
    <input type="date" name="bday" onChange={(e)=>{
         
         setDate(e.target.value);
    }}required />
    <br/>
  
</form>



<div class="mb-3">
    <label for="Test type" >Bill Id</label>
    <input type="text" class="form-control" id="InputDescription" placeholder="Enter Bill ID" onChange={(e)=>{
         
         setBillid(e.target.value);
    }}required/>
  </div>



<br/>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<br/>

<Link to={'/viewlab'} > 
       <button type="submit" className="addvbtn"><b>back</b></button>
        </Link>


</div> </div>
    )
}
