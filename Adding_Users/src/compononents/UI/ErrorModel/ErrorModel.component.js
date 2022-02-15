import React from 'react'

import Card from '../Card/Card.component'
import Button from '../Button/Button.component'

import classes from './ErrorModel-style.module.css'
const ErrorModel = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button>Okie dokie</Button>
        </footer>
    </Card>
}

export default ErrorModel