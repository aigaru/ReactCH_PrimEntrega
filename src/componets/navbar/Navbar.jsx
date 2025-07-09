import "./Navbar.css";

export default function NavBar() {
  return (
<nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#hardware" className="nav-link">Hardware</a>
          </li>
          <li className="nav-item">
            <a href="#deporte" className="nav-link">Deporte</a>
          </li>
          <li className="nav-item">
            <a href="#hogar" className="nav-link">Hogar</a>
          </li>
          <li className="nav-item">
            <a href="#linea-blanca" className="nav-link">Línea Blanca</a>
          </li>
        </ul>
      </nav>
  );
}
