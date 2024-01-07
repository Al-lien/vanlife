// react-router
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end // so "Dashboard" is NOT considered active when clicking on other links
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
