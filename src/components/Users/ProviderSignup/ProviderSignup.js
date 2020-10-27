import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ProviderSignup.module.scss";
import axios from "axios";
import Select from 'react-select';


// const options = [
//   {value: 'Plumber', label: 'Plumber'},
//   {value: 'Interior Designer', label: 'Interior Designer'},
//   {value: 'Contractor', label: 'Contractor'},
//   {value: 'Masonry', label: 'Masonry'},
//   {value: 'Carpenter', label: 'Carpenter'},
//   {value: 'Electrician', label: 'Electrician'},
//   {value: 'Engineer', label: 'Engineer'},
//   {value: 'Architect', label: 'Architect'},
//   {value: 'Construction Expeditor', label: 'Construction Expeditor'}
// ]

const optionStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: '2px dotted #FFB14D',
    // color: state.isSelected ? '#FFB14D' : 'black',
    // backgroundColor: state.isSelected ? 'green' : 'white',
    cursor: 'pointer'
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
  })
}

// const ProviderSignup = () => (
class ProviderSignup extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      signupProviderData: {
        employeeName: "",
        email: "",
        password: "",
        confirmPassword: "",
        description: "",
        isLoading: "",
        designation: ""
      },
      msg: "",
    };
  }

  onChangehandler = (e, key) => {
    const { signupProviderData } = this.state;
    signupProviderData[e.target.name] = e.target.value;
    this.setState({ signupProviderData });

     //for test purposes
     console.log(`Data:`, signupProviderData);
  };

  onSubmitHandler = (e) => {
    const { password, confirmPassword } = this.state.signupProviderData;
    e.preventDefault();
    this.setState({ isLoading: true });
    if (password === confirmPassword) {
      axios
        .post(
          "http://localhost:8000/api/employee",
          this.state.signupProviderData
        )
        .then((response) => {
          this.setState({ isLoading: false });
          if (response.data.status === 200) {
            this.setState({
              msg: response.data.message,
              signupProviderData: {
                employeeName: "",
                email: "",
                password: "",
                confirmPassword: "",
                description: "",
                designation: ""
              },
            });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 4000);
          }

          if (response.data.status === "failed") {
            this.setState({ msg: response.data.message });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 4000);
          }
        });
    } else {
      alert("Sorry, Passwords do not match");
    }
  };

  render() {
    console.log(this.state.signupProviderData.designation);
    const isLoading = this.state.isLoading;
    return (
      <div className={styles.ProviderSignup} data-testid="ProviderSignup">
        <div className="container">
          <div className="card">
            <div className="card-header">Signup Form</div>
            <div className="card-body">
              {isLoading ? (
                <button className="btn btn-success" type="button" disabled>
                  <span
                    className="spinner-grow spinner-grow-sm text-warning"
                    role="status"
                    aria-hidden="true"
                  />
                  Setting up your account, Please wait...
                </button>
              ) : (
                <span></span>
              )}
              <h5 className={styles.msgAlert} role="alert">
                {this.state.msg}
              </h5>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-4">
                    <label>Service Provider's Name</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="employeeName"
                      defaultValue={this.state.signupProviderData.employeeName}
                      onChange={this.onChangehandler}
                      autoFocus={true}
                      aria-describedby="helpId"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    <label>Primary Email</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      defaultValue={this.state.signupProviderData.email}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="Providersmail@mail.org"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    <label>Bio Data</label>
                  </div>
                  <div className="col-md-4">
                    <textarea
                      className="form-control"
                      name="description"
                      defaultValue={this.state.signupProviderData.description}
                      onChange={this.onChangehandler}
                      rows={3}
                      placeholder="Not exceeding 200 words"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    <label>What's your Designation?</label>
                  </div>
                  <div className="col-md-4">               
                    <select className="form-control"
                    name="designation"
                    defaultValue={this.state.signupProviderData.designation}
                    onChange={this.onChangehandler}
                    styles = { optionStyles } 
                    // options = {options}
                    >
                                        
                    <option></option>
                    <option value="Plumber">Plumber</option>
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Masonry">Masonry</option>
                    <option value="Carpenter">Carpenter</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Architect">Architect</option>
                    <option value="Construction Expeditor">Construction Expeditor</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    <label>Password</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      defaultValue={this.state.signupProviderData.password}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="*********"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    <label>Confirm Password</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      defaultValue={this.state.signupProviderData.confirmPassword}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="*********"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-7">                   
                  </div>
                  <div className="col-md-5">
                    <input
                      name="register"
                      id="register"
                      className="btn btn-primary"
                      type="button"
                      defaultValue="Create Account"
                      onClick={this.onSubmitHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProviderSignup.propTypes = {};

ProviderSignup.defaultProps = {};

export default ProviderSignup;
