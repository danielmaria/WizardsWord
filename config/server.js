/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do express-session */
var expressSession = require('express-session');

/* importar o módulo do multiparty */
var multiparty = require('connect-multiparty');
/* iniciar o objeto do express */
var app = express();
		
/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware multiparty */
app.use(multiparty());
/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-session */
app.use(expressSession({
		secret: 'qpwoei0rutym9znx7bcv3a1lskdjfg',
		resave: false,
		saveUninitialized: false
	}));

/* configurar o middleware express-validator */
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('./config/dbConnection.js') //Incluir a extensão para que o consign saiba que se trata de um arquivo e não diretório.
	.into(app);

/* exportar o objeto app */
module.exports = app;