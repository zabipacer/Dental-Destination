// Layout.js
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Nav";
import TopBar from "./components/TopBar";
const Layout = () => {
  return (
    <>

      <Navbar/>
      <div className="main-content">
        {/* The Outlet will render the matching child route */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;