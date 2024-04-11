import Header from "../Header";
import "./index.css";

const Home = () => {
  return (
    <div className="home-cont">
      <Header />
      <div className="home-content-cont">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searchinfg for jobs,sallry information, company
          reviews.Find the job that fits your ability and potential
        </p>
        <button className="btn btn-primary">Find Jobs</button>
      </div>
    </div>
  );
};

export default Home;
