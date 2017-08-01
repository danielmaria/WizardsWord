var ObjectID = require('mongodb').ObjectId;

function PocoesDAO(conn){
	this._connection = conn();
}

PocoesDAO.prototype.salvaNovoIngrediente = function(codIngrediente, qtdIngrediente, res, nome_personagem){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("ingredientes_personagens", function(err, collection){
			collection.update({ nome_personagem : nome_personagem},
							  { $inc : { codIngrediente : qtdIngrediente}
							  });
			mongoclient.close();
		});
		
	});
}
PocoesDAO.prototype.getIngredientesPersonagem = function(res, nome_personagem, ingredientesEnum, req){
	console.log(req.session.nome_personagem);
      ingrediente = ingredientesEnum.getJSONByValue(1);
	this._connection.open(function(err, mongoclient){
		  mongoclient.collection("personagem", function(err, collection){
			collection.update({nome_personagem : req.session.nome_personagem},
							 {$set : 
								{
									
                    "ingrediente" : 1
                  
								}
							}
							);
			mongoclient.close();
			res.send('tes');
		});
	});
}
module.exports = function(){
	return PocoesDAO;
}