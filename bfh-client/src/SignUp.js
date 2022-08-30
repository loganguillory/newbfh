import React, { useState } from "react";

function SignUp({ closeSignUp, openSignup, setUser }) {
  const [userFullname, setUserFullname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [newUser, setNewUser] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUser,
        password: userPassword,
        full_name: userFullname,
        email: userEmail,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        setTimeout(() => {
          closeSignUp(!openSignup);
        }, 1000);
      });
  }

  return (
    // Main Modal

    <div className="signUpBackground">
      <div className="signUpContainer">
        <div className=" flex justify-end pr-10">
          <button
            className="text-xl text-white "
            onClick={() => closeSignUp(false)}
            type="button"
          >
            X
          </button>
        </div>

        <div className="signUpBody text-white text-lg text-center ">
          Create Your Black Fashion House Membership!
          <form className="signUpForm text-black" onSubmit={handleSubmit}>
            <input
              required
              className="signUpInput"
              placeholder="Full Name"
              onChange={(e) => setUserFullname(e.target.value)}
            ></input>
            <input
              required
              className="signUpInput"
              type="email"
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
            <input
              required
              className="signUpInput"
              type="username"
              placeholder="Username"
              onChange={(e) => setNewUser(e.target.value)}
            ></input>
            <input
              required
              className="signUpInput"
              type="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            ></input>
            <div className="w-full flex justify-center">
              <div className=" border-2 w-3/12 h-10 flex  text-align-center bg-white">
                <button className="text-black">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
