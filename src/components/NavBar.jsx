import CartWidget from "./CartWidget";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="groupNav">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div className="relative">
          <a href="#" className="aNav" onClick={(e) => e.preventDefault()}>
            Categorías
          </a>
          <div className="megaMenu">
            <div className="column">
              <NavLink to={"/category/Acción"} className="aNav">
                Acción
              </NavLink>
              <NavLink to={"/category/Arcade"} className="aNav">
                Arcade
              </NavLink>
              <NavLink to={"/category/Aventura"} className="aNav">
                Aventura
              </NavLink>
              <NavLink to={"/category/Buena Trama"} className="aNav">
                Buena Trama
              </NavLink>
              <NavLink to={"/category/Cartas y Mesa"} className="aNav">
                Cartas y Mesa
              </NavLink>
              <NavLink to={"/category/Casuales"} className="aNav">
                Casuales
              </NavLink>
              <NavLink to={"/category/Defensa de Torres"} className="aNav">
                Defensa de Torres
              </NavLink>
            </div>
            <div className="column">
              <NavLink to={"/category/Deportes y Carreras"} className="aNav">
                Deportes y Carreras
              </NavLink>
              <NavLink to={"/category/Disparos"} className="aNav">
                Disparos
              </NavLink>
              <NavLink to={"/category/Espacio"} className="aNav">
                Espacio
              </NavLink>
              <NavLink to={"/category/Estrategia"} className="aNav">
                Estrategia
              </NavLink>
              <NavLink to={"/category/Hack and Slash"} className="aNav">
                Hack and Slash
              </NavLink>
              <NavLink to={"/category/Metroidvania"} className="aNav">
                Metroidvania
              </NavLink>
              <NavLink to={"/category/Mundo Abierto"} className="aNav">
                Mundo Abierto
              </NavLink>
            </div>
            <div className="column">
              <NavLink to={"/category/Plataformas"} className="aNav">
                Plataformas
              </NavLink>
              <NavLink to={"/category/Puzzles"} className="aNav">
                Puzzles
              </NavLink>
              <NavLink
                to={"/category/Roguelikes y Roguelites"}
                className="aNav"
              >
                Roguelikes y Roguelites
              </NavLink>
              <NavLink to={"/category/Rol"} className="aNav">
                Rol
              </NavLink>
              <NavLink to={"/category/Simulación"} className="aNav">
                Simulación
              </NavLink>
              <NavLink to={"/category/Supervivencia"} className="aNav">
                Supervivencia
              </NavLink>
              <NavLink to={"/category/Terror"} className="aNav">
                Terror
              </NavLink>
            </div>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
