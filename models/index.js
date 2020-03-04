const Sequelize = require("sequelize");
const sequelize = new Sequelize("crud-orm","root","",{
    dialect: "mysql",
    host: "127.0.0.1"
});

const PessoaModel = require("./pessoa");
const Pessoa = PessoaModel(sequelize, Sequelize.DataTypes);

module.exports = {
    sequelize,
    models: {
        Pessoa
    }
}