import "./index.css";

const Login = () => {
  return (
    <div className="login-cont container-fluid">
      {/* Bootstrap form starts from here  */}

      <form className=" text-white bg-dark p-3 rounded form-cont">
        <div className="text-center">
            <img className="web-logo" src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Bootstrap form ends from here  */}
    </div>
  );
};

export default Login;
