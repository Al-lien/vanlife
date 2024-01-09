// react-router
import { NavLink, Link } from "react-router-dom";

// assets
import avatarIcon from "../assets/images/avatar-icon.png";

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatarIcon} className="login-icon" />
        </Link>
        
      </nav>
    </header>
  );
}

export default Header;
