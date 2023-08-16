const { Dog } = require("../db");

const deleteDogByIdController = async (id) => {
  // The id is received, the db is searched for the match and it is eliminated
  const dogDelete = await Dog.destroy({
    where:
      { id }
  });
  if (dogDelete) return `Dog with ID: ${id} deleted in the DB successfully`;
  // If there is an error and the dog could not be removed, an error is sent to the handler
  throw new Error(`Failed to delete dog with ID: ${id}`);
}

module.exports = {
  deleteDogByIdController,
}