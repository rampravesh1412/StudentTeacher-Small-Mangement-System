import { useNavigate , useParams } from "react-router-dom";
import { useState } from "react";


const Signup = () => {
  const navigate = useNavigate();
  const { role } = useParams();
  const loginHander = () => {
    navigate(`/${role}/signin`);
    
  }


  // 
  const [singupData , setSingupData] = useState({
    name: "",
    email: "",
    phoneNumber:"",
    password: "",
    confirmPassword: "",
   
  })

  const signupHandlerData = (event) => {
    setSingupData({
      // console.log(event);
      

      ...singupData,
      [event.target.name]: event.target.value

    })
    
  }
  console.log(singupData);

  const singupSubmitHandler = async(event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/api/v1/${role}/signup` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(singupData)
    })
    alert("Accont is created");
    console.log(response)
    navigate(`/${role}/signin`)
  
  }





  return (
    <div className="">
      <h1 className="text-center text-2xl font-semibold">Signup to create an account</h1>
      <div className="flex justify-center font-medium">
        <span>Already have account? </span>
        <button className="text-orange-600" onClick={loginHander}>Login</button>
      </div>

      {/* signup form */}
      <div className="flex justify-center p-14">
        <form>
          <div className="p-2">
            <label className="text-xl font-semibold w-60" htmlFor="name">Name</label>
            <input
              type="text"
              className="ml-20 !border"
              id="name"
              placeholder="Enter your name"
              onChange={signupHandlerData}
              name="name"
              
            />
          </div>

          <div className="p-2">
            <label className="text-xl font-semibold w-60" htmlFor="email">Email</label>
            <input
              type="text"
              className="ml-20 !border"
              id="email"
              placeholder="Enter your email"
              onChange={signupHandlerData}
              name="email"
            />
          </div>

          <div className="p-2">
            <label className="text-xl font-semibold w-60" htmlFor="phone">phoneNumber</label>
            <input
              type="text"
              className="ml-2 !border"
              id="phone"
              placeholder="Enter your phoneNumber"
              onChange={signupHandlerData}
              name="phoneNumber"
            />
          </div>

          <div className="p-2">
            <label className="text-xl font-semibold w-60" htmlFor="password">Password</label>
            <input
              type="password"
              className="ml-12 !border"
              id="password"
              placeholder="Enter your password"
              onChange={signupHandlerData}
              name="password"
            />
          </div>

          <div className="p-2">
            <label className="text-xl font-semibold w-60" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className=" !border"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={signupHandlerData}
              name="confirmPassword"
            />
          </div>

          <div className="p-2">
            <button className="py-3 px-10 bg-green-800 rounded-sm shadow-sm text-white font-semibold" type="submit" onClick={singupSubmitHandler}
            >Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
