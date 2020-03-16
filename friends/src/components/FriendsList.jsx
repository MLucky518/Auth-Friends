import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import Loader from "react-loader-spinner";
import AddForm from "./AddForm";
import "./FriendList.css";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData();
  }, [setFriends]);

  console.log(friends);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  const addFriend = friend => {
    const newFriend = setFriends([...friends, friend]);
  };

  if (friends.length === 0) {
    return (
      <div className="key spinner">
        <Loader type="Puff" color="#204963" height="60" width="60" />
        <p>Loading Data</p>
      </div>
    );
  }
  return (
    <div>
      <AddForm className = "add-form" getData={getData} addFriend={addFriend} />
      <div className = "friend-list-container">
        {friends.map((friend, idx) => {
          return (
            <Friend
              key={idx}
              name={friend.name}
              age={friend.age}
              email={friend.email}
              id = {friend.id}
              getData={getData}
            />
          );
        })}
        
      </div>
    </div>
  );
}

export default FriendsList;
