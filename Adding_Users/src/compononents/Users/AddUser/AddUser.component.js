import React, { useState } from 'react';

import Card from '../../UI/Card/Card.component'
import Button from '../../UI/Button/Button.component'
import classes from './AddUser-styles.module.css'

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }

        props.onAddUser(enteredName, enteredAge)
        setEnteredName('')
        setEnteredAge('')
        
    }

    const userNameChangeHandler = (event) => {
        setEnteredName(event.target.value)
        
        
    }

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
    <Card className={classes.input}>    
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredName} onChange={userNameChangeHandler} />
        <label id="username">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={userAgeChangeHandler} />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    )
};

export default AddUser;