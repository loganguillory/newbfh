import React, { useState } from "react";

function SignUp({ closeSignUp, openSignup }) {
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
        full_name:userFullname,
        email: userEmail
      }),
    })
      .then((r) => r.json())
      .then(r => {
        setTimeout(() => {
          closeSignUp(!openSignup)
        }, 1000)
      })
  }

    return (
    <div className="bg-gray-400 w-[500px] h-[500px] position:fixed display:flex justify-center items-center">
        <div className="border-2 rounded-xl w-[500px] h-[500px] bg-white shadow-slate-500 display:flex flex-col p-25">
        <div className="flex justify-end bg-transparent border-none text-sm cursor-pointer">
            <button onClick={() => closeSignUp(false)}> X </button>
        </div>
        <div className="inline-block text-center mt-10px">
            <h1>Create your BFH Account</h1>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input
            onChange={(e) => {
                setUserFullname(e.target.value);
            }}
            type="fullname"
            name="fullname"
            placeholder="FullName"
            required
            />
            <input
            onChange={(e) => {
                setNewUser(e.target.value);
            }}
            type="username"
            name="username"
            placeholder="Username"
            required
          />
          <input
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Email"
            required
         />
          <input
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
              <button>Sign Up</button>
              
        </form>
        <button onClick={() => closeSignUp(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default SignUp;
