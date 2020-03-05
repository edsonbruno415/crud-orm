const index = async ({ Pessoa }, req, res) => {
    const pessoas = await Pessoa.findAll();
    res.render("pessoa/index", { pessoas });
}

const deletePessoa = async ({ Pessoa }, req, res) => {
    const { id } = req.params;
    Pessoa.destroy({
        where: { id }
    });
    res.redirect("/pessoas");
}

const createForm = (req, res) =>{
    res.render("pessoa/create");
}

const createPessoa = async({Pessoa}, req, res) => {
    const {nome, nascimento, cargo} = req.body;
    await Pessoa.create({
        nome,
        nascimento,
        cargo
    });
    res.redirect("/pessoas");
}

module.exports = {
    index,
    deletePessoa,
    createForm,
    createPessoa
}