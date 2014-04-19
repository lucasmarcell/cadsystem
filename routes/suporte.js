module.exports = function (app){
	var suporte = app.controllers.suporte;

	app.get("/suporte", suporte.index);
}