import { FaStar } from "react-icons/fa";
import { FaLocationDot,FaBriefcase  } from "react-icons/fa6";
import './index.css'


const DisplayAllJobs = (props)=>{
    const {allJobs} = props;

    return (
        <li className='jobs-card'>
            <div className='all-jobs-title-rating-cont d-flex'>
                <img className='jobs-logo' src={allJobs.company_logo_url} alt="" />
                <div>
                    <h3>{allJobs.title}</h3>
                    <span className="rating-icon">
                    <FaStar/>
                    </span>
                    <span>{allJobs.rating}</span>
                    
                </div>
            </div>
            <div className='all-jobs-location-emp-ppa-cont d-flex justify-content-between mt-3'>
                <div className='d-flex'>
                    <span className="l-icon"><FaLocationDot/></span>
                    <span><p>{allJobs.location}</p></span>
                    <span className="l-icon">
                        <FaBriefcase/>
                    </span>
                    <span><p>{allJobs.employment_type}</p></span>
                </div>
                <h4>{allJobs.package_per_annum}</h4>
            </div>
            <hr />
            <div className='all-jobs-desc-cont'>
                <h3>Description</h3>
                <p>{allJobs.job_description}</p>
            </div>
        </li>
    )
}




export default DisplayAllJobs;