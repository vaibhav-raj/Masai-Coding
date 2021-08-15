import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles/style";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const TodoInput = ({ handleTodo }) => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const handleSubmit = () => {
    const payload = {
      title: title,
      status: false,
      id: Date.now(),
    };
    handleTodo(payload);
    setTitle("")
  };

  return (
    <div>
      <TextField
        type="text"
        label="Enter a todo"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
        className={classes.input}
        size="small"
        value={title}
      />
      <Button variant="contained" className={classes.addBtn} color="primary" startIcon={<AddCircleOutlineRoundedIcon/>} onClick={handleSubmit}>
        ADD TODO
      </Button>
    </div>
  );
};

export default TodoInput;
