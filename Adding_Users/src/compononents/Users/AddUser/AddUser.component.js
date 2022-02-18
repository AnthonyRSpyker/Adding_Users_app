import React, { useState, useRef } from "react";

import Card from "../../UI/Card/Card.component";
import Button from "../../UI/Button/Button.component";
import ErrorModel from "../../UI/ErrorModel/ErrorModel.component";
import Wrapper from "../../Helpers/Wrapper.comonent";

import classes from "./AddUser-styles.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUserName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label id="username">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={userAgeChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
