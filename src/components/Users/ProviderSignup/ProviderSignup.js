import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ProviderSignup.module.scss";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-router-dom";

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
    cursor: "pointer",
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
  }),
};

// const ProviderSignup = () => (
class ProviderSignup extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      providers: [],
      signupProviderData: {
        role: 2,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        desc: "",
        designation: "",
        isLoading: true,
      },
      msg: "",
    };
  }

  componentDidMount() {
    this._isMount = true;
    this.getProviders();
  }

  async getProviders() {
    axios
      .get("http://localhost:8000/api/employee")
      .then((res) => {
        this.setState({ providers: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  onChangehandler = (e, key) => {
    const { signupProviderData } = this.state;
    signupProviderData[e.target.name] = e.target.value;
    this.setState({ signupProviderData });

    //for test purposes
    //  console.log(`Data:`, signupProviderData);
  };

  onSubmitHandler = (e) => {
    const { password, confirmPassword } = this.state.signupProviderData;
    e.preventDefault();
    this.setState({ isLoading: true });
    if (password === confirmPassword) {
      axios
        .post(
          "http://localhost:8000/api/user/register",
          this.state.signupProviderData
        )
        .then((response) => {
          this.setState({ isLoading: false });
          if (response.data.status === 200) {
            this.setState({
              msg: response.data.message,
              signupProviderData: {
                role: 2,
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                desc: "",
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
    } else {
      alert("Sorry, Passwords do not match");
    }
  };

  render() {
    const isLoading = this.state.isLoading;

    let providerList = this.state.providers.map((provider) => {
      return (
        <div className="cont container-fluid" key={provider.id}>
          <div className="card">
            <div className="col s3 m4">
              {/* <span className="card-title">
                <h4>{provider.employeeName}</h4>
              </span> */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                  <h5>{provider.name}</h5>
                </div>
                <div className="col-md-2">
                  <h6>{provider.designation}</h6>
                </div>
                <div className="col-md-2">
                  <h6>{provider.email}</h6>
                </div>
                <div className="col-md-2">
                  <h6>{provider.desc}</h6>
                </div>
                <div className="col-md-2">
                  <h7>
                    <Link
                      to={`/individualProvider/${provider.id}`}
                      className="btn btn-warning"
                    >
                      DETAILS
                    </Link>
                  </h7>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className={styles.ProviderSignup} data-testid="ProviderSignup">
        <div className="container">
          <div className="card">
            <div className="card-header">Service provider create account</div>
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
                      name="name"
                      defaultValue={this.state.signupProviderData.name}
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
                      name="desc"
                      defaultValue={this.state.signupProviderData.desc}
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
                    <select
                      className="form-control"
                      name="designation"
                      defaultValue={this.state.signupProviderData.designation}
                      onChange={this.onChangehandler}
                      styles={optionStyles}
                      // options = {options}
                    >
                      <option></option>
                      <option value="Plumber">Plumber</option>
                      <option value="Interior Designer">
                        Interior Designer
                      </option>
                      <option value="Contractor">Contractor</option>
                      <option value="Masonry">Masonry</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Architect">Architect</option>
                      <option value="Construction Expeditor">
                        Construction Expeditor
                      </option>
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
                      defaultValue={
                        this.state.signupProviderData.confirmPassword
                      }
                      onChange={this.onChangehandler}
                      aria-describedby="helpId"
                      placeholder="*********"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-7"></div>
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
          </div>
          <div>{providerList}</div>
        </div>
      </div>
    );
  }
}

ProviderSignup.propTypes = {};

ProviderSignup.defaultProps = {};

export default ProviderSignup;
