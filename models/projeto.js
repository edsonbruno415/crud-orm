
const ProjetoModel = (sequelize, DataTypes) => {
    const Projeto = sequelize.define("Projeto",{
        nome: DataTypes.STRING
    });

    return Projeto;
}

module.exports = ProjetoModel;