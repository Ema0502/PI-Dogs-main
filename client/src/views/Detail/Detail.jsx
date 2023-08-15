import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getByDetail, clearDogDetail  } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import { deleteDog, putDog } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);

  const handleDelete = () => {
    dispatch(deleteDog(dogDetail.name));
  };

  const handlePut = () => {
    dispatch(putDog());
  };

  useEffect(() => {
    //Hace un dispatch para traer al perro por id
    dispatch(getByDetail(id));
    // Al desmontar el componente, dispara la acción para limpiar el detalle
    return () => dispatch(clearDogDetail());
  }, [dispatch, id]);

  // Condición para mostrar el botón de eliminar
  const dbDeleteButton = id.length > 3;

  return (
    <div className={style["body-bg"]}>
      <NavBar/>
      <div className={style["card-container"]}>
          <NavLink to="/home">
            {dbDeleteButton && <button onClick={handleDelete} className={style["buttonDelete"]}>X</button>}
          </NavLink>
      <img src={dogDetail?.image} alt="" className={style["image-dog"]} />
        <div className={style["box-text"]}>
          <h3>ID: {id}</h3>
          <h3>Nombre: {dogDetail.name}</h3>
          <h3>Tiempo de vida: {dogDetail.life_span}</h3>
          <h3>Tamaño: {dogDetail.height}</h3>
          <h3>Peso: {dogDetail.weight}</h3>
          <h3>Temperamentos: {dogDetail.temperament}</h3>
          {dbDeleteButton && <button onClick={handlePut} className={style["buttonPut"]}>Modificar</button>}
        </div>
      </div>
    </div>
  );
};

export default Detail;
