import style from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/validation";
import axios from "axios";

const Form = () => {
  //estado local para los los inputs
  const [input, setInput] = useState({
    name: "",
    image: "",
    life_span: "",
    height: "",
    weight: "",
    temperament: []
  });
  //estado local para almacenar los errores y mostrar las validaciones
  const [error, setError] = useState({
    name: "campo obligatorio",
    image: "campo obligatorio",
    life_span: "campo obligatorio",
    height: "campo obligatorio",
    weight: "campo obligatorio",
    temperament: "campo obligatorio",
  });
  //estado local para la respuesta en caso de ser exitosa
  const [response, setResponse] = useState("");
  
  const handleChange = (event) => {
    // Se actualiza el estado de los inputs con los valores actuales del formulario
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
    // Se valida el formulario y se actualiza el estado local de errores con los mensajes de errores correspondientes de la validacion
    setError(validation({ 
      ...input, 
      [event.target.name]: event.target.value 
    }))
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
    try {
      const { data } = await axios.post("http://localhost:3001/dogs", input);
      setResponse(data); // Almacena la respuesta en el estado 'response'
    } catch (error) {
      alert(`No pudo completarse la solicitud por el siguiente error: ${error.message}`); // Manejo de errores en caso de que falle la solicitud
    }
  };
  // Función para verificar si hay errores en el estado de errores
  const hasErrors = () => {
    for (const key in error) {
      if (error[key] !== "") {
        return true; // Hay un mensaje de error no vacío
      }
    }
    return false; // No se encontraron mensajes de error no vacíos
  };
  
  return (
    <form onSubmit={handleSubmit} className={style["body-form"]}>

      <div className={style["box-text"]}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={input.name} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" name="image" value={input.image} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.image && <p style={{ color: "red" }}>{error.image}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="life_span">Tiempo de vida:</label>
        <input type="text" id="life_span" name="life_span" value={input.life_span} onChange={handleChange} />
        {/* Muestra el mensaje de error existe */}
        {error.life_span && <p style={{ color: "red" }}>{error.life_span}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="height">Tamaño:</label>
        <input type="text" id="height" name="height" value={input.height} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.height && <p style={{ color: "red" }}>{error.height}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="weight">Peso:</label>
        <input type="text" id="weight" name="weight" value={input.weight} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.weight && <p style={{ color: "red" }}>{error.weight}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="temperament">Temperamentos:</label>
        <input type="text" id="temperament" name="temperament" value={input.temperament} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.temperament && <p style={{ color: "red" }}>{error.temperament}</p>}
      </div>
      {/* Botón de envío */}
      <button type="submit" className={style["button-submit"]} disabled={hasErrors()}>
        CREAR
      </button>

      {/* Muestra la respuesta si existe */}
      {response && 
        <div className={style["box-text"]}>
          <p>Perro creado satisfactoriamente!</p>
        </div>
      }
    </form>
  );
};

export default Form;