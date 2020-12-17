import React from "react";
import { connect } from "react-redux";

import  {logout}  from "../../redux/contactOperation.js";

const UserProfile = (props) => {
  const { user, logout, loginIn } = props;
  const { name, email } = user;

  const handleLogout = () => logout();

  return (
    <div>
      {loginIn ? (
        <>
          <h6>name: {name}</h6>
          <h6>email: {email}</h6>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginIn: Boolean(state.auth.token),
    user: state.auth.user,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);