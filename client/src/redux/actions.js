import { GET_All_DOGS, CLEAR_ALL_DOGS, GET_All_TEMPERAMENTS, GET_BY_NAME, GET_BY_DETAIL, CLEAR_DOG_DETAIL, DELETE_DOG, PUT_DOG, FILTER, ORDER } from "./action-types";
import axios from "axios";

// Accion asincronica para obtener todos los perros
export const getAllDogs = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/dogs");
      return dispatch({
        type: GET_All_DOGS,
        payload: data,
      });
    } catch (error) {
      alert(`ha ocurrido el siguiente error: ${error.message}`);
    }
  };
};

export const clearAllDogs = () => {
  try {
    return {
      type: CLEAR_ALL_DOGS,
    };
  } catch (error) {
    alert(`ha ocurrido el siguiente error: ${error.message}`);
  }
};

// Accion asincronica para obtener todos los temperamentos de los perros
export const getAllTemperaments = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/temperaments");
      return dispatch({
        type: GET_All_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      alert(`ha ocurrido el siguiente error: ${error.message}`);
    }
  };
};
// Accion asincronica para obtener un perro por nombre
export const getByName = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(`http://localhost:3001/search?name=${name}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert(`ha ocurrido el siguiente error: ${error.message}`);
    }
  };
};
// Accion asincronica para obtener los detalles de un perro por id
export const getByDetail = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: GET_BY_DETAIL,
        payload: data,
      });
    } catch (error) {
      alert(`ha ocurrido el siguiente error: ${error.message}`);
    }
  };
};

export const clearDogDetail = () => {
  try {
    return {
      type: CLEAR_DOG_DETAIL,
    };
  } catch (error) {
    alert(`ha ocurrido el siguiente error: ${error.message}`);
  }
};

export const deleteDog = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`http://localhost:3001/delete?name=${name}`);
      dispatch(getAllDogs());
      alert(data);
      return dispatch({
        type: DELETE_DOG, 
        payload: data
      });
    } catch (error) {
      alert(`ha ocurrido el siguiente error: ${error.message}`);
    }
  };
};

export const putDog = (modifications) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.put("http://localhost:3001/dogs/", modifications);
      dispatch(getByDetail(data.id));
      return dispatch({
        type: PUT_DOG,
        payload: data,
      });
    } catch (error) {
      alert(`ha ocurrido el siguiente error: ${error.message}`);
    }
  };
};

export const filterCards = (value) => {
  try {
    return {
      type: FILTER,
      payload: value
    };
  } catch (error) {
    alert(`ha ocurrido el siguiente error: ${error.message}`);
  }
};

export const orderCards = (order) => {
  try {
    return {
      type: ORDER,
      payload: order
    };
  } catch (error) {
    alert(`ha ocurrido el siguiente error: ${error.message}`);
  }
};
