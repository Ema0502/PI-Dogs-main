const { Dog } = require("../db");

const putDogController = async (modifications) => {
  try {
    // Encuentra el perro que se desea modificar por su nombre
    const dogToUpdate = await Dog.findOne({
      where: { name: modifications.name },
    });
    // Si el perro no existe, se lanza un error
    if (!dogToUpdate) throw new Error("Dog not found");

    // Se actualiza el perro con las modificaciones proporcionadas
    const [updatedCount] = await Dog.update(modifications, {
      where: { name: modifications.name },
    });

    // Si hay modificaciones, busca el perro actualizado y lo retorna
    if (updatedCount) {
      const updatedDog = await Dog.findByPk(dogToUpdate.id);
      return updatedDog;
    }
    // Si no se realiza ninguna modificación, lanzamos un error
    throw new Error("No modifications were made");
  } catch (error) {
    // Si hay un error en el proceso, lo recibe el catch
    throw new Error("Failed to update dog");
  }
};

module.exports = {
  putDogController,
};
