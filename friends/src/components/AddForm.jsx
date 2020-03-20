import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function AddForm(props) {
  const [friendInfo, setFriendInfo] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = e => {
    setFriendInfo({ ...friendInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friendInfo)
      .then(res => {
        console.log(res);
        props.getData();
      })
      .catch(err =>{
          console.log(err);
      })
  };

  return (
    <div>
        <h1>Add a new Friend</h1>
      <form onSubmit = {handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={friendInfo.name}
          onChange={handleChanges}
        />
        <input
          type="number"
          name="age"
          placeholder="enter age"
          value={friendInfo.age}
          onChange={handleChanges}
        />
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={friendInfo.email}
          onChange={handleChanges}
        />
        <input type = "submit" />
      </form>
    </div>
  );
}

export default AddForm;
