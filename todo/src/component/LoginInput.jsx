import React,{ useState} from 'react'
import styles from '../styles/Login.module.css'

const LoginInput = ({handleNewLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {

        handleNewLogin({email,password})
        
    }



    return (<>
        <div className={styles.form} >
        <h1>LOGIN</h1>
        <p>Please enter your login and password!</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email" />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="enter your password" />
            <button onClick={handleLogin} className={styles.addBtn} >login</button>
        </div>
    </>)
}

export default LoginInput
