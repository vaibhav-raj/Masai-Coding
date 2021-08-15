import React from 'react'
import Completed from '../Component/Completed'
import Todo from '../Component/Todo'
import Navbar from '../Component/Navbar'
import Item from '../Component/Item'

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
                <Route path="/item/:id" exact >
                        <Item/>
                </Route>
                <Route path="/completed" exact >
                        <Completed/>
                </Route>
                </Switch>
        </div>
    )
}

export default Routes
