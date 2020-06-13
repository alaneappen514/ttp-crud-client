import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../thunks"
import { AllStudentViews } from "../views"


class AllStudentContainer extends Component{
 componentDidMount(){
     this.props.fetchAllStudents();
 };

 render(){
    return(
         <AllStudentViews
          allStudents={this.props.allStudents}
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
    };
};

//Type check props;
AllStudentContainer.protoTypes = {
    allStudents: PropTypes.array.isRequired,
    fetchAllStudents: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllStudentContainer);