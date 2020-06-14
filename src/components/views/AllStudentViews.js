import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AllStudentViews = (props) => {
    if(!props.allStudents.length) {
        return <div>There are no students</div>;
    }
    return(
        <div>
            {props.allStudents.map((student) => (
             <div key = {student.id}>
                 <img src={student.imageUrl} width="200px" alt={student.firstName} />
                 <Link to={`/students/${student.id}`}>
                 <h4>{student.firstName} {student.lastName}</h4>
                 </Link>
                 <h5>
                     {
                       student.campus ? (student.campus.name) : ("Not Enrolled")
                     }
                 </h5>
            </div>
            ))}
        </div>
    );
};

AllStudentViews.propTypes =  {
    allStudents: PropTypes.array.isRequired,
}

export default AllStudentViews;

