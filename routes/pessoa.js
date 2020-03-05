const express = require("express");
const { index , deletePessoa , createForm, createPessoa, updateForm, updatePessoa} = require("../controllers/pessoa");

const pessoasRouter = ( models ) =>{
    const router = express.Router();

    router.get("/", index.bind(null, models));
    router.get("/delete/:id", deletePessoa.bind(null, models));
    router.get("/create", createForm);
    router.post("/create", createPessoa.bind(null, models));
    router.get("/update/:id", updateForm.bind(null, models));
    router.post("/update", updatePessoa.bind(null, models));

    return router;
}

module.exports = pessoasRouter;