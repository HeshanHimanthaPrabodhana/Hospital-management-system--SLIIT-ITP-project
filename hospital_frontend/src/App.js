import React from 'react';
//frontend lakindu
import Header from './components/header';
import Home from './components/home';
import Formdoc from './components/adddoctor';
import Images from './components/image';
import Footer from './components/footer';
import docview from './components/viewDoc';
import EditDoc from './components/editdoctor';
import listDoc from './components/doctorList';
import Formpres from './components/addpres';
import editPres from './components/editpres';
import listPres from './components/presList';
import presview from './components/viewPres';
import reportD from './components/docRepo';
import reportDoc from './components/reportDoc';
import './CSS/header_footer.css';
//frontend tharindu
import './CSS/payment.css';
import AddPayment from './components/AddPayment';
import AllPayment from './components/AllPayments';
import ViewPay from './components/viewpay';
import EditPayment from './components/EditPayments';
import ViewPayment from './components/ViewPayment';
import AddWard from './components/AddWard';
import AllWard from './components/AllWards';
import ViewWar from './components/viewwar';
import EditWard from './components/EditWards';
import ViewWard from './components/ViewWard';
import userpay from './components/AddUserPayment';

//frontend saranga
import UserList from './components/UserList';
import UpdateUser from './components/Update';
import FormLogin from './components/Login';
import PatientLogin from './components/PatientLogin';
import FirstOne from './components/FirstOne';
import User from './components/view';
import SignUp from './components/SignUp';
import AddUser from './components/addusers';
import PatientList from './components/PatientList';
import EditPatient from './components/EditPatient';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import Cart from "./components/Cart";
import Pdashboard from './components/Pdashboard';
import Reset from './components/Reset';
import ReportGen from './components/ReportGen';
import RegList from './components/Plistview';

import './CSS/Login.css';
import './CSS/patientLogin.css';
import './CSS/FirstOne.css';
import './CSS/UserList.css';
import './CSS/cart.css';
//frontend Sahan
import AddlabReport from './components/AddLabReport';
import AddVaccine from './components/AddVaccine';
import LabList from './components/LabList';
import VaccineList from './components/VaccineList';
import EditLabReports from './components/EditLabReports';
import EditVaccines from './components/EditVaccines';
import './CSS/sahan.css';
//frontend dilmi

import AddMedicine from "./components/AddMedicine";
import AddStock from "./components/AddStock";
import EditMedicine from "./components/EditMedicine";
import EditStock from "./components/EditStock";
import List from "./components/MedicineList";
import StockList from "./components/StockList";

//frontend heshan

import AddAppointment from "./components/AddAppointment";
import AllAppointments from './components/AllAppointments';
import EditAppointment from "./components/EditAppointment";
import ViewAppointment from './components/ViewAppointment';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";



function App(props) {
  return (
    <Router>
    <div className="App">
       <Header/>
       <Images/>
       <Switch>
       <Route path="/dashboard" exact component={Home}/>  
       <Route path="/addDoc" exact component={Formdoc}/>
       <Route path="/editDoc/:id" exact component={EditDoc}/>
       <Route path="/listDoctor" exact component={listDoc}/>
       <Route path="/viewDoc/:id" exact component={docview}/>
       <Route path="/addPres" exact component={Formpres}/>
       <Route path="/editPres/:id" exact component={editPres}/>
       <Route path="/listPres" exact component={listPres}/>
       <Route path="/viewPres/:id" exact component={presview}/>
       <Route path="/add" exact component={AddPayment} />   
       <Route path="/repoDView" exact component={reportD} />   
       <Route path="/reportD" exact component={reportDoc} /> 


        <Route path="/payments" exact component={AllPayment} /> 
        <Route path="/viewpay/:id" exact component={ViewPay} /> 
        <Route path="/update/:id" exact component={EditPayment} />
        <Route path="/get/:id" exact component={ViewPayment} />   
        <Route path="/wardadd" exact component={AddWard} />  
        <Route path="/allwards" exact component={AllWard} />
        <Route path="/viewwar/:id" exact component={ViewWar} />
        <Route path="/updateward/:id" exact component={EditWard} />
        <Route path="/getward/:id" exact component={ViewWard} />  
        <Route path="/userpay" exact component={userpay} />  

         <Route path="/addUser" exact component={AddUser}/>
        <Route path="/logout" exact component={Logout}/>
        <Route path="/FirstPage" exact component={FirstOne}/>
        <Route path="/Login" exact component={FormLogin}/>
        <Route path="/patientLogin" exact component={PatientLogin}/>
        <Route path="/patientList" exact component={PatientList}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/update/:id" exact component={EditPatient}/>
        <Route path="/List" exact component={UserList}/>
        <Route path="/Edit/:id" exact component={UpdateUser}/>
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/dash" component={Pdashboard}/>
        <Route exact path="/reset" component={Reset}/>
        <Route exact path="/regList" component={RegList}/>
        <Route exact path="/reGen" component={ReportGen}/>

        <Route path="/addlab" exact component={AddlabReport} />
      <Route path="/addvaccine" exact component={AddVaccine} />
      <Route path="/viewlab" exact component={LabList} />
      <Route path="/viewvaccine" exact component={VaccineList} />
      <Route path="/editlab/:id" exact component={EditLabReports} />
      <Route path="/editvaccine/:id" exact component={EditVaccines} />
       
      <Route path="/sview" exact component={StockList}/>
        <Route path="/mview" exact component={List}/>
        <Route path="/addm" exact component={AddMedicine} />
        <Route path="/addst" exact component={AddStock}/>
        <Route path="/EditMedicine/:id" exact component={EditMedicine} />
        <Route path="/edits/:id" exact component={EditStock} />

        <Route path="/addAppoint" exact component={AddAppointment} />
         <Route path="/addList" exact component={AllAppointments} />
         <Route path="/aupdate/:id" exact component={EditAppointment} />
         <Route path="/aget/:id" exact component={ViewAppointment}/>
         
      
       </Switch>
       <Footer/>
       
    </div>
    </Router>
  );
}

export default App;
