import React, { useState } from "react";
import SignUp from "./SignUp";
import {useNavigate} from "react-router-dom";

function Login({setRefresh, refresh}) {

  let navigate = useNavigate()

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [openSignup, setOpenSignup] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((r) => navigate("/"))
      .then((r) => {setRefresh(!refresh)})
    //   .catch((e) => console.log(e));
  }

  // //   console.log('hello')

  return (
   
    <div className="max-w-2xl ml-auto mr-auto h-[1000px] text-lg grid place-items-center" >
    <img src="https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/4328c3b8-3a90-440a-af96-1fffa6052df6/HYxTK4.jpg?format=1000w"/>
        Login to shop our Exclusive Homage Year Collection
      <div className=" border-4 rounded-md border-black max-w-lg max-h-lg">
        <form onSubmit={handleLogin}>
        <label>
            Login:
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="username"
              name="username"
              placeholder="  Username"
              required
            ></input>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder="Password"
              required
            ></input>
          </label>
          <div className=" rounded-md bg-black text-white w-3/12 text-center translate-y-10">
          <input type="submit" name="submit"></input>
          </div>
        </form>
        <div className="text-center h-[112px] translate-y-">
          <br></br>
          <br></br>
          <br></br>
          Not Registered?{" "}
          <button  onClick={() => {
              setOpenSignup(true);
            }}
            className="bg-black text-white hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Sign Up!
          </button>
        </div>
        {openSignup && <SignUp openSignup={openSignup}  closeSignUp={setOpenSignup} />}
      </div>
    </div>
  );
}

export default Login;
