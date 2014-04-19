module.exports = function (app){

	var ClientesController = {
		index: function (req, res){
			res.render("clientes/clientes", {title: "Clientes"});
		}
	}

	return ClientesController;
}