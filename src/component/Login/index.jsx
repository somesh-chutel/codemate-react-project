import { useState } from "react";
import "./index.css";

const Login = () => {

  /*
      For single variable we can use below mentioned syntax of useState

      const [username,setUsername] = useState("someshchutel");
  */

  //For multiple values we can use below mentioned syntax of useState
  const [allValues,setValues] = useState({
      username:"",
      password:"",
      showErrorMsg:false,
      errorMsg:""
  });

    const onFetchUserData = async(event)=>{
        event.preventDefault();


        const url = "http://localhost:3001/login";

        const userDetails = {
          username: allValues.username,
          password: allValues.password
        }

        const options = {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body : JSON.stringify(userDetails)
        }

        const response = await fetch(url,options);
        const fetchData = await response.json();
        console.log(fetchData)
        if(response.ok===true){
          setValues({...allValues,showErrorMsg:false});
        }
        else{
          setValues({...allValues,showErrorMsg:true,errorMsg:fetchData.errorMsg});
        }

    }

    const onChangeUserName = (event)=>{
        setValues({...allValues,username:event.target.value})

    }

    const onChangeUserPassword = (event)=>{
      setValues({...allValues,password:event.target.value})
    }



  return (
    <div className="login-cont container-fluid">
      {/* Bootstrap form starts from here  */}

      <form className=" text-white bg-dark p-3 rounded form-cont" onSubmit={onFetchUserData}>
        <div className="text-center">
            <img className="web-logo" src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUserName}
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
            onChange={onChangeUserPassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/*Turnery Opertor*/}
        {allValues.showErrorMsg?(<p className="err-msg">{`* ${allValues.errorMsg}`}</p>):null}
      </form>

      {/* Bootstrap form ends from here  */}
    </div>
  );
};

export default Login;
