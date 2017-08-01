module.exports.index = function(application, req, res){
	res.render('index', {validacao : {}, dadosForm : {}});
}

module.exports.cadastro = function(application, req, res){
	res.render('cadastro', {msg : {}, dadosForm : {}});
}

module.exports.conf = function(application, req, res){
    if(req.session.autorizado !== true){
		res.render("index", {validacao: {}, dadosForm : {}});
		return;
    }
    var conn = application.config.dbConnection;
    var jogadorDAO = new application.app.models.JogadorDAO(conn);
    var formDados = jogadorDAO.buscarJogadorCadastro(req.session.nome_personagem, res);
}

module.exports.confAtualizarJogador = function(application, req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    if(!(req.body.arquivo != undefined)){
        //var extensao = req.files.arquivo.originalFilename;
        //extensao = extensao.substr(extensao.length - 4);
        var url_imagem = req.session.id_usuario;
        var path_origem = req.files.arquivo.path;
        var path_destino = './app/public/images/images_usuarios/' + url_imagem + '.jpg';
        var fs = require('fs');
        fs.rename(path_origem, path_destino, function(err){
            if(err){
                res.status(500).json({ error : err });
                return;
            }
        });
    }
    var formDados = req.body;
    var crypto = require('crypto');
    formDados.senha = crypto.createHash("md5").update(formDados.senha).digest("hex");
    formDados.nome_personagem = req.session.nome_personagem;
    var conn = application.config.dbConnection;
    var jogadorDAO = new application.app.models.JogadorDAO(conn);
    jogadorDAO.atualizarJogador(res, formDados);
    res.redirect("jogo")
}

module.exports.sair = function(application, req, res){
	req.session.destroy( function(err){
		res.render("index", {validacao: {}, dadosForm : {}});
	});
}

module.exports.home = function(application, req, res){
     var formDados = req.body;
     var crypto = require('crypto');

     req.assert("email", "E-mail não pode ser vazio").notEmpty();
    // req.assert("senha", "Senha não pode ser vazia").notEmpty();

     var erros = req.validationErrors();
     if(erros){
          res.render('index', {validacao : erros, dadosForm : formDados});
          return;
     }
     
     //var senhaCriptografada = crypto.createHash("md5").update(formDados.senha).digest("hex");
     //formDados.senha = senhaCriptografada;
     
     var conn = application.config.dbConnection;
     var jogadorDAO = new application.app.models.JogadorDAO(conn);
     
     jogadorDAO.autenticar(formDados, req, res);
     
}

module.exports.cadastrar = function(application, req, res){
     //pegar info
     var formDados = req.body;
     var crypto = require('crypto');
     //validar infos
     req.assert('nome_real', 'Seu nome é obrigatório').notEmpty(); // Verifica se o tamanho esta entre 10 e 100 caracteres
     req.assert('email', 'E-mail é obrigatório').notEmpty(); // Verifica se não está vazio.
     req.assert('senha', 'O campo senha é obrigatório e deve conter ao menos 6 caracteres').notEmpty(); // Verifica se não está vazio.
     req.assert('nome_personagem', 'O nome do personagem é obrigatório').notEmpty(); // Verifica se não está vazio.
     req.assert('linhagem', 'Sua linhagem é obrigatória').notEmpty(); // Verifica se não está vazio.
     req.assert('data_nascimento', 'Data de nascimento é obrigatório').notEmpty();

     var erros = req.validationErrors();
     if(erros){
          res.render('cadastro', {msg : 'E', dadosForm : formDados});
          return;
     }
     
     //encriptar infos
     var senhaCriptografada = crypto.createHash("md5").update(formDados.senha).digest("hex");
     formDados.senha = senhaCriptografada;
     //salvar infos
    
     var conn = application.config.dbConnection;
     var locaisEnum = new application.app.models.Enums.LocaisEnum();
     
     var jogadorDAO = new application.app.models.JogadorDAO(conn);
     var personagemDAO = new application.app.models.PersonagemDAO(conn);
     jogadorDAO.inserirJogador(res, formDados, personagemDAO, locaisEnum);
}

module.exports.jogo = function(application, req, res){

	if(req.session.autorizado){
		var msg = '';
		if(req.query.msg != ''){
			msg = req.query.msg;
		}
        
		var conn = application.config.dbConnection;
        var JogadorDAO = new application.app.models.JogadorDAO(conn);
        var locaisEnum = new application.app.models.Enums.LocaisEnum();
		JogadorDAO.iniciaJogo(req, res, msg, locaisEnum);

	} else {
		res.render('index', {validacao : {}, dadosForm : {}});
		return;
	}
}
