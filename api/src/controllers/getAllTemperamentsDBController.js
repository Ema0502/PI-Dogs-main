const { Dog } = require("../db");

const getAllTemperamentsDBController = async () => {
  try {
    // Obtiene todos los registros de la base de datos
    const allDogs = await Dog.findAll();

    // Crea un Set para almacenar los temperamentos únicos
    const uniqueTemperaments = new Set();

    // Recorre cada perro y obtén los temperamentos individuales
    allDogs.forEach((dog) => {
      if (dog.temperament) {
        const temperaments = dog.temperament.split(", ");
        temperaments.forEach((temperament) => {
          uniqueTemperaments.add(temperament);
        });
      }
    });

    // Convierte el Set en un array y devuelve los temperamentos únicos
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