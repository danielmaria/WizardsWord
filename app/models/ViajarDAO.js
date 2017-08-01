var ObjectID = require('mongodb').ObjectId;

function PocoesDAO(conn){
	this._connection = conn();
}

PocoesDAO.prototype.viajar = function(req, res, codLocal){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("personagens", function(err, collection){
			collection.update({ nome_personagem : req.session.nome_personagem},
							  { $set : { local_atual : codLocal}
							  });
			mongoclient.close();
			res.redirect("jogo");
		});
	});
}
PocoesDAO.prototype.getIngredientesPersonagem = function(res, nome_personagem, ingredientesEnum){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("ingredientes_personagens", function(err, collection){
			collection.find({nome_personagem : nome_personagem}).toArray(function(err, result){
				if(result[0] != undefined){
					var ingredientes = "";
					var val = result[0];
					for(var j in val){
						var nome_chave = j;
						var nome_val = val[j];
						if(nome_chave != "_id" && nome_chave != "nome_personagem"){
							ingredientes = ingredientes + ingredientesEnum.getJSONByValue(parseInt(nome_chave)).nome + "(" + nome_val + "), ";
						}
					}
				}
				ingredientes = ingredientes.substr(0, ingredientes.length -2);
				mongoclient.close();
				res.render("pocoes", {ingredientes : ingredientes});
			});
		});
	});
}
module.exports = function(){
	return PocoesDAO;
}