
/**
 * Module dependencies.
 */

var express = require('express');
var load = require('express-load');
var mongoose = require('mongoose');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/waibtec');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);
load('models').then('controllers').then('routes').into(app);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Banco de Dados Funcionando....');
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Funcionando na porta ' + app.get('port'));
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	var userid = socket.id;

	//Mostra para o usuario que ele entrou
	socket.emit('welcome');

	//Mostra para os outros que um novo usuario entrou
	socket.broadcast.emit('user in', {userid: userid});

	//Muda Nome de Usuário do chat
	socket.on('change name', function(data){
		var nome = data.nome;
		socket.set('username', nome, function(){
			socket.emit('name changed', {nome: nome});
			socket.broadcast.emit('user changed name', {userid: userid, nome: nome});
		});
	});

	//Envia Menssagem
	socket.on('send message', function(data){
		var message = data.message;
		var nome = '';
		socket.get('username',function(err, username){
			nome = username ? username : userid;

			socket.emit('message sent', {message: message});
			socket.broadcast.emit('message sent by user', {message: message, nome: nome});
		});
	});

});