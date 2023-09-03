import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const SearchBar = ({setPage}) => {
  const dispatch = useDispatch();
  // This state is for the input of the searchBar
  const [name, setName] = useState("");
  // It prevents the page from being reset and we pass what is written in the input to the local state
  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }
  // This handle is made so that when searching in the input, a filter is done by name
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(name));
    setPage(1);
  }

  return (
    <div className={style["search-bar"]} >
      <form>
        <input type="search" onChange={handleChange} className={style.SearchBar} placeholder={"Buscar..."} />
        <button type="submit" onClick={handleSubmit} className={style["button-navBar"]}>Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
