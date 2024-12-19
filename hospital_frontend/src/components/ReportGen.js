import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGen = Patient =>{

    const doc = new jsPDF();

    const tableColumn = ["PatientName","Email","Gender","PhoneNumber"];
    const tableRows = [];

    Patient.forEach(user => {
        const userData = [
            user.pname,
            user.pemail,
            user.gender,
            user.phonenum
 
        ]

        tableRows.push(userData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("All Patients Registered List",14,15);
    doc.save(`Patient_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGen;