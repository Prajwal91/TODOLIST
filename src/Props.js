import React from "react";

function Wellcome(Props){
    return(
        <div>
            <p align="center"> <b>NAME:</b> {Props.name} <br></br> <b>email: </b>{Props.email} <br></br> <b>  COLLEGE NAME:</b> {Props.clg}<br></br><b>CONTACT NUMBER:</b> {Props.contact}<br></br><b> ADDRESS: </b> {Props.adress}</p>
        </div>
    )
}
function Props(){
    return(
        <div><Wellcome name="PRAJWAL" email='naikprajwal9091@gmail.com' clg='MIT KUNDAPURA' contact='+91 8296340748' adress='ANKOLA'/></div>
    )
}

export default Props