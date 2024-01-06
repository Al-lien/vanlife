import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import About from "./pages/About";

// styles
import "./App.scss";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
