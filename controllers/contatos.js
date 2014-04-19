module.exports = function (app){

	var ContatosController = {
		index: function (req, res){
			res.render("contatos/contatos", {title: "Contatos"});
		}
	}

	return ContatosController;
}