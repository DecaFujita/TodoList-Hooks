import { Paper, TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import React from 'react';

function TodoForm({ addTodo }){
    const [value, handleChange, reset] = useInputState('')
    return (
        <Paper style={{ margin: '1rem 0', padding:'0 1rem '}}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
            }} >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin='normal'
                    label='Add new todo'
                    fullWidth
                ></TextField>
            </form>
        </Paper>
    )
};

export default TodoForm;