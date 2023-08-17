import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, clearAllDogs, filterCards, orderCards, filterResponse } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  // Local state for page number
  const [page, setPage] = useState(1);
  // Local state for the number of cards per page
  const [pageLength, setPageLength] = useState(8);
  // Calculation of the maximum number of pages for pagination
  const maximum = allDogs.length / pageLength;
  // Function to sort the dogs
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  }
// Function to filter the dogs
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
// Function to filter by api or db
  const handleFilterApiDb = (event) => {
    dispatch(filterResponse(event.target.value))
  }

  useEffect(() => {
    dispatch(getAllDogs());
    return () => {
      dispatch(clearAllDogs());
    }
  }, [dispatch, setPageLength]);

  return (
    <div className={style.home}>
      <NavBar />
      <div className={style["container-buttons"]}>
        <select name="order" id="order" onChange={handleOrder} className={style.selectButton}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
       </select>
        <select name="filter" id="filter" onChange={handleFilter} className={style.selectButton}>
          <option value="name">Todos</option>
          <option value="temperament">Temperamentos</option>
        </select>
        <select name="filter3" id="filter3" onChange={handleFilter} className={style.selectButton}>
          <option value="name">Alfabetico</option>
          <option value="weight">Peso</option>
        </select>
        <select name="filter2" id="filter2" onChange={handleFilterApiDb} className={style.selectButton}>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>
      </div>
      {/* Relevant data is passed as props to the Cards and Paginated component*/}
      <Cards page={page} setPage={setPage} maximum={maximum} pageLength={pageLength} />
    </div>
  );
};

export default Home;
