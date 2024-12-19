import React,{useState}  from "react";
import axios from "axios";
import {useHistory }  from "react-router-dom";
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Si1Password} from 'react-icons/si'
import {CgArrowsExpandUpLeft} from 'react-icons/cg'
import {AiFillPhone} from 'react-icons/ai'
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';

 function SignUp() {    

          let history = useHistory();
          const [pname,setPname] = useState("");
          const [pemail,setPemail]= useState("");
          const [fpassword,setFpassword]= useState("");
          const [cpassword,setCpassword]= useState("");
          const [gender,setGender]= useState("");
          const[phonenum,setPhonenum] = useState("");
          

          function sendDetails(e){
          e.preventDefault();

               const  newPatient = {

               pname,
               pemail,
               fpassword,
               cpassword,
               gender,
               phonenum
               }
     
     axios.post("http://localhost:8070/patient/reg",newPatient).then(()=>{

          swal({

               title: "Success",
       
               text: "Registration Successfull !!",
       
               icon: "success",
       
               button: "OK"
       
             });

         
          console.log(" Registration Successfull");


         history.push("/patientLogin");
         

         

         

     }).catch((err)=> {

          
          swal({

               title: "Warning",
       
               text: "Invalid Registration !!",
       
               icon: "warning",
       
               button: "OK"
       
             });
          
          console.log("Invalid Registration");
     })

   };



     return(
         <>
        <h1> Sign Up Here </h1>
        <div className="col-10 offset-1 col-lg-7 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">   
   
          <form action="/List" onSubmit={sendDetails} className="row g-3">
          <div className="col-md-6">
            <label forName="fullname" className="form-labe">Full Name</label>
            <input type="text" className="form-control" 
             name = "pname"
             id="pname"
             placeholder="Your Name"
             onChange={(e)=>{ setPname(e.target.value); }}
             required
            />
          </div>
          <div className="col-md-6">
            <label forName="pemail" className="form-labe"> <MdEmail size="20px" />Email</label>
            <input type="email" className="form-control" 
                id="pemail"
                placeholder="Your Email"
                onChange={(e)=>{ setPemail(e.target.value); }}
                required
            />
          </div>
          <div className="col-12">
            <label forName="fpassword" className="form-labe"><RiLockPasswordFill size="20px" />Password</label>
            <input type="password" className="form-control"
                 id="fpassword"
                 name="fpassword"
                 placeholder="Your Password "
                 minlength="5" maxlength="8"
                 onChange={(e)=>{ setFpassword(e.target.value); }}
                 required
            />
          </div>
          <div className="col-12">
            <label forName="cpassword" className="form-labe"><Si1Password size="20px" />Confirm Password</label>
            <input type="password" className="form-control" 
                    name="cpassword"
                    id="cpassword"
                    minlength="5" maxlength="8"
                     placeholder="Your Confirm Password"
                     onChange={(e)=>{ setCpassword(e.target.value); }}
                     required           
            />
          </div>
          <div className="col-md-4">
            <label forName="gender" className="form-labe"><AiFillPhone size="20px" />Gender</label>
            <select  className="form-select"
            
               name="gender"
               id="gender"
           
               onChange={(e)=>{ setGender(e.target.value); }}
               required
            
               >
              <option value="gender">gender</option>
              <option  value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="col-12">
            <label forName="phonenum" className="form-labe"> <AiFillPhone size="20px" />Phone Number</label>
            <input type="number" className="form-control" 
                    name="phonenum"
                    id="phonenum"
                    placeholder="Your Phone Number[0776123456]"
                    maxLength="10" pattern="[0-9]{3}[0-9]{7}"
                    onChange={(e)=>{ setPhonenum(e.target.value); }}
                    required         
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">SIGN UP</button>
          </div>
          <NavLink to="/patientLogin" classNameName="signup-image-link"><b><u>I am already register</u></b></NavLink>
        </form>
        
       </div>
       </>   
     ) 
}
export default SignUp;