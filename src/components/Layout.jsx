// react-router
import { Outlet } from "react-router-dom";

// pages & components
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
