var ObjectID = require('mongodb').ObjectId;

function JogadorDAO(conn){
	this._connection = conn();
}

JogadorDAO.prototype.inserirJogador = function(res, dados, personagemDAO, locaisEnum){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("jogadores", function(err, collection){
			collection.find({$or:[
									{email : dados.email},
									{nome_personagem : dados.nome_personagem}
								 ]}).toArray(function(err, result_email){
				if(result_email[0] == undefined){
					collection.insert(dados);
					personagemDAO.geraPersonagemNovo(res, dados, locaisEnum);
					res.render('cadastro', {msg : 'I', dadosForm : {}});
					return;
				} else {
					res.render('cadastro', {msg : 'E', dadosForm : dados});
					return;
				}
				mongoclient.close();
			});
		});
	});
}

JogadorDAO.prototype.atualizarJogador = function(res, dados){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("jogadores", function(err, collection){
			collection.update({nome_personagem : dados.nome_personagem},
							 {$set : 
								{
									nome_real : dados.nome_real,
									data_nascimento : dados.data_nascimento,
									email : dados.email,
									senha : dados.senha,
									redesocial : dados.redesocial,
									biografia: dados.biografia,
									linhagem : dados.linhagem
								}
							}
							);
			mongoclient.close();
		});
	});
}

JogadorDAO.prototype.buscarJogadorCadastro = function(nome_personagem, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("jogadores", function(err, collection){
			collection.find({nome_personagem : nome_personagem}).toArray(function(err, result){
				if(result[0] != undefined){
					res.render('cadastro', {msg : "AT", dadosForm : result[0]});
				}
			});
		});
	});
}

JogadorDAO.prototype.autenticar = function(usuario, req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("jogadores", function(err, collection){
			collection.find({email : usuario.email, senha : usuario.senha}).toArray(function(err, result){
				if(result[0] != undefined){
					req.session.autorizado = true;
					req.session.nome_personagem = result[0].nome_personagem;
					req.session.id_usuario = result[0]._id;
					
				}
				if(req.session.autorizado){
					res.redirect("jogo");
				} else {
					res.render("index", {validacao: 'E', dadosForm: usuario});
				}
				
			});
		});
	});
}

JogadorDAO.prototype.iniciaJogo = function(req, res, msg, locaisEnum){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("personagens", function(err, collection){
			collection.find({nome_personagem : req.session.nome_personagem}).toArray(function(err, result){
				if(result[0] != undefined){
					var local = locaisEnum.getJSONByValue(parseInt(result[0].local_atual));
					result[0].id_usuario = req.session.id_usuario
					req.session.local_atual = result[0].local_atual;
					res.render(local.view, {personagem : result[0], msg : msg, local : local});	
				}
				mongoclient.close();
			});
		});
	});
}

module.exports = function(){
	return JogadorDAO;
}