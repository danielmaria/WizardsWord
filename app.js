/* importar as configurações do servidor */
var app = require('./config/server');

var port = 80;

/* parametrizar a porta de escuta */
app.listen(80, function(){
	console.log('Servidor online rodando na porta ' + port);
})