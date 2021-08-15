import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  },
  mainContainer: {
    width: "500px !important",
    border: "2px solid #3F50B5",
    borderRadius: "10px",
    padding: "40px 80px !important",
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    width: "350px",
    margin: "auto",
  },
  addBtn: {
    marginTop: "10px !important",
  },
  todoBox: {
    margin: "auto",
    width: "500px",
    border: "1px solid black",
    borderRadius: "10px",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  todoTypo: {
    padding: " 0 20px",
    fontSize: "18px",
    color: "green",
    fontWeight: "bold",
  },
  todoIcons: {
    width: "170px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  todoItemBox: {
    width: "400px",
    height: "200px",
    border: "1px solid black",
    margin: "10px auto",
    borderRadius: "10px",
  },
  deleteTodo: {
    "&:hover": {
      color: "red",
    },
  },
  editTodo: {
    "&:hover": {
      color: "green",
    },
  },
  todoItemBtn: {
    padding: "0 50px",
    display: "flex",
    justifyContent: "space-between",
  },
  itemTitle: {
    color: "brown",
  },
  pagination: {
    width: "500px",
    margin: " 10px auto",
  },
  paper: {
    marginTop: "70px",
    width: "400px",
    height: "350px",
    margin: "auto",
    backgroundColor: "white",
  },
  modalCont: {
    borderRadius: "8px",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px - 10px",
    background: "white",
    padding: "8px 20px 12px 20px",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    margin: "20px",
  },
  temBtn: {
    marginTop: "20px",
    marginRight: "12px,",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
}));
