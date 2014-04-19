module.exports = function (app){

	var ChatController = {
		index: function (req, res){
			res.render("chat/index", {title: "Chat"});
		}
	}

	return ChatController;
}