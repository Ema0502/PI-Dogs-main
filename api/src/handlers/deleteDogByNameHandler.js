const { deleteDogByNameController } = require("../controllers/deleteDogByNameController");

const deleteDogByNameHandler = async (req, res) => {
  try {
    //Se trae el name y se envia al controller para eliminar el perro de la db
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