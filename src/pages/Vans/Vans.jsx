// react-router
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

// functions
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const vans = useLoaderData();
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-title">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <button
        onClick={() => setSearchParams({ type: "rugged" })}
        className={`van-type rugged ${
          typeFilter === "rugged" ? "selected" : ""
        }`}
      >
        Rugged
      </button>
      <button
        onClick={() => setSearchParams({ type: "simple" })}
        className={`van-type simple  ${
          typeFilter === "simple" ? "selected" : ""
        }`}
      >
        Simple
      </button>
      <button
        onClick={() => setSearchParams({ type: "luxury" })}
        className={`van-type luxury  ${
          typeFilter === "luxury" ? "selected" : ""
        }`}
      >
        Luxury
      </button>
      {typeFilter ? (
        <button
          onClick={() => setSearchParams({})}
          className={"van-type clear-filters"}
        >
          Clear
        </button>
      ) : null}
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

export default Vans;
