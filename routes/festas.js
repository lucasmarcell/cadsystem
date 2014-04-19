module.exports = function (app){
	var festas = app.controllers.festas;

	app.get("/festas", festas.index);
}