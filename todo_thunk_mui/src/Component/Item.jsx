import React, { useEffect,useState } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import UpdateIcon from '@material-ui/icons/Update';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {
  updateTodo,getSingleData,deleteTodo
} from '../store/action'
import { useStyles } from "../styles/style";
import { Typography } from "@material-ui/core";

const Item = () => {
  const classes = useStyles();

  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const todo = useSelector((state) => state.newTodo);
  console.log(todo)

  useEffect(() => {
    //get single Todo
    dispatch(getSingleData(id));
  }, [dispatch,id]);

  //delete todo
  const handleDelete = (item) => {
    dispatch(deleteTodo(item));
    history.push("/");
  };

  //modal dialog
   const [newValue, setNewValue] = useState(todo.title)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  //----------------------------------------------------------------
  const editTodo = async (todo) => {
      dispatch(updateTodo(todo,newValue));
    setOpen(false);
    dispatch(getSingleData(todo));
    }

  return (
    <>
      <div className={classes.todoItemBox}>
        <Typography className={classes.itemTitle}>
          <h2>Title: {todo.title}</h2>
          <h2>Status: {todo.status ? "Complete" : "Incomplete"}</h2>
        </Typography>
        <div className={classes.todoItemBtn}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.deleteTodo}
            onClick={() => handleDelete(todo)}
            startIcon={<DeleteForeverIcon />}
          >
            DELETE
          </Button>
          <Button className={classes.editTodo} startIcon={<EditIcon/>} variant="outlined" color="primary" size="large" onClick={handleOpen} >
              EDIT
          </Button>
        </div>
      </div>
      <div>
        <Modal className={classes.paper} open={open} onClose={handleClose}>
          <Container className={classes.modalCont}>
            <Typography variant="h6" style={{ margin: "30px auto" }}>
              Update Your Task
            </Typography>
            <TextField
              required
              size="small"
              id="filled-required"
              label="Update your task"
              variant="outlined"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              style={{ width: "100%" }}
            />
            <Box className={classes.flex}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<UpdateIcon />}
                className={classes.itemBtn}
                onClick={()=>editTodo(todo)}
              >
                UPDATE
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<CancelIcon />}
                className={classes.itemBtn}
                onClick={handleClose}
              >
                CLOSE
              </Button>
            </Box>
          </Container>
        </Modal>
      </div>
    </>
  );
};

export default Item;
