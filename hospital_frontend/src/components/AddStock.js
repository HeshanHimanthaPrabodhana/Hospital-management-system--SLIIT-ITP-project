import React, {useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function AddStock(){

let history= useHistory();

  const [sid, setSid] = useState("");
  const [m_name, setM_name] = useState("");
  const [s_amount, setS_amount] = useState("");
  const [exp_date, setExp_date] = useState("");
  const [price, setPrice] = useState("");


  function sendData(e){
    e.preventDefault();
   
       
        const newStock ={

          sid,
          m_name,
          s_amount,
          exp_date,
          price

        }

        axios.post("http://localhost:8070/stock/addstock",newStock).then(()=>{
          alert("Stock Added");
          history.push("/sview");
      }).catch((err)=>{
          alert(err)
      })
  }

    return(

      <div className="container">
        <h1>Add Stock Form</h1>

        <div>

<div className="container">
            <form onSubmit={sendData}>
              <div className="mb-3">
                <label for="sid" >Stock ID</label>
                <input type="text" className="form-control" id="sid" placeholder="Enter Stock ID" onChange={(e)=>{

                  setSid(e.target.value);
                }}/>

     
   </div>

   <div className="mb-3">
                <label for="m_name" >Medicine Name</label>
                <input type="text" className="form-control" id="m_name" placeholder="Enter Medicine Nmae" onChange={(e)=>{

                  setM_name(e.target.value);
                }}/>

    </div>


    <div className="mb-3">
                <label for="s_amount" >Stock Amount</label>
                <input type="text" className="form-control" id="s_amount" placeholder="Enter Stock Amount" onChange={(e)=>{

                  setS_amount(e.target.value);
                }}/>

    </div>

    <div className="mb-3">
                <label for="exp_date" >Expire Date</label>
                <input type="text" className="form-control" id="exp_date" placeholder="Enter Expire Date" onChange={(e)=>{

                  setExp_date(e.target.value);
                }}/>

    </div>

    <div className="mb-3">
                <label for="price" >Price</label>
                <input type="text" className="form-control" id="price" placeholder="Enter Price" onChange={(e)=>{

                  setPrice(e.target.value);
                }}/>

    </div>



    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
   <button type="submit" class="btn btn-primary me-md-2">Add</button>
   <Link to= {"/sview"}>
      
   <button type="submit" class="btn btn-warning">Back</button>
   </Link>
   </div>
 </form>
</div>
        </div>
        </div>

    )
}
