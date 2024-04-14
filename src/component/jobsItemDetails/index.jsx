import { useParams } from 'react-router-dom';
import Cookies from 'js-cookies';
import { useEffect } from 'react';
import './index.css'


const JobsItemsDetails = ()=> {
    const {id} = useParams();
    const token = Cookies.getItem("jwtToken");

    useEffect(()=>{

        const getJobsItemsDetails = async()=>{

            const url = `https://apis.ccbp.in/jobs/${id}`;

            const options = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                method: 'GET',
              }

            const response = await fetch(url,options);
            const data = await response.json();
            console.log(data);

        }

        getJobsItemsDetails()

    },[])

    return(

        <h1>{id}</h1>
    )
}



export default JobsItemsDetails;