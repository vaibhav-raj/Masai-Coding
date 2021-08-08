import React,{useEffect} from 'react'
import { useParams,useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../styles/TodoItem.module.css'


import axios from 'axios'
import {
    getTodoRequest, getTodoSuccess, getTodoFailure,
    deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure,
    toggleTodoFailure,toggleTodoSuccess, toggleTodoRequest
} from '../store/action'


const TodoItem = () => {

    const history = useHistory()
    const {id} = useParams()
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todos.todo)

    // get single todo 
    const getTodo = async () => {
     try {
       const { data } = await axios.get(`http://localhost:3001/todo/${id}`)
       dispatch(getTodoSuccess(data))
     }
     catch (error) {
       dispatch(getTodoFailure(error))
     }
        
    //delete todo
    }
    const deleteTodo = async (id) => {
        dispatch(deleteTodoRequest())
     try {
       const { data } = await axios.delete(`http://localhost:3001/todo/${id}`)
       const response = await axios.get(`http://localhost:3001/todo`)
         dispatch(deleteTodoSuccess(response.data))
        history.push("/")

     }
     catch (error) {
       dispatch(deleteTodoFailure(error))
     }  
    }


    useEffect(() => {  
    dispatch(getTodoRequest())
    getTodo()
        
    }, [])
    

    const toggleHandle = async() => {
        toggleTodoRequest()

        try {
          const { data } = await axios.patch(`http://localhost:3001/todo/${id}`, { ...todo.todo, status: !todo.status })
            dispatch(toggleTodoSuccess(data)) 
        }
        catch {
            dispatch(toggleTodoFailure)
        }
     }

       
    return (
        <div className={styles.card} >
            <h2>Title: {todo.title}</h2>
            <h3>Status: {todo.status ? "Complete" : "Incomplete"}</h3>
            <button className={styles.dlt} onClick={()=>deleteTodo(todo.id)}>DELETE</button>
            <button className={styles.toggle} onClick={()=>toggleHandle()}  >TOGGLE</button>

            <Link to={`/todo/${id}/edit` }>
               <button className={styles.edit} >EDIT</button>          
            </Link>
        </div>
    )
}

export default TodoItem
