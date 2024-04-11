import { useEffect } from "react";
import Cookies from "js-cookies";
import Header from "../Header";
import DisplayAllJobs from "../DisplayAllJobs";
import "./index.css";

const Jobs = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok";

  useEffect(() => {
    const fetchJobsData = async () => {
      const url = "https://apis.ccbp.in/jobs";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const fetchData = await response.json();
      console.log(fetchData);
    };

    fetchJobsData();
  }, []);

  return (
    <>
      <Header />
      <div className="filter-jobs-section">
        <div className="all-jobs-cont">
            <h1>Filter Section</h1>
        </div>
        <div className="filter-cont">
            <input type="search" className="form-control w-75 m-3" placeholder="Search Jobs"/>
            <DisplayAllJobs/>
        </div>
      </div>
    </>
  );
};

export default Jobs;
