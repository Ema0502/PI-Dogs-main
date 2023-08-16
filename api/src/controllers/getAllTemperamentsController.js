require("dotenv").config();
const { API_KEY, END_POINT_URL } = process.env;
const axios = require("axios");
const { getAllTemperamentsDBController } = require("./getAllTemperamentsDBController");

const getAllTemperamentsController = async () => {

  // We get the temperaments from the api and they are saved in the db
  const { data } = await axios(`${END_POINT_URL}?api_key=${API_KEY}`);
  const allTemperamentsAPI = data.map((dog) => {
    return dog.temperament;
  });
  // A Set is created to store the unique temperaments
  const resultFinal = new Set();
  //The array of temperaments obtained from the api is traversed
  allTemperamentsAPI.forEach((temperamentString) => {
    // To avoid nulls, the conditional is applied
    if (temperamentString) {
      // Split the string of temperaments by commas and map to get the individual temperaments in an arrangement
      const temperaments = temperamentString
        .split(", ")
        .map((string) => string);
      // Step through the arrangement of individual temperaments to remove duplicates
      return temperaments.forEach((temperament) => {
        return resultFinal.add(temperament);
      });
    }
  });
  //All existing results in the db are brought and sent to the final result without repetition
  const resultDB = await getAllTemperamentsDBController();
  resultDB.forEach((temperament) => {
    return resultFinal.add(temperament);
  });

  // Everything in the set is fetched and returned as an array for the final result
  return [...resultFinal];
};

module.exports = {
  getAllTemperamentsController,
};
