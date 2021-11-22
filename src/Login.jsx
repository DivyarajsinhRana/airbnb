import React from "react";
import "./login.css";
const Login = () => {
  return (
    <>
      <div className="login">
        <form>
          <div className="mb-3">
            <label forHtml="username" class="form-label">
              username
            </label>
            <input
              type="text"
              class="form-control"
              id="uname"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
