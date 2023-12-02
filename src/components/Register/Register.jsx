import React from "react";

const Register = () => {
  return (
    <div>
      <h2> Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="write your email"
          required
        />{" "}
        <br />
        <br />
        <input
          onBlur={handlePassBlur}
          type="password"
          name="password"
          id="password"
          placeholder="write your password"
          required
        />{" "}
        <br />
        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
      <small>
        already Registered? Please <Link to="/login">Login</Link>
      </small>
      <p className="text-danger">{error}</p>
      <p className="text-success">{succes}</p>
    </div>
  );
};

export default Register;
