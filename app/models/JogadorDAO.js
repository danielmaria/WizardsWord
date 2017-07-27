var ObjectID = require('mongodb').ObjectId;

function JogadorDAO(conn){
	this._connection = conn();
}

JogadorDAO.prototype.inserirJogador = function(dados){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("jagador", function(err, collection){
          collection.insert(dados);
          mongoclient.close();
		});
	});
}

module.exports = function(){
	return JogadorDAO;
}