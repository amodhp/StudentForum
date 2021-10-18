import React, { Fragment, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { DashboardActions } from "./DashboardActions";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import UserPosts from "./UserPosts";


const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]); //run only once

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Welcome {user && user.name}
      </p>

       <UserPosts user={user}/>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus"></i>Delete My account
            </button> 
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 className="text-primary">You have not setup a Profile, Please add some info</h1>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  ); //make sure profile is loaded and not null , pulling user details from auth, checking if profile is null or not
  // after deleting account it should redirect to the login
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
