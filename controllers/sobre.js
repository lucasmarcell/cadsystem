module.exports = function (app){

	var SobreController = {
		index: function (req, res){
			res.render("sobre/sobre");
		}
	}

	return SobreController;
}