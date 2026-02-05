import styles from './Login.module.css'

import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className={styles.login_card}>
      <h1>Bem-vindo de volta</h1>
      <p>Agende suas consultas com facilidade e rapidez.</p>
      <div className={styles.user_type}>
        <button>Cliente</button>
        <button>Administrador</button>
      </div>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input type="text" placeholder="Insert username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder="Insert password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login