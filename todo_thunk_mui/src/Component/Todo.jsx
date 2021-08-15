import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import LaunchIcon from "@material-ui/icons/Launch";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getData,
  addTodo,
  toggleTodo,
} from "../store/action";

import { useStyles } from "../styles/style";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

const Todo = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const {todo} = useSelector((state) => state)

  
  // pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;
  const count = Math.ceil(todo.length / PER_PAGE);
  const _DATA = usePagination(todo, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  const handleTodo = (payload) => {
    dispatch(addTodo(payload));
  };

  const toggleHandle = (todo) => {
    dispatch(toggleTodo(todo));
  };

  return  (
    <div>
      <Typography>
        <h2>Redux Todo</h2>
      </Typography>
      <Container className={classes.mainContainer}>
        <TodoInput handleTodo={handleTodo} />
      </Container>
      {_DATA.currentData().length===0?<h1>NO TASK</h1> :_DATA.currentData().map((el) => (
        <div key={el.id} className={classes.todoBox}>
          <Typography className={classes.todoTypo}>
            <p>{el.title}</p>
          </Typography>
          <div className={classes.todoIcons}>
            <Checkbox
              size="medium"
              checked={el.status === true}
              onChange={() => toggleHandle(el)}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<LaunchIcon />}
            >
              <Link className={classes.link} to={`/Item/${el.id}`}>
                Open
              </Link>
            </Button>
          </div>
        </div>
      ))}

      <div className={classes.pagination}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          className={classes.pagination}
        />
      </div>
    </div>
  );
};

export default Todo;
