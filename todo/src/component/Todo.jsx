import React,{useEffect} from 'react'
import TodoInput from './TodoInput'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {
  getTodoRequest, getTodoSuccess, getTodoFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure,
  totalTodo,  totalCompletedTodo,
} from '../store/action'

import { Link } from "react-router-dom"
import styles from "../styles/todo.module.css"

 const Todo = () => {

   const dispatch = useDispatch()
  const {  isAuth } = useSelector((state) => state.auth);

   
   const { todo, is_loading, is_error, total ,complete} = useSelector((state) => ({
     todo: state.todos.todo,
     is_loading: state.todos.loading ? !state.todos.loading : state.todos.loading,
       is_error: state.todos.Error, total:state.todos.total, complete:state.todos.complete
      
   }))
   

   const FetchTodo = async () => {
     
     try {
       const { data } = await axios.get(`http://localhost:3001/todo`)
       dispatch(getTodoSuccess(data))
       dispatch(totalCompletedTodo())
       dispatch(totalTodo())
     }
     catch (error) {
       dispatch(getTodoFailure(error))
     }  
   }


   useEffect(() => {
     getTodoRequest()
     FetchTodo()
    },[dispatch])

   const handleTodo = async (payload) => {
      
     try {
        addTodoRequest()
        await axios.post(`http://localhost:3001/todo`,payload)
       dispatch(addTodoSuccess(payload))
        FetchTodo()
     }
     catch (error) {
       dispatch(addTodoFailure(error))
     }
   }
   
   if (!isAuth) {
        return <Redirect to="/login"></Redirect>
    }
   
   return is_loading ? ( <div>Loading...</div>):is_error?( <div>somethings went wrong...</div>) :(
    <div  >
       <h1>Redux Todo</h1>

       <div className={styles.count} >
         <h3>TOTAL: {total}</h3>
           <h3>COMPLETED: {complete} </h3>
       </div>
       <div className={styles.card}>
         <div className={styles.count} >
         </div>

       <TodoInput handleTodo={handleTodo} />
    

      {todo.length>0 &&  todo.map(el => <div  className={styles.todo} >
        <Link to={`/todo/${el.id}`} > {el.title} </Link>
      </div>)}
         
      </div>
        
    </div>
     )
}

export default Todo
