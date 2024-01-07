// react-router
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
