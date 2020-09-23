import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ProviderSignup.module.scss";
import axios from "axios";

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
        description: "",
        designation: "",
        isLoading: "",
      },
      msg: "",
    };
  }

  onChangeHandler = (e, key) => {
    const { signupProviderData } = this.state;
    signupProviderData[e.target.name] = e.target.value;
    this.setState({ signupProviderData });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post("http://localhost:8000/api/employee", this.state.signupProviderData)
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.data.status === 200) {
          this.setState({
            msg: response.data.message,
            signupProviderData: {
              employeeName: "",
              email: "",
              password: "",
              description: "",
              designation: "",
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

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className={styles.ProviderSignup} data-testid="ProviderSignup">
        <div className="container">
          <div class="card">
            <div class="card-header">Signup Form</div>
            <div class="card-body">
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
                      value={this.state.signupProviderData.employeeName}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="John Doe"
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
                      value={this.state.signupProviderData.email}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="Providersmail@mail.org"
                    />
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
                      value={this.state.signupProviderData.password}
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="*********"
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
                      value={this.state.signupProviderData.description}
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
                    <select class="custom-select" name="" id="" >
                      <option selected>Select your area of expertise</option>
                      <option value="">Plumber</option>
                      <option value="">Interior Designer</option>
                      <option value="">Contractor</option>
                      <option value="">Masonry</option>
                      <option value="">Carpenter</option>
                      <option value="">Electrician</option>
                      <option value="">Engineer</option>
                      <option value="">Architect</option>
                      <option value="">Construction Expeditor</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-7">
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
                        Creating your account...
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
          </div>
        </div>
      </div>
    );
  }
}

ProviderSignup.propTypes = {};

ProviderSignup.defaultProps = {};

export default ProviderSignup;
