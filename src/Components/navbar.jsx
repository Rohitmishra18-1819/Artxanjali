import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>

      <Link to="/images">All Images</Link>
    </nav>
  );
};

export default Navbar;