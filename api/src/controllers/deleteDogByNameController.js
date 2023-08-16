const { Dog } = require("../db");

const deleteDogByNameController = async (name) => {
  // The db is searched for the match by name and is removed, then the response is returned if it is removed correctly
  const dogDelete = await Dog.destroy({
    where: { name },
  });
  if (dogDelete) {
    return `Dog with name: ${name} deleted in the DB successfully`;
  }
  // If an error occurs and cannot be cleared by name, an error is sent to the handler
  throw new Error(`Failed to delete dog with name: ${name}`);
};

module.exports = {
  deleteDogByNameController,
};
