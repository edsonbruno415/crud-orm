const express = require("express");
const { index , deletePessoa } = require("../controllers/pessoa");

const pessoasRouter = ( models ) =>{
    const router = express.Router();

    router.get("/", index.bind(null, models));
    router.get("/delete/:id", deletePessoa.bind(null, models));

    return router;
}

module.exports = pessoasRouter;