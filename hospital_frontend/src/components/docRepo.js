import axios from 'axios';
import React,{useState,useEffect} from 'react';
import reportDoc from './reportDoc';
import { Link } from "react-router-dom";


export default function ReportD(){

    const[doctors,setDoctors] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/doctor/").then((res)=>{
            setDoctors(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <div>
            <div>
                <div class="container">
                <center><h1>Latest Updates</h1></center><br /><br />
                <center><p>Click the button below to get all the details about all the payments. </p></center><br />
                <center><button className="btn20 btn-primary"  onClick={()=>{reportDoc(doctors)}}>Generate PDF</button></center><br /><br />

                    
                <center><Link to="/listDoctor"><button type="submit" className="btn21 btn-primary">Back</button></Link></center>
                    
                </div>
            </div>
        </div>
    )

}