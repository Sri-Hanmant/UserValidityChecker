import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const userData = [];

  const [data, setData] = useState(userData);
  
  console.log("data in app", data);

  const userDetailsHandler = (userInput) => {
    setData((prevUserDetails) => {
      return [userInput, ...prevUserDetails];
    });
  };

  return (
    <div>
      <AddUser onAddUser={userDetailsHandler} />
      <UsersList item={data} />
    </div>
  );
}

export default App;
