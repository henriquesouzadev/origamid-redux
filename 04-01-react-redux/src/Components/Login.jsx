import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../store/login"
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login({ username, password }))
  }

  return (
    <form onSubmit={handleSubmit} className="anime">
      <label htmlFor="username" className={styles.label}>
        Usuário
      </label>
      <input
        type="text"
        className={styles.input}
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password" className={styles.label}>
        Senha
      </label>
      <input
        type="password"
        className={styles.input}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className={styles.button}>Enviar</button>
    </form>
  )
}

export default Login;