import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen from './ReportGen';
import { Link } from "react-router-dom";


export default function RegList(){

    const[patient,setPatient] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/patient/fetch").then((res)=>{
            setPatient(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <div>
            <div>
                <div class="container">
                <center><h1>All Curently Patients Registered List In Our Hospital </h1></center><br /><br />
                <center><p>Click the button below to get all the details about all patients in our hospital. </p></center><br />
                <center><button className="btn20 btn-info"  onClick={()=>{ReportGen(patient)}}>Generate PDF</button></center><br /><br />

                    
                <center><Link to="/patientList"><button type="submit" className="btn21 btn-primary">Back to patient Table</button></Link></center>
                    
                </div>
            </div>
        </div>
    )

}