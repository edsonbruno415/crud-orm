
const ProjetoModel = (sequelize, DataTypes) => {
    const Projeto = sequelize.define("Projeto",{
        nome: DataTypes.STRING
    });
    Projeto.associate = (models) =>{
        Projeto.hasOne(models.Projeto, {
            foreignKey: "fk_dono"
        });
    }
    return Projeto;
}

module.exports = ProjetoModel;