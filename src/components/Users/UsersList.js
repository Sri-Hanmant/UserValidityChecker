import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.item.map((data) => (
          <li key={data.id}>
            {data.username} ({data.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;