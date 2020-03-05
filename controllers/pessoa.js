const index = async ({ Pessoa }, req, res) => {
    const pessoas = await Pessoa.findAll();
    res.render("pessoa/index", { pessoas });
}

const deletePessoa = async ({ Pessoa }, req, res) => {
    const { id } = req.params;
    Pessoa.destroy({
        where: { id : id }
    });
    res.redirect("/pessoas");
}

const createForm = (req, res) =>{
    res.render("pessoa/create");
}

module.exports = {
    index,
    deletePessoa,
    createForm
}