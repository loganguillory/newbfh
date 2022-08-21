import React, { useState } from "react";
import SignUp from "./SignUp";

function Login() {
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
      .then((r) => console.log(r));
    //   .catch((e) => console.log(e));
  }

  // //   console.log('hello')

  return (
    <div className="border-2 max-w-2xl ml-auto mr-auto h-[1000px] grid place-items-center">
      <div className="border-2 max-w-lg max-h-lg">
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
          <input type="submit" name="submit"></input>
        </form>
        <div className="text-center h-[100px]">
          <br></br>
          <br></br>
          <br></br>
          Not Registered?{" "}
          <button
            className="bg-black text-white"
            onClick={() => {
              setOpenSignup(true);
            }}
          >
            Sign Up!
          </button>
        </div>
        {openSignup && <SignUp openSignup={openSignup}  closeSignUp={setOpenSignup} />}
      </div>
    </div>
  );
}

export default Login;
