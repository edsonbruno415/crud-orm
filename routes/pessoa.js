const express = require("express");
const { index , deletePessoa , createForm } = require("../controllers/pessoa");

const pessoasRouter = ( models ) =>{
    const router = express.Router();

    router.get("/", index.bind(null, models));
    router.get("/delete/:id", deletePessoa.bind(null, models));
    router.get("/create", createForm);

    return router;
}

module.exports = pessoasRouter;