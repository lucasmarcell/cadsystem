module.exports = function (app){

	var SuporteController = {
		index: function (req, res){
			res.render("suporte/suporte", {title: "Suporte"});
		}
	}

	return SuporteController;
}