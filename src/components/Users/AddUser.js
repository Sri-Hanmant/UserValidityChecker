import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

const initialUser = {
  username: "",
  age: "",
};

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(initialUser);
  const [error, setError] = useState();

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        id: Math.random().toString(),
        [input]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length == 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid input",
      });
      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(userInput);
    setUserInput(initialUser);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={userInput.username}
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
          />
          <label>Age (Years)</label>
          <input
            type="number"
            id="age"
            value={userInput.age}
            onChange={(event) => inputChangeHandler("age", event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;