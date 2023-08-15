const { Dog } = require("../db");

const deleteDogByIdController = async (id) => {
  //Se recibe el id, se busca en la db la coincidencia y se elimina
  const dogDelete = await Dog.destroy({
    where:
      { id }
  });
  if (dogDelete) return `El personaje con ID: ${id} fue eliminado`;
  //Si hay algun error y no pudo eliminarse el pokemon, se manda un error al handler
  throw new Error(`Failed to delete pokemon with ID: ${id}`);
}

module.exports = {
  deleteDogByIdController,
}