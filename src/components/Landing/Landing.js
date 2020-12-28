import React, { Component, Fragment } from "react";
import styles from "./Landing.module.scss";
import * as Users from "../../components/Users";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    selectedUserType: "",
  };

  render() {
    return (
      <Fragment>
        <div className="app-bar container-fluid">
          <Link to={"/"} className="navbar-brand">
            User Selector
          </Link>
        </div>
        <p className="app-section container">
          {this.renderUserSelector()}

          <div className="top-margin-small">
            {this.renderSelectedUser(this.state.selectedUserType)}
          </div>
        </p>
      </Fragment>
    );
  }

  renderUserSelector() {
    return (
      <div classname="{styles.Landing}" data-testid="Landing">
        <div className={styles.heads}>
          <nav className="navbar navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              FundiLink
            </Link>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
        <div className="container-fluid">
          <div className="form-group">
            <h5 className={styles.ttle}>
              Do you have an account? No? Well, worry not, create yours here.
              Please pick a user role.
            </h5>
            <label htmlFor="role">Pick a user role here</label>
            <select
              className="custom-select"
              onChange={(e) =>
                this.setState({ selectedUserType: e.target.value })
              }
            >
              <option default></option>
              <option value="EmployerSignup">Employer</option>
              <option value="ProviderSignup">Service Provider</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

  renderSelectedUser(selectedUserType) {
    if (!selectedUserType) return;

    const User = Users[selectedUserType];

    return <User />;
  }
}

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
