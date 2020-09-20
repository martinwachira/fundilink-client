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
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post("http://localhost:8000/api/employee", this.state.signupEmployerData)
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.data.status === 200) {
          this.setState({
            msg: response.data.message,
            signupEmployerData: {
              providerName: "",
              email: "",
              phone: "",
              password: "",
            },
          });
          setTimeout(() => {
            this.setState({ msg: "" });
          }, 3000);
        }

        if (response.data.status === "failed") {
          this.setState({ msg: response.data.message });
          setTimeout(() => {
            this.setState({ msg: "" });
          }, 3000);
        }
      });
  };

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
                    <label>Name</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="providerName"
                      value={this.state.signupEmployerData.providerName}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="Employer Name"
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
                      placeholder="Employer Email"
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
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={this.state.signupEmployerData.description}
                    onChange={this.onChangehandler}
                    rows={3}
                    defaultValue={""}
                  />
                </div>

                <div className="row">
                  <input
                    name="register"
                    id="register"
                    className="btn btn-primary"
                    type="button"
                    defaultValue="Create Account"
                    onClick={this.onSubmitHandler}
                  />
                  {isLoading ? (
                    <span
                      className="spinner-border spinner-border-sm ml-5"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    <span></span>
                  )}
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
