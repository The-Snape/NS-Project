import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Network Security</h1>
      <div className="navbar">
        <Link to="/">Home</Link>
        <div class="dropdown">
          <button class="dropbtn">
            Assignment
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/pa1">Practical Assignment 0</Link>
            <Link to="/pa2">Practical Assignment 1</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
