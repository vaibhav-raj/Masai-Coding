import React,{useState} from 'react'
import axios from 'axios'
import { useParams,useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateTodoRequest, updateTodoSuccess, updateTodoFailure,getTodoSuccess
} from '../store/action'

import styles from '../styles/TodoInput.module.css'


const Edit = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const todo = useSelector((state) => state.todos)

    const [newValue,setNewValue] = useState(todo.newTodo.title)

  const updateTodo = async () => {
      updateTodoRequest()
     try {
       const { data } = await axios.patch(`http://localhost:3001/todo/${id}`,{...todo.newTodo,title:newValue})
       dispatch(updateTodoSuccess(data))
      //  const {response = data} = await axios.get(`http://localhost:3001/todo`)
      //  dispatch(getTodoSuccess(response))
         history.push(`/todo/${id}`)
     }
     catch (error) {
       dispatch(updateTodoFailure(error))
     }  
    }


    return (<>
        <h1>UPDATE YOUR TODO</h1>
      <div className={styles.todoInput} >
            <input type="text" value={newValue} onChange={(e)=> setNewValue(e.target.value)} placeholder="Enter a todo" />
            <button className={styles.addBtn}  onClick={()=>updateTodo(newValue)}>UPDATE</button>            
        </div>
  </>  )
}

export default Edit
