const express = require("express");
const { index , deletePessoa , createForm, createPessoa } = require("../controllers/pessoa");

const pessoasRouter = ( models ) =>{
    const router = express.Router();

    router.get("/", index.bind(null, models));
    router.get("/delete/:id", deletePessoa.bind(null, models));
    router.get("/create", createForm);
    router.post("/create", createPessoa.bind(null, models));

    return router;
}

module.exports = pessoasRouter;