import React from 'react';
import '../styles/index.css';

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div>
        <h2 className="header">Sign Up</h2>
        <div className="form1">
          <label htmlFor="firstName" className="flex flex-col w-50 mr-5 mb-10">
            First Name
            <input
              className="form-control"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={this.props.firstName} // Prop: first name data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <label htmlFor="lastName" className="flex flex-col w-50 mr-5 mb-10">
            Last Name
            <input
              className="form-control"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={this.props.lastName} // Prop: The last name input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <label
            htmlFor="dateOfBirth"
            className="flex flex-col w-60 mr-5 mb-10"
          >
            Date Of Birth
            <input
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              placeholder="Last Name"
              value={this.props.dateOfBirth} // Prop: The Date of Birth input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <label htmlFor="email" className="flex flex-col w-50 mr-5 mb-10">
            Email address
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.props.email} // Prop: The email input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>
        </div>
        <label htmlFor="address" className="width-100">
          Address
          <input
            className="form-control"
            id="address"
            name="address"
            type="text"
            placeholder="Enter Address"
            value={this.props.address} // Prop: The Address input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        </label>
      </div>
    );
  }
}

export default Step1;