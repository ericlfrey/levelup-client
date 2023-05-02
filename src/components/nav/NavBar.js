import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link to="/events">
                    Events
                </Link>
            </li>
            <li className="navbar__item">
                <Link to="/games">
                    Games
                </Link>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item log-reg">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <div className="log-reg navbar__item">
                        <li className="navbar__item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </div>
            }        </ul>
    )
}
