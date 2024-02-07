import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import './NavBar.css';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <div className="left-nav">
                <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link>
                <Link to="/collections" style={{ textDecoration: 'none' }}>Products</Link>
                <Link to="/questions" style={{ textDecoration: 'none' }}>FAQ</Link>
            </div>
            <div className="right-nav">
                {/* Hello, {user.name} */}
                {/* <Link to="#" style={{ textDecoration: 'none' }} onClick={handleLogOut}>Log Out</Link> */}
                <button type='button' onClick={handleLogOut}>Log Out</button>
            </div>
        </nav>
    )
}