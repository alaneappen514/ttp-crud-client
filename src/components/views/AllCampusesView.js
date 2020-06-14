import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }

  return (
    <div className="all-campuses">
        <Link className="redbg" to={`/campuses/new`}>New Campus</Link>
     
      {props.allCampuses.map((campus) => (
        <div className ="redBorder" key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src={campus.imageUrl} width="200px" alt={campus.name} />
          <p>{campus.students.length} students</p>
          <div>
          <button onClick={() => props.handleDelete(campus.id)}>Delete</button>
          <button><Link to={`/campuses/${campus.id}/edit`}>Edit</Link></button>
          </div>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
