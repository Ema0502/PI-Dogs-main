import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({dog}) => {

  const { id, name, image, temperament, weight, height} = dog;
  return (
    <div className={style["card-container"]}>
      {/* El navLink se encarga de enviar al usuario al detail de esta card */}
      <NavLink to={`/home/${id}`}>
        <img src={image} alt="" className={style["image-card"]} />
        <div className={style["box-text"]}>
          <h3>Nombre: {name}</h3>
          <h3>Peso: {weight}</h3>
          <h3>Altura: {height}</h3>
          <h3>Temperamentos: {temperament}</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;