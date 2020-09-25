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
      msg: "",
    };
  }

  onChangehandler = (e, key) => {
    const { signupEmployerData } = this.state;
    signupEmployerData[e.target.name] = e.target.value;
    this.setState({ signupEmployerData });

     //for test purposes
     console.log(`Data:`, signupEmployerData);
  };

  onSubmitHandler = (e) => {
    const { password, confirmPassword } = this.state.signupEmployerData;
    e.preventDefault();
    this.setState({ isLoading: true });
    if (password === confirmPassword) {
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
    } else {
      alert("Sorry, Passwords do not match");
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className={styles.EmployerSignup} data-testid="EmployerSignup">
        <div className="container">
          <div className="card">
            <div className="card-header">Signup Form</div>
            <div className="card-body">
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
              <h5 className={styles.msgAlert} role="alert">{this.state.msg}</h5>
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
                      defaultValue={this.state.signupEmployerData.providerName}
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
                      defaultValue={this.state.signupEmployerData.email}
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
                      defaultValue={this.state.signupEmployerData.password}
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
                      defaultValue={this.state.signupEmployerData.confirmPassword}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="*********"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="desc">Description</label>
                  </div>
                  <div className="col-md-4">
                    <textarea
                      className="form-control"
                      name="description"
                      defaultValue={this.state.signupEmployerData.description}
                      onChange={this.onChangehandler}
                      rows={3}
                    />
                  </div>
                </div>
                <br />
                <div className="row">                 
                  <div className="col-md-6">
                  </div>
                  <div className="col-md-5">
                    <input
                      name="register"
                      id="register"
                      className="btn btn-success"
                      type="button"
                      defaultValue="Create Account"
                      onClick={this.onSubmitHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">User Type: Employer</div>
          </div>
        </div>
      </div>
    );
  }
}

EmployerSignup.propTypes = {};

EmployerSignup.defaultProps = {};

export default EmployerSignup;
