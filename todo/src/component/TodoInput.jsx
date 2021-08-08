import React, { useState } from 'react'
import styles from '../styles/TodoInput.module.css'

const TodoInput = ({handleTodo}) => {

    const [title, setTitle] = useState("")


    const handleSubmit = () => {

        const payload = {
            title: title,
            status: false,
            id: Date.now()
        }

        if (payload.title !== "") {
            handleTodo(payload)
        }

        // setTitle("")
    }

    return (
        <div className={styles.todoInput} >
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter a todo..." />
            <button className={styles.addBtn} onClick={handleSubmit}>ADD TODO</button>
        </div>
    )
}

export default TodoInput
