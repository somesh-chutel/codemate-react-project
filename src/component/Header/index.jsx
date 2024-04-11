import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
      <ul className="my-navbar">
        <Link to="/">
          <li>
            <img
              className="nav-img"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="web logo"
            />
          </li>
        </Link>

        <li>
          <div>
            <Link to="/" className="n-link">
              Home
            </Link>
            <Link to="/jobs" className="n-link">
              Jobs
            </Link>
          </div>
        </li>
        <li>
          <button className="btn btn-primary">Logout</button>
        </li>
      </ul>
  );
};

export default Header;
