import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./EmployerSignup.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

// const EmployerSignup = () => {

class EmployerSignup extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      signupEmployerData: {
        providerName: "",
        email: "",
        password: "",
        confirmPassword: "",
        description: "",
        isLoading: "",
      },
      errors: {},
      msg: "",
    };
  }

  onChangehandler = (e, key) => {
    const { signupEmployerData } = this.state;
    signupEmployerData[e.target.name] = e.target.value;
    this.setState({ signupEmployerData });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post(
        "http://localhost:8000/api/requester",
        this.state.signupEmployerData
      )
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.data.status === 200) {
          this.setState({
            msg: response.data.message,
            signupEmployerData: {
              providerName: "",
              email: "",
              password: "",
              confirmPassword: "",
              description: "",
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
  };
  
  validate() {
    let pass = this.state.signupProviderData.password;
    let confirmP = this.state.signupProviderData.confirmPassword;
    let errors = {};
    let isValid = true;

    if (!confirmP) {
      isValid = false;
      errors[confirmP] = "Please confirm your password.";
    }
    if (typeof pass !== "undefined" && typeof confirmP !== "undefined") {
      if (pass !== confirmP) {
        isValid = false;
        errors[pass] = "Passwords do not match.";
      }
    } 
    this.setState({
      errors: errors
    });
    return isValid;
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className={styles.EmployerSignup} data-testid="EmployerSignup">
        <div className="container">
          <div class="card">
            <div class="card-header">Signup Form</div>
            <div class="card-body">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-3">
                    <label>Employer's Name</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="providerName"
                      value={this.state.signupEmployerData.providerName}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <label>Email</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={this.state.signupEmployerData.email}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="TestMail@mail.org"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <label>Password</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.signupEmployerData.password}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="*********"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <label>Confirm Password</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={this.state.signupEmployerData.confirmPassword}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="*********"
                    />
                    <div className="text-danger">{this.state.errors.confirmPassword}</div>
                  </div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor>Description</label>
                  </div>
                  <div className="col-md-4">
                    <textarea
                      className="form-control"
                      name="description"
                      value={this.state.signupEmployerData.description}
                      onChange={this.onChangehandler}
                      rows={3}
                      defaultValue={"NA"}
                    />
                  </div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-6">
                    {isLoading ? (
                      <button
                        className="btn btn-success"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-grow spinner-grow-sm text-warning"
                          role="status"
                          aria-hidden="true"
                        />
                        Please wait...
                      </button>
                    ) : (
                      <span></span>
                    )}
                  <p className="text-orange">{this.state.msg}</p>
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
            <div class="card-footer text-muted">User Type: Employer</div>
          </div>
        </div>
      </div>
    );
  }
}

EmployerSignup.propTypes = {};

EmployerSignup.defaultProps = {};

export default EmployerSignup;
