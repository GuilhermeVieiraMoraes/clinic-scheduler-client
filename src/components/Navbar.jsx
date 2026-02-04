import styles from './Navbar.module.css'

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h3>MediBook</h3>
        <ul className={styles.navbar_btn_list}>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar