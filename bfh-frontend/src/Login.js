import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="login-container">
      <div className="border-2 h-10">
        <form onSubmit={handleLogin}>
          <label>
            Login:
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="username"
              name="username"
              placeholder="Username"
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
      </div>
    </div>
  );
}

export default Login;
