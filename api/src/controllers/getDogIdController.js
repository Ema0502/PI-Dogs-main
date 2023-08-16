require('dotenv').config();
const { API_KEY, END_POINT_URL } = process.env;
const axios = require("axios");
const { Dog } = require("../db");

const getDogIdController = async (id) => {
  // A search is made in the db, if the id has a long length (by the UUID of the db)
  if (id.length > 3) {
    const dbResult = await Dog.findByPk(id);
    return dbResult;
  }

  //If there is a dog with the received id, we return it
  const { data } = await axios(`${END_POINT_URL}/${id}?api_key=${API_KEY}`);
  //Only the requested data is extracted from the api to return them
  const dogById = {
    id,
    name: data.name,
    image: data.image?.url || `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg` || "",
    height: data.height?.metric,
    weight: data.height?.metric,
    life_span: data.life_span,
    temperament: data.temperament
  }
  return dogById;
}

module.exports = {
  getDogIdController,
}