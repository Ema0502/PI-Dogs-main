import { useState } from "react";
import style from "./Paginated.module.css";

const Paginated = ({page, setPage, maximum}) => {
  // Local state for the value of the paging input
  // This state is used so that the state is set only when enter is pressed on the input
  const [input, setInput] = useState(1);

  // Function to go to the previous page
  const previusPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  }

  // Function to go to the next page
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  }

  // The keyDown event of the pagination input is handled
  const onKeyDown = (event) => {
    // keyCode refers to the enter key
    if (event.keyCode === 13) {
      setPage(parseInt(event.target.value));
      // It is validated that the value entered is valid, if it is a string or boolean, or a number less than or greater than the limits, it is set to page 1
      if (
        parseInt(event.target.value < 1) ||
        parseInt(event.target.value) > Math.ceil(maximum) ||
        isNaN(parseInt(event.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(event.target.value));
      }
    }
  };

  // Handle the onChange event of the pagination input
  const onChange = event => {
    setInput(event.target.value);
  };

  return (
    <div className={style.container}>
      {/* Button to go to the previous page*/}
      <button onClick={previusPage} className={style["button-navBar"]} disabled={page <= 1}>anterior</button>
      {/* pagination input*/}
      <input className={style.SearchBar} name="page" value={input} onChange={(event) => onChange(event)} onKeyDown={(event) => onKeyDown(event)} />
      {/* Text showing current page and maximum pages*/}
      <p className={style.textPagined}>de {Math.ceil(maximum)}</p>
      {/* Button to go to the next page*/}
      <button onClick={nextPage} className={style["button-navBar"]} disabled={page >= maximum}>siguiente</button>
    </div>
  )
};

export default Paginated;