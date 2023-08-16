require('dotenv').config();
const { API_KEY, END_POINT_URL } = process.env;
const axios = require("axios");
const { Dog } = require("../db");

const getAllDogsController = async () => {
  // Query if there are records in the database, if there are, prepare them for return
  const allDogsDB = await Dog.findAll();
  // If there are no records in the database, we get the dogs from the api and save them to the db
  const { data } = await axios(`${END_POINT_URL}?api_key=${API_KEY}`);
  const allResultApi = data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image:
        dog.image?.url ||
        `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg` ||
        "",
      height: dog.height?.metric,
      weight: dog.height?.metric,
      life_span: dog.life_span,
      temperament: dog.temperament,
      idApi: dog.id
    };
  });
  if (allDogsDB) return [...allDogsDB, ...allResultApi]
  return allResultApi;
}

module.exports = {
  getAllDogsController,
}