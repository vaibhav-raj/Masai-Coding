import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useStyles } from "../styles/style";

import {
  deleteTodo,
  getData,
} from '../store/action'


const Completed = () => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)
  
    const newTodo = todo.filter(item=>item.status===true)

      //delete todo
      const handleDelete = (item) => {
       dispatch(deleteTodo(item))
      }
  

    useEffect(() => {  
    dispatch(getData())
      // getTodo()
      
    }, [dispatch])
    
       
    return (<>
      <div style={{ marginTop:"20px" }} >
        {newTodo.length ===0? <h1>No Completed task</h1>: newTodo.map((el) => (
           <div className={classes.todoBox}>
             <Typography className={classes.todoTypo} >
              <p>{el.title}</p> 
             </Typography  >
             <div className={classes.todoIcons}>        
              <DeleteForeverIcon
                size="large"
                style={{ fontSize: '40px' }}
                onClick={() => handleDelete(el)}
                className={classes.deleteTodo}
              />
             </div>
           </div>
         ))}
        </div>
        
   </> ) 
}

export default Completed
