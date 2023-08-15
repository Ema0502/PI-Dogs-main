import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style["body-bg"]}>
      <h1 className={style.box}>Te invitamos a navegar por nuestro sitio para experimentar una gran experiencia!</h1>
      <button className={style["button-intro"]}>
        <NavLink to="/home">INGRESAR</NavLink>
      </button>
    </div>
  );
};

export default Landing;