import jsPDF from 'jspdf';
import 'jspdf-autotable';

const reportDoc = Doctor =>{
    const doc = new jsPDF();

    const tableCol = ["ID", "Name", "Phone Number", "Email", "Gender", "Specialization"];
    const tableRow = [];

    Doctor.forEach(user => {
        const userData =[
        user.did,
        user.name,
        user.contact,
        user.email,
        user.gender,
        user.speciality
        ]
        tableRow.push(userData);
    });
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    doc.autoTable(tableCol,tableRow,{startY:20});
    doc.text("All Doctor List",14,15);
    doc.save(`Doctor_${year}`+""+`${month}`+""+`${day}`+".pdf");
}
export default reportDoc;