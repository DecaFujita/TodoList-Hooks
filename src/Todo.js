import { ListItem, ListItemText, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import CheckBox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from "./EditTodoForm";
import React from 'react';

function Todo({id, task, completed, removeTodo, toggleTodo, editTodo}) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem style={{color:'black'}} >
            {isEditing ?
                <EditTodoForm
                    id={id}
                    editTodo={editTodo}
                    task={task}
                    toggleEditForm={toggle}
                />
            : 
                <>
                    <CheckBox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none'}}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <DeleteIcon aria-label='Delete' onClick={() => removeTodo(id)} />
                        </IconButton>
                        <IconButton>
                            <EditIcon aria-label='Edit' onClick={toggle}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
};

export default Todo;
