import style from "./Cards.module.css";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import { useSelector } from "react-redux";

const Cards = ({page, setPage, pageLength, maximum}) => {
  const allDogs = useSelector((state) => state.allDogs) //Acceso al estado global
  return (
    <div>
      <div className={style["cards-list"]}> 
      {/* Se itera sobre la lista de perros y creamos un componente Card para cada uno */}
      {/* En el slice se usa una formula para marcar que cards se renderizan en el estado local page */}
      {
        allDogs
        .slice((page - 1) * pageLength, (page - 1) * pageLength + pageLength)
        .map((dog) => {
          return <Card dog={dog} />
        })
      }
      </div>
      {/* Se pasan las props necesarias a Paginated */}
      <Paginated page={page} setPage={setPage} maximum={maximum} />
    </div>
  );
};

export default Cards;
