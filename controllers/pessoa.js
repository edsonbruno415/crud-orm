const index = async({ Pessoa }, req, res) => {
    const pessoas = await Pessoa.findAll();
    res.render("pessoa/index", { pessoas });
}

module.exports = {
    index
}