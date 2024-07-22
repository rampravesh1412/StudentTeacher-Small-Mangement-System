import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Signin = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const signupHandler = () => {
    navigate(`/${role}/signup`);
  };

  //
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  

  const loginData = (event) => {
    event.preventDefault();
    setUserLoginData({
      ...userLoginData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(userLoginData)
  const loginHandler = async (event) => {
    event.preventDefault();
   const response = await fetch(`http://localhost:3000/api/v1/${role}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginData),
    })
      const data = await response.json();
      console.log(data)
      if(data.token){
        if(data.teacher){
          alert(`Hi ${data.teacher.name}`);
        // console.log(data)
        localStorage.setItem("token" , data.token);
        navigate(`/${role}/dashboard`);
        }if (data.student) {
          alert(`Hi ${data.student.name}`);
        // console.log(data)
        localStorage.setItem("token" , data.token);
        navigate(`/${role}/dashboard`);
          
        } 
        
      }else{
        alert("Password not match");
      }
  
      
  };

  return (
    <div className="">
      <h1 className="text-center text-2xl font-semibold">
        Login to your account
      </h1>
      <div className="flex justify-center font-medium">
        <span>Dont have an account yet? </span>
        <button className="text-orange-600" onClick={signupHandler}>
          Signup
        </button>
      </div>

      {/* signup form */}
      <div className="flex justify-center p-8">
        <form>
          <div className="p-2">
            <label className="text-xl font-semibold w-60" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="ml-20 !border"
              id="email"
              placeholder="Enter your email"
              onChange={loginData}
              name="email"
            />
          </div>

          <div className="p-2">
            <label className="text-xl font-semibold w-60" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="ml-12 !border"
              id="password"
              placeholder="Enter your password"
              onChange={loginData}
              name="password"
            />
          </div>

          <div className="p-2">
            <button
              className="py-2 px-6 bg-green-800 rounded-sm shadow-sm text-white font-semibold"
              type="submit"
              onClick={loginHandler}
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
