var ObjectID = require('mongodb').ObjectId;

function PersonagemDAO(conn){
	this._connection = conn();
}

PersonagemDAO.prototype.geraPersonagemNovo = function(res, personagem, locaisEnum){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("personagens", function(err, collection){
			collection.insert({ nome_personagem : personagem.nome_personagem,
								experiencia_rituais : 1,
								experiencia_pocoes : 1,
								experiencia_feiticos : 1,
								experiencia_encantamento : 1,
								estamina_atual : 10,
								estamina_maxima : 10,
								local_atual : locaisEnum.BecoDiagonal.value,
				
								moedas : [
										{
											galeao : 1,
											sicle: 12,
											nuque: 20
										}
								]
								});
			mongoclient.close();
		});
	});
}

module.exports = function(){
	return PersonagemDAO;
}