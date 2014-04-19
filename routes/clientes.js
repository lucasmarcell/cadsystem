module.exports = function (app){
	var clientes = app.controllers.clientes;

	app.get("/clientes", clientes.index);
}