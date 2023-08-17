import { GET_All_DOGS, CLEAR_ALL_DOGS, GET_All_TEMPERAMENTS, GET_BY_NAME, GET_BY_DETAIL, CLEAR_DOG_DETAIL, DELETE_DOG, PUT_DOG, FILTER, ORDER, RESPONSE_API_DB } from "./action-types";
import axios from "axios";

// Asynchronous action to get all dogs
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
// Accion para limpiar el estado al cambiar de componente
export const clearAllDogs = () => {
  try {
    return {
      type: CLEAR_ALL_DOGS,
    };
  } catch (error) {
    alert(`ha ocurrido el siguiente error: ${error.message}`);
  }
};

// Asynchronous action to obtain all the temperaments of the dogs
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
// Asynchronous action to get a dog by name
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
// Asynchronous action to get the details of a dog by id
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
// Action to clear the state when changing components
export const clearDogDetail = () => {
  try {
    return {
      type: CLEAR_DOG_DETAIL,
    };
  } catch (error) {
    alert(`ha ocurrido el siguiente error: ${error.message}`);
  }
};
// Asynchronous action to remove a dog by name
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
// Asynchronous action to modify a db dog
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
// Action to filter the dogs
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
// Action to order the cards ascending or descending
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
// Action to filter the dogs by api or db
export const filterResponse = (value) => {
  try {
    return {
      type: RESPONSE_API_DB,
      payload: value
    };
  } catch (error) {
    alert(`ha ocurrido el siguiente error: ${error.message}`);
  }
};