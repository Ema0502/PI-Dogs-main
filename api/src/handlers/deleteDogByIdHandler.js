const { deleteDogByIdController } = require("../controllers/deleteDogByIdController");

const deleteDogByIdHandler = async (req, res) => {
  try {
    //Get the id and send it to the controller to remove the dog from the db
    const { id } = req.query;
    const deleteResponse = await deleteDogByIdController(id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteDogByIdHandler,
};