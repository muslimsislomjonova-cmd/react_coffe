import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* <img src="/imegs/logo.png" alt="CoffeeRoasters Logo" /> */}
      </div>

      <nav className="nav">
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/">CREATE YOUR PLAN</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;