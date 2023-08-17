import style from "./Cards.module.css";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import { useSelector } from "react-redux";

const Cards = ({page, setPage, pageLength, maximum}) => {
  const allDogs = useSelector((state) => state.allDogs)
  return (
    <div>
      <div className={style["cards-list"]}> 
      {/* Iterate over the list of dogs and create a Card component for each one*/}
      {/* In the slice, a formula is used to mark which cards are rendered in the local page state.*/}
      {
        allDogs
        .slice((page - 1) * pageLength, (page - 1) * pageLength + pageLength)
        .map((dog) => {
          return <Card dog={dog} />
        })
      }
      </div>
      {/* The necessary props are passed to Paginated*/}
      <Paginated page={page} setPage={setPage} maximum={maximum} />
    </div>
  );
};

export default Cards;
