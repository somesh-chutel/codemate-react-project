import { useEffect, useState } from "react";
import Cookies from "js-cookies";
import Header from "../Header";
import DisplayAllJobs from "../DisplayAllJobs";
import JobsFilterSection from "../FilterSection";
import "./index.css";

const Jobs = () => {
  const [allValues,setValues] = useState({
    jobsList:[],
    empType:[],
    minPakage:"",
    searchinput:""
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok";

  useEffect(() => {
    const fetchJobsData = async () => {
      const url = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPakage}&search=${allValues.searchinput}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const fetchData = await response.json();
      console.log(fetchData.jobs);
      if(response.ok===true){
        setValues({...allValues,jobsList:fetchData.jobs});
      }
    };

    fetchJobsData();
  }, [allValues.searchinput,allValues.empType]);

  const onChangesearchInput = (event)=>{
      setValues({...allValues,searchinput:event.target.value});
  }

  const onChangeEmptype = (value,isChecked)=>{
    console.log(isChecked)
      setValues({...allValues,empType:value});

  }

  return (
    <>
      <Header />
      <div className="filter-jobs-section">
        <div className="all-jobs-cont mt-5">
            <JobsFilterSection empFunction={onChangeEmptype}/>
        </div>
        <div className="filter-cont">
            <input onChange={onChangesearchInput} type="search" className="form-control w-75 m-3" placeholder="Search Jobs"/>
            <ul>
              {allValues.jobsList.map(each=>
                <DisplayAllJobs allJobs={each} key={each.id}/>
              )}
            </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;
