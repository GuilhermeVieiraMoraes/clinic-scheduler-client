import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <h3>MediBook</h3>
        <ul>
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