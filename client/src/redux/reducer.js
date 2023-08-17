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

// Define the reducer that updates the state based on the actions
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Case for the action of getting all the dogs
    case GET_All_DOGS:
      return {
        ...state,
        allDogs: payload,
      };
    // Case for cleaning up the state of rendered dogs
    case CLEAR_ALL_DOGS:
      return {
        ...state,
        allDogs: [],
      };
    // Case for getting all the temperaments of dogs
    case GET_All_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: payload,
      };
    // Case for the action of obtaining a dog by name
    case GET_BY_NAME:
      return {
        ...state,
        allDogs: payload,
      };
    // Case to get a dog by id
    case GET_BY_DETAIL:
      return {
        ...state,
        dogDetail: payload,
      };
    // Case to clean the state of the detail
    case CLEAR_DOG_DETAIL:
      return {
        ...state,
        dogDetail: [],
      };
    // Case to modify a dog from the db
    case PUT_DOG:
      return {
        ...state
      }
    // Case to remove a dog
    case DELETE_DOG:
      // Filter the dogs to exclude the dog removed by its id
      const updatedAllDogs = state.allDogs.filter((dog) => dog.id !== payload);
      return {
        ...state,
        allDogs: updatedAllDogs,
        dogDetail: payload,
      };
    // Case to filter dogs
    case FILTER:
      // A copy of the original array is created
      let allDogsFiltered = [...state.allDogs]; 
      if (payload === "temperament") {
        // The temperaments are filtered, the first character of each one is evaluated, and a numerical value is assigned to them to order them with the sort method.
        allDogsFiltered = allDogsFiltered.filter((dog) => dog.temperament);
        allDogsFiltered.sort((a, b) => a.temperament[0] > b.temperament[0] ? 1 : -1);
      } else if (payload === "name") {
        // The copy is ordered by id (they are ordered by default from the api)
        allDogsFiltered.sort((a, b) => a.id - b.id);
      } else if (payload === "weight") {
        // It is separated with the split and the first character is taken to order them with the sort
        allDogsFiltered.sort((a, b) => a.weight.split(" - ")[0] - b.weight.split(" - ")[0]);
      }
      return {
        ...state,
        allDogs: allDogsFiltered,
      };
    // Case to order the dogs
    case ORDER:
      // A copy of the original array is created
      const allDogsCopy = [...state.allDogs];
      return {
        ...state,
        // A ternary is used to evaluate one condition or another
        allDogs:
          payload === "A"
            ? allDogsCopy.sort((a, b) => a.id - b.id)
            : allDogsCopy.sort((a, b) => b.id - a.id),
      };
    // Case to filter by api or db
    case RESPONSE_API_DB:
      const copyAllDogs = [...state.allDogs];
      return {
        ...state,
        // A ternary is used to evaluate one condition or another
        allDogs:
        payload === "db"
        ? copyAllDogs.filter((dog) => dog.id.length > 3)
        : copyAllDogs.sort((a, b) => a.idApi - b.idApi)
      };
    // When the action type is not recognized, the current state is returned without making any changes.
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
