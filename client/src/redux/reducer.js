import {
  GET_All_DOGS,
  CLEAR_ALL_DOGS,
  GET_All_TEMPERAMENTS,
  GET_BY_NAME,
  GET_BY_DETAIL,
  CLEAR_DOG_DETAIL,
  DELETE_DOG,
  PUT_DOG,
  FILTER,
  ORDER,
  RESPONSE_API_DB,
} from "./action-types";

const initialState = {
  allDogs: [],
  allTemperaments: [],
  dogDetail: [],
  dogName: [],
};

// Se define el reducer que actualiza el estado en función de las acciones
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Caso para la accion de obtener todos los perros
    case GET_All_DOGS:
      return {
        ...state,
        allDogs: payload,
      };

    case CLEAR_ALL_DOGS:
      return {
        ...state,
        allDogs: [],
      };
    // Caso para la accion de obtener todos los temperamentos de los perros
    case GET_All_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: payload,
      };
    // Caso para la accion de obtener un perro por nombre
    case GET_BY_NAME:
      return {
        ...state,
        allDogs: payload,
      };
    // Caso para la acción de obtener un perro por ID
    case GET_BY_DETAIL:
      return {
        ...state,
        dogDetail: payload,
      };
    case CLEAR_DOG_DETAIL:
      return {
        ...state,
        dogDetail: [],
      };
    case PUT_DOG:
      return {
        ...state
      }
    case DELETE_DOG:
      // Filtra los perros para excluir el perro eliminado por su ID
      const updatedAllDogs = state.allDogs.filter((dog) => dog.id !== payload);
      return {
        ...state,
        allDogs: updatedAllDogs,
        dogDetail: payload,
      };
    case FILTER:
      let allDogsFiltered = [...state.allDogs]; // Se crea una copia del array original
      
      if (payload === "temperament") {
        allDogsFiltered = allDogsFiltered.filter((dog) => dog.temperament);
        allDogsFiltered.sort((a, b) => a.temperament[0] > b.temperament[0] ? 1 : -1);
      } else if (payload === "name") {
        allDogsFiltered.sort((a, b) => a.id - b.id);
      } else if (payload === "weight") {
        allDogsFiltered.sort((a, b) => a.weight.split(" - ")[0] - b.weight.split(" - ")[0]);
      }
      return {
        ...state,
        allDogs: allDogsFiltered,
      };
    case ORDER:
      const allDogsCopy = [...state.allDogs];
      return {
        ...state,
        allDogs:
          payload === "A"
            ? allDogsCopy.sort((a, b) => a.id - b.id)
            : allDogsCopy.sort((a, b) => b.id - a.id),
      };
    case RESPONSE_API_DB:
      const copyAllDogs = [...state.allDogs];
      return {
        ...state,
        allDogs:
        payload === "db"
        ? copyAllDogs.filter((dog) => dog.id.length > 3)
        : copyAllDogs.sort((a, b) => a.idApi - b.idApi)
      };
    // Cuando no se reconoce el tipo de accion, se retorna el estado actual sin realizar cambios
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
