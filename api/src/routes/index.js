const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllDogsHandler } = require("../handlers/getAllDogsHandler");
const { getDogIdHandler } = require("../handlers/getDogIdHandler");
const { getDogsNameHandler}  =require("../handlers/getDogsNameHandler");
const { postDogHandler }   = require('../handlers/postDogHandler');
const { getAllTemperamentsHandler } = require("../handlers/getAllTemperamentsHandler");
const { getAllTemperamentsDBHandler } = require("../handlers/getAllTemperamentsDBHandler");
const { putDogHandler } = require("../handlers/putDogHandler");
const { deleteDogByIdHandler } = require("../handlers/deleteDogByIdHandler");
const { deleteDogByNameHandler } = require("../handlers/deleteDogByNameHandler");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", getAllDogsHandler);
router.get("/dogs/:id", getDogIdHandler);
router.get("/search", getDogsNameHandler);
router.post("/dogs", postDogHandler);
router.get("/temperaments", getAllTemperamentsHandler);
router.get("/temperamentsDB", getAllTemperamentsDBHandler);
router.put("/dogs", putDogHandler);
router.delete("/delete", deleteDogByNameHandler);
router.delete("/delete/:id", deleteDogByIdHandler);


module.exports = router;
