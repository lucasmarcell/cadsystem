module.exports = function (app){

	var FestasController = {
		index: function (req, res){
			res.render("festas/festas", {title: "Festas"});
		}
	}

	return FestasController;
}