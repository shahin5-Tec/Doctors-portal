import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-25 mx-auto text-center mt-32">
      <h2 className="text-3xl mb-4">Please Login</h2>
      <form >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="write your email"
          required
        />{" "}
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="write your password"
          required
        />{" "}
        <br />
        <br />
        <input className="btn btn-accent text-white px-8" type="submit" value="Submit" />
      </form>
      <small>
        New to this website ? Please <Link to="/register" className="text-primary">Register</Link>
      </small>
    </div>
  );
};

export default Login;
