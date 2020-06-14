import React from "react";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  let studentDisplay;
  if (props.campus.students) {
    studentDisplay = (
      <div>
        <p>{props.campus.students.length} Students</p>
        {props.campus.students.map((student) => (
          <div key={student.id}><Link to={`/students/${student.id}`}
          >{student.firstName} {student.lastName}</Link></div>
        ))}
      </div>
    );
  } else {
    studentDisplay = <p>There are no students enrolled</p>;
  }

  return (
    <>
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>

      <p>{props.campus.description}</p>
      {studentDisplay}
    </>
  );
};

export default CampusView;
