module.exports.index = function(application, req, res){
	res.render('index');
}

module.exports.cadastro = function(application, req, res){
	res.render('cadastro', {msg : {}});
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
    /* req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format:YYYY-MM-DD});*/
     
     var erros = req.validationErrors();
     if(erros){
          res.render('cadastro', {msg : 'E'});
          return;
     }
     
     //encriptar infos
     var senhaCriptografada = crypto.createHash("md5").update(formDados.senha).digest("hex");
     formDados.senha = senhaCriptografada;
     //salvar infos
     var conn = application.config.dbConnection;
     var jogadorDAO = new application.app.models.JogadorDAO(conn);
     jogadorDAO.inserirJogador(formDados);
     
     res.render('cadastro', {msg : 'I'});
}

