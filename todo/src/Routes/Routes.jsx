import React from 'react'
import Todo from '../component/Todo'
import Login from '../component/Login'
import TodoItem from '../component/TodoItem'
import Navbar from '../component/Navbar'
import Edit from '../component/Edit'

import {
  Switch,
  Route,
} from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Navbar/>
                <Switch>
                    <Route path="/" exact >
                        <Todo/>
                    </Route>
                    <Route path="/login"  >
                        <Login/>
                    </Route>
                    <Route path="/todo/:id" exact >
                        <TodoItem/>
                    </Route>
                    <Route path="/todo/:id/edit" >
                        <Edit/>
                    </Route>
                </Switch>
        </div>
    )
}

export default Routes
