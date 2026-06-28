import React from "react";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl text-center mt-4"> Welcome back</h3>
        <p className="text-center">Please login</p>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral my-2">Login</button>
            </fieldset>
            <p className="text-center">
              New to Zap Shift. Please{" "}
              <Link to="/register" className="text-blue-700 cursor-pointer">
                Register
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
