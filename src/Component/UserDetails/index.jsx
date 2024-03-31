import DisplayUserDetails from "../DisplayUserDetails";
import "./index.css";

const UserDetails = (props) => {
    // const {userDetails} = props;
    // const {id,name,age,location,domain} = userDetails;

    const {userDetails} = props;

  return (
    // <li>
    //   <h1>{userDetails}</h1>

    //   <button className="btn btn-primary">Get Started</button>
    // </li>

    <h1>{userDetails}</h1>
  );
};

export default UserDetails;
