import style from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/validation";
import axios from "axios";

const Form = () => {
  // Local state for the inputs
  const [input, setInput] = useState({
    name: "",
    image: "",
    life_span: "",
    height: "",
    weight: "",
    temperament: [],
  });
  // Local state to store errors and display validations
  const [error, setError] = useState({
    name: "campo obligatorio",
    image: "campo obligatorio",
    life_span: "campo obligatorio",
    height: "campo obligatorio",
    weight: "campo obligatorio",
    temperament: "campo obligatorio",
  });
  // Local state for the response in case of success
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
    // The status of the inputs is updated with the current values ​​of the form
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    // The form is validated and the local error status is updated with the corresponding validation error messages.
    setError(
      validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    // Prevent form submission by default
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/dogs", input);
      // Stores the response in the 'response' state
      setResponse(data);
    } catch (error) {
      // Error handling in case the request fails
      alert(
        `No pudo completarse la solicitud por el siguiente error: ${error.message}`
      );
    }
  };
  // Function to check for errors in the error state
  const hasErrors = () => {
    for (const key in error) {
      if (error[key] !== "") {
        // There is a non-empty error message
        return true;
      }
    }
    // No non-empty error messages found
    return false;
  };

  return (
    <form onSubmit={handleSubmit} className={style["body-form"]}>

      <div className={style["box-text"]}>
        <div className={style["form-field"]}>
          <label className={style["label"]} htmlFor="name">Nombre: </label>
          <input type="text" id="name" name="name" value={input.name} onChange={handleChange} />
        </div>
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>

      <div className={style["box-text"]}>
        <div className={style["form-field"]}>
          <label className={style["label"]} htmlFor="image">Imagen: </label>
          <input type="text" id="image" name="image" value={input.image} onChange={handleChange} />
        </div>
        {error.image && <p style={{ color: "red" }}>{error.image}</p>}
      </div>

      <div className={style["box-text"]}>
        <div className={style["form-field"]}>
          <label className={style["label"]} htmlFor="life_span">Tiempo de vida: </label>
          <input type="text" id="life_span" name="life_span" value={input.life_span} onChange={handleChange} />
        </div>
        {error.life_span && <p style={{ color: "red" }}>{error.life_span}</p>}
      </div>

      <div className={style["box-text"]}>
        <div className={style["form-field"]}>
          <label className={style["label"]} htmlFor="height">Tamaño: </label>
          <input type="text" id="height" name="height" value={input.height} onChange={handleChange} />
        </div>
        {error.height && <p style={{ color: "red" }}>{error.height}</p>}
      </div>

      <div className={style["box-text"]}>
        <div className={style["form-field"]}>
          <label className={style["label"]} htmlFor="weight">Peso: </label>
          <input type="text" id="weight" name="weight" value={input.weight} onChange={handleChange} />
        </div>
        {error.weight && <p style={{ color: "red" }}>{error.weight}</p>}
      </div>

      <div className={style["box-text"]}>
        <div className={style["form-field"]}>
          <label className={style["label"]} htmlFor="temperament">Temperamentos: </label>
          <input type="text" id="temperament" name="temperament" value={input.temperament} onChange={handleChange} />
        </div>
        {error.temperament && <p style={{ color: "red" }}>{error.temperament}</p>}
      </div>
      {/* submit button*/}
      <button type="submit" className={style["button-submit"]} disabled={hasErrors()}>
        CREAR
      </button>

      {/* Show the answer if it exists*/}
      {response && (
        <div className={style["box-text"]}>
          <p>Perro creado satisfactoriamente!</p>
        </div>
      )}
    </form>
  );
};

export default Form;
