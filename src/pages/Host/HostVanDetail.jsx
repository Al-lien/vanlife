// react
import { useEffect, useState } from "react";

// react-router
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

function HostVanDetail() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/host/vans/${params.id}`);
      const json = await response.json();
      setCurrentVan(json.vans);
    };
    fetchData();
  }, [params.id]);

  if (!currentVan) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}

export default HostVanDetail;
