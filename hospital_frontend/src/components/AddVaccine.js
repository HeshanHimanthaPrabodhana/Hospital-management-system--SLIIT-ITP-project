import React,{useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom";


export default function AddVaccine(){


    const [vid, setVid] = useState();  
    const [vname, setVname] = useState();  
    const [vdesc, setVdesc] = useState();  
    const [price, setPrice] = useState();
    const [pid, setPid] = useState();  
    const [billid, setBillid] = useState();
  
    
    function sendData(e){
      e.preventDefault();
      
      const newVaccine = {
        vid,
        vname,
        vdesc,
        price,
        pid,
        billid
      }
      
      axios.post("http://localhost:8070/vaccine/add",newVaccine).then(()=>{
        alert("vaccine details added")

      }).catch((err)=>{
          alert(err)
      })

    }


    return(
<div id="front">
 <div className="container">

<div className="fun">
      <span>Vaccine Management</span>
      </div>

    <form onSubmit={sendData}>

    <h3 className="h3">Adding Vaccination Details...</h3> <p></p><p></p><p></p>

    <div class="mb-3">
    <label for="Test type" >Vaccine ID</label>
    <input type="text" class="form-control" id="InputTesttype" placeholder="Enter vaccine ID" onChange={(e)=>{
         
         setVid(e.target.value);
    }}required/>
  </div>
    


  <div class="form-group">
    <label for="Test type">Vaccine name</label >
    <select type="text" class="form-control" id="exampleFormControlSelect1" onChange={(e)=>{
         
         setVname(e.target.value);
    }}>
      <option>Sinopharm</option>
      <option>Astrazenica</option>
      <option>Pfizer</option>
    </select>
  </div>
    

  <div class="mb-3">
    <label for="Test type" >Vaccine Description</label>
    <input type="text" class="form-control" id="InputDescription" placeholder="Enter vaccine description" onChange={(e)=>{
         
         setVdesc(e.target.value);
    }}required/>
  </div>

  <div class="mb-3">
    <label for="Test type" >Price</label>
    <input type="text" class="form-control" id="InputDescription" placeholder="Enter price" onChange={(e)=>{
         
         setPrice(e.target.value);
    }}required/>
  </div>
  
  <div class="mb-3">
    <label for="Test type" >Patient ID</label>
    <input type="text" class="form-control" id="InputTesttype" placeholder="Enter Patient's ID" onChange={(e)=>{
         
         setPid(e.target.value);
    }}required/>
  </div>

  <div class="mb-3">
    <label for="Test type" >Bill ID</label>
    <input type="text" class="form-control" id="InputTesttype" placeholder="Enter Bill ID" onChange={(e)=>{
         
         setBillid(e.target.value);
    }}required/>
  </div>
    

    

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
              <br/>
<Link to={'/viewvaccine'} > 
       <button type="submit" className="addvbtn"><b>back</b></button>
        </Link>

</div>
</div>




    )
}
