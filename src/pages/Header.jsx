import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      {/* <div className="logo">
        <img src="/imegs/logo.png" alt="CoffeeRoasters Logo" />
      </div> */}

      <nav className="nav-links">
        <Link to="/Home">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/">CREATE YOUR PLAN</Link>
      </nav>
    </header>
  );
}

export default Header;
