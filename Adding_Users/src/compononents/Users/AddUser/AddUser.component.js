import React from 'react';

import Card from '../../UI/Card/Card.component'
import Button from '../../UI/Button/Button.component'
import classes from './AddUser-styles.module.css'

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault()
    }
    return (
    <Card className={classes.input}>    
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label id="username">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    )
};

export default AddUser;