const PessoaModel = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define("Pessoa",{
        nome: DataTypes.STRING,
        nascimento: DataTypes.DATEONLY,
        cargo: DataTypes.STRING
    });

    return Pessoa;
}

module.exports = PessoaModel;