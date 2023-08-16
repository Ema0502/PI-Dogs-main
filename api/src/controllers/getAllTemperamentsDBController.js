const { Dog } = require("../db");

const getAllTemperamentsDBController = async () => {
  try {
    // Gets all records from the database
    const allDogs = await Dog.findAll();
    // Create a Set to store the unique temperaments
    const uniqueTemperaments = new Set();
    // The arrangement is walked and for each dog, the individual temperaments are obtained
    allDogs.forEach((dog) => {
      if (dog.temperament) {
        const temperaments = dog.temperament.split(", ");
        temperaments.forEach((temperament) => {
          uniqueTemperaments.add(temperament);
        });
      }
    });
    // Converts the Set to an array and returns the unique temperaments
    const allTemperaments = [...uniqueTemperaments];
    return allTemperaments;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = {
  getAllTemperamentsDBController,
};