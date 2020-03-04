const express = require("express");
const { index } = require("../controllers/pessoa");

const pessoasRouter = ( models ) =>{
    const router = express.Router();

    router.get("/", index.bind(null, models));

    return router;
}

module.exports = pessoasRouter;