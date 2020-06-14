import React from "react";
import { Link } from "react-router-dom";


const StudentView = (props) => {
    let campusDisplay;
    if(props.student.campus){
        campusDisplay = (
            <div>
                <h5>Enrolled At <Link to={`/campuses/${props.student.campus.id}`}
                >{props.student.campus.name}</Link></h5>
            </div>
        );
        }else{
            campusDisplay = <h5>Not Enrolled</h5>
        }
    
    return(
        <>
        <img src={props.student.imageUrl} alt={props.student.firstName} />
        <h1>{props.student.firstName} {props.student.lastName}</h1>
        <h3> Email: {props.student.email}</h3>
        <h3> GPA: {props.student.gpa}</h3>
        {campusDisplay}
        </>
    );
};

export default StudentView;