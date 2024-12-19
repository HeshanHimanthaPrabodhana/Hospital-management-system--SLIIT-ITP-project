import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import { FaChevronCircleDown } from 'react-icons/fa';

export default function AddUserPayment(){

  let history = useHistory();

    const [card_holder_name, setCardHolderName] = useState("");
    const [card_num, setCardNo] = useState("");
    const [card_exdate, setCardEx] = useState("");
    const [card_cvv, setCvv] = useState("");

    

    function sendData(e){
      e.preventDefault();
      

      const newUserPayment ={
        card_holder_name,
        card_num,
        card_exdate,
        card_cvv
      }

      
       axios.post("http://localhost:8070/usercard/upadd",newUserPayment).then(()=>{
        swal({

          title: "Success",
  
          text: "Card Added Successfully!",
  
          icon: "success",
  
          button: "OK"
  
        });
           
       }).catch((err)=>{
          alert(err)
       })

    }


    return(

      <div className="add_userpay">
        <form onSubmit={sendData}> 
           <center><h1>Card Insert</h1></center>

           <div className="gl-0">
                  <label for="card_holder_name" className="form-label">Card Holder</label>
                  <input type="text" className="form-control" id="card_holder_name" placeholder="Enter Card Holder Name" 
                  onChange={(e)=>{
                    setCardHolderName(e.target.value);
                  }}/>
              </div>
              
              <div className="gl-1">
                  <label for="card_num" className="form-label">Card Number</label>
                  <input type="text" className="form-control" id="card_num" placeholder="Enter Your Card Number" maxLength="12" pattern="[0-9]{5}[0-9]{7}"
                  onChange={(e)=>{
                    setCardNo(e.target.value);
                  }}/>
              </div>

              <div className="gl-2">
                  <label for="card_exdate" className="form-label">Card Expire Date</label><br />
                  <input type="date" className="span5" id="card_exdate" placeholder="Enter Date" required
                  onChange={(e)=>{
                    setCardEx(e.target.value);      
                  }}/> 
              </div>

              <div className="gl-3">
                  <label for="card_cvv" className="form-label">Enter CVV</label>
                  <input type="password" className="form-control" id="card_cvv"  oninvalid="this.setCustomValidity('Please Enter Card CVV')" placeholder="Enter Card CVV" maxLength="3" pattern="[0-9]{3}"
                  onChange={(e)=>{
                    setCvv(e.target.value);
                  }}/>
              </div>

              <br></br>
                  <button type="submit" className="btn0 btn-primary">Add Pay</button>
           </form>
           <a href="#"><button type="submit" className="btn1 btn-primary">Cancel</button></a>


       </div>
        

  /*     <div class="row-fluid">
        <center>
      <form class="form-horizontal  mt-5  mb-5"style={{ background:"Grey",width:"35%"}}>
        <fieldset>
          <div id="legend">
            <legend class=" "style={{ color: "black" , fontSize:"50px"}}>Card Insert</legend>
          </div><br />
     
        
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <label class="control-label"  for="username">Card Holder's Name</label>
            <div class="controls">
              <input type="text" id="username" name="username" placeholder="" class="input-xlarge"style={{ color: "black" }}/>
            </div>
          </div>
     
          
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <label class="control-label" for="email">Card Number</label>
            <div class="controls">
              <input type="text" id="email" name="email" placeholder="" class="input-xlarge"style={{ color: "black" }}/>
            </div>
          </div>
     
        
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <label class="control-label" >Card Expiry Date</label>
            <div class="controls">
              <select class="span3 " name="expiry_month" id="expiry_month"style={{ color: "black" }}>
                <option selected>select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">Auguest</option>
                <option value="September">September</option>
                <option value="Octomber">Octomber</option>1
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select class="span2"  name="expiry_year"style={{ color: "black" }}>
              <option selected>select Year</option>
                <option value="13">2013</option>
                <option value="14">2014</option>
                <option value="15">2015</option>
                <option value="16">2016</option>
                <option value="17">2017</option>
                <option value="18">2018</option>
                <option value="19">2019</option>
                <option value="20">2020</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
              </select>
            </div>
          </div>
     
          
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <label class="control-label"  for="password_confirm">Card CVV</label>
            <div class="controls">
              <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="span2"style={{ color: "black" }}/>
            </div>
          </div>
     
          
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <div class="controls">
              <label class="checkbox mt-2" for="save_card">
                <input type="checkbox" id="save_card" value="option1"/>
                Save card on file?
              </label>
            </div>
          </div>
     
          
          <div class="control-group">
            <div class="controls">
              <button class="btn btn-success mt-5 mb-5"style={{ color: "white" , fontSize:"20px"}}>Pay Now</button>
            </div>
          </div>
     
        </fieldset>
      </form>
      </center>
    </div>      */

    )

}