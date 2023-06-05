import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <div
      className="navbar"
      style={{
        clipPath: toggle === true && "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <ul className="navbar-links">
        <Link
          className="navbar-link"
          onClick={() => {
            setToggle(false);
          }}
          to={"/"}
        >
          <i className="bi bi-house-fill"></i>
          Home
        </Link>
        <Link
          className="navbar-link"
          onClick={() => {
            setToggle(false);
          }}
          to={"/about"}
        >
          <i className="bi bi-bank2"></i>
          About
        </Link>
        <Link
          className="navbar-link"
          onClick={() => {
            setToggle(false);
          }}
          to={"/login"}
        >
          <i className="bi bi-arrow-right-square-fill"></i>
          Login
        </Link>
        <Link
          className="navbar-link"
          onClick={() => {
            setToggle(false);
          }}
          to={"/register"}
        >
          <i className="bi bi-person-plus-fill"></i>
          Register
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
