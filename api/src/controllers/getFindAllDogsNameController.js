require("dotenv").config();
const { END_POINT_URL } = process.env;
const { Dog } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const getFindAllDogsNameController = async (name) => {
  //It brings all the matches from the db
  const dbResults = await Dog.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });

  //Looking for a match in the api
  const { data } = await axios(`${END_POINT_URL}/search?q=${name}`);
  //Only the information necessary for the result is saved
  const dogsNameApi = data.map((dog) => {
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
      temperament: dog.temperament
    };
  });
  //If there are results in both searches, the results found in both are returned.
  const resultTotal = [...dbResults, ...dogsNameApi];
  if (resultTotal.length === 0) {
    throw new Error(`No existen Perros con ese nombre`);
  } else {
    return resultTotal;
  }
};

module.exports = {
  getFindAllDogsNameController,
};
