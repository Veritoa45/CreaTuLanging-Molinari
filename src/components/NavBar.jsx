import CartWidget from "./CartWidget";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-html text-white flex justify-between items-center px-[20px] py-[10px]">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="flex justify-between items-center gap-[30px]">
        <a href="#" className="text-nav no-underline">
          Inicio
        </a>
        <a href="#" className="text-nav no-underline">
          Productos
        </a>
        <a href="#" className="text-nav no-underline">
          Contacto
        </a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
