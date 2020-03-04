const Sequelize = require("sequelize");
const sequelize = new Sequelize("crud-orm","root","",{
    dialect: "mysql",
    host: "127.0.0.1"
});

const models = {}
const fs = require("fs");
const path = require("path");
    fs.readdirSync(__dirname)
        .filter((file) => file!=="index.js")
        .map(file => {
            const model = require(path.join(__dirname,file))(sequelize, Sequelize.DataTypes);
            models[model.name] = model;
        });

console.log(models);

module.exports = {
    sequelize,
    models
}