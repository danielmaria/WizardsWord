var mongo = require('mongodb');

var connMongoDB = function(){
	var db = mongo.Db(
		'wizardsword', //nome do banco de dados
		new mongo.Server( 
			 'localhost', //string de endereço do servidor
			 27017, //porta da conexão
			 {}
			), // objeto de configurações opcional para a instância Server
		{} // objeto de configurações opcional para a instância mongo
		);		
	return db;
}

module.exports = function(){
	return connMongoDB;
}