import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();

    axios
    .post("http://localhost:5000/api/login",user)
    .then(res=>{
        console.log(res);
        localStorage.setItem("token",res.data.payload);
        props.history.push("/protected");
    })
    .catch(err =>{
        console.log(err);
    })
  };

  return (
    <div>
      <form onSubmit = {login}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChanges}
          value={user.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChanges}
          value={user.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
