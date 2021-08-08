import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {saveData} from './LocalStore'
import {logoutSuccess} from '../Auth/action'

const Navbar = () => {

    const { isAuth } = useSelector((state) => state.auth)
   const dispatch = useDispatch()
        const handleLogout = () => {
            if (isAuth) {
                
                dispatch(logoutSuccess())
                saveData("token","")
            }
        }

    return (
        <div className={styles.topnav} >
            <Link to='/' >Home</Link>
            <Link onClick={handleLogout} to="/login">{isAuth ? "LogOut" : "LogIn"}</Link>
        </div>
    )
}

export default Navbar
