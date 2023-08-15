const { deleteDogByIdController } = require("../controllers/deleteDogByIdController");

const deleteDogByIdHandler = async (req, res) => {
  try {
    //Se trae el id y se envia al controller para eliminar el perro de la db
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