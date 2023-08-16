const { Dog } = require("../db");

const putDogController = async (modifications) => {
  try {
    // Find the dog you want to modify by name
    const dogToUpdate = await Dog.findOne({
      where: { name: modifications.name },
    });
    // If the dog does not exist, an error is thrown
    if (!dogToUpdate) throw new Error("Dog not found");
    // The dog is updated with the modifications provided
    const [updatedCount] = await Dog.update(modifications, {
      where: { name: modifications.name },
    });
    // If there are modifications, it looks for the updated dog and returns it
    if (updatedCount) {
      const updatedDog = await Dog.findByPk(dogToUpdate.id);
      return updatedDog;
    }
    // If no modification is made, we throw an error
    throw new Error("No modifications were made");
  } catch (error) {
    // If there is an error in the process, it is received by the catch
    throw new Error("Failed to update dog");
  }
};

module.exports = {
  putDogController,
};
