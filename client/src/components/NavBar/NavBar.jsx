import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar"
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className={style["navBar-container"]}>
      <div className={style["navBar"]}>
        {/* Boton para enviar al usuario ruta del home */}
        {location.pathname !== "/home" && 
        <NavLink to="/home" className={style["button-navBar"]}>Home</NavLink>}
        {/* Boton para enviar al usuario ruta para crear un perro */}
        {location.pathname !== "/create" &&
        <NavLink to="/create" className={style["button-navBar"]}>Crear</NavLink>}
        {/* Boton para enviar al usuario ruta para crear un perro */}
        {location.pathname !== "/about" &&
        <NavLink to="/about" className={style["button-navBar"]}>About</NavLink>}
        {location.pathname === "/home" && <SearchBar />}
      </div>
    </div>
  );
};

export default NavBar;
