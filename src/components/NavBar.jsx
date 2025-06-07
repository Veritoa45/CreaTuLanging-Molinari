import CartWidget from "./CartWidget";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="groupNav">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="relative">
          <a href="#" className="aNav" onClick={(e) => e.preventDefault()}>
            Categorías
          </a>
          <div className="megaMenu">
            <div className="column">
              <a className="aNav">Acción</a>
              <a className="aNav">Arcade</a>
              <a className="aNav">Aventura</a>
              <a className="aNav">Buena Trama</a>
              <a className="aNav">Cartas y Mesa</a>
              <a className="aNav">Casuales</a>
              <a className="aNav">Defensa de Torres</a>
            </div>
            <div className="column">
              <a className="aNav">Deportes y Carreras</a>
              <a className="aNav">Disparos</a>
              <a className="aNav">Espacio</a>
              <a className="aNav">Estrategia</a>
              <a className="aNav">Hack and Slash</a>
              <a className="aNav">Metroidvania</a>
              <a className="aNav">Mundo Abierto</a>
            </div>
            <div className="column">
              <a className="aNav">Plataformas</a>
              <a className="aNav">Puzzles</a>
              <a className="aNav">Roguelikes y Roguelites</a>
              <a className="aNav">Rol</a>
              <a className="aNav">Simulación</a>
              <a className="aNav">Supervivencia</a>
              <a className="aNav">Terror</a>
            </div>
          </div>
        </div>
        <a href="#" className="aNav">
          Algo
        </a>
        <a href="#" className="aNav">
          Otro algo
        </a>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
