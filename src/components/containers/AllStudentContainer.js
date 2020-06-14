import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk } from "../../thunks"
import { AllStudentViews } from "../views"


class AllStudentContainer extends Component{
 componentDidMount(){
     this.props.fetchAllStudents();
 };



 handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

 render(){
    return(
         <AllStudentViews
          allStudents={this.props.allStudents}
          handleDelete={this.handleDelete}
         />
     );
   }
}

//Map state to props//
const mapState = (state) => {
    return{
        allStudents: state.allStudents,
    };
};

//Map dispatch to props//
const mapDispatch = (dispatch) => {
    return{
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    };
};

//Type check props;
AllStudentContainer.protoTypes = {
    allStudents: PropTypes.array.isRequired,
    fetchAllStudents: PropTypes.func.isRequired,
    deleteStudent: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllStudentContainer);