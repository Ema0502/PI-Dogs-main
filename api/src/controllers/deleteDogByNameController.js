const { Dog } = require("../db");

const deleteDogByNameController = async (name) => {
  //Se busca en la db la coincidencia por name y se elimina, luego se retorna la respuesta en caso que se elimine correctamente
  const dogDelete = await Dog.destroy({
    where: { name },
  });
  if (dogDelete) {
    return `Dog with name: ${name} deleted in the DB successfully`;
  }
  //Si ocurre un error y no puede eliminarse por name, se manda un error al handler
  throw new Error(`Failed to delete dog with name: ${name}`);
};

module.exports = {
  deleteDogByNameController,
};
