const { deleteDogByNameController } = require("../controllers/deleteDogByNameController");

const deleteDogByNameHandler = async (req, res) => {
  try {
    //The name is fetched and sent to the controller to remove the dog from the db
    const { name } = req.query;
    const deleteResponse = await deleteDogByNameController(name);
    res.status(200).json(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteDogByNameHandler,
};