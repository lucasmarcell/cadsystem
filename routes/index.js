
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'FestKids' });
};

exports.teste = function(req,res){
	res.render('teste');
};