import React, { Component } from "react"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";


class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
  }
    render(){
    return (
    <>
    <AddStudentFormView 
    firstName={this.state.firstName}
    lastName={this.state.lastName}
    email={this.state.email}
    imageUrl={this.state.imageUrl}
    gpa={this.state.gpa}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    />
    </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return{
    addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
}

AddStudentFormContainer.propTypes = {
  addCampus: PropTypes.func.isRequired,
}

export default connect (null, mapDispatch)(AddStudentFormContainer);
