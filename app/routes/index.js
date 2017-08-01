module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.index.index(application, req, res);
    });
    application.get('/home', function(req, res){
        application.app.controllers.index.index(application, req, res);
    });
    application.post('/home', function(req, res){
        application.app.controllers.index.home(application, req, res);
    }); //corrigir
    application.get('/cadastro', function(req, res){
        application.app.controllers.index.cadastro(application, req, res);
    });
    application.get('/conf', function(req, res){
        application.app.controllers.index.conf(application, req, res);
    });
    application.get('/sair', function(req, res){
        application.app.controllers.index.sair(application, req, res);
    });
    application.post('/cadastro', function(req, res){
        application.app.controllers.index.cadastrar(application, req, res);
    });
    application.post('/atualizar_cadastro', function(req, res){
        application.app.controllers.index.confAtualizarJogador(application, req, res);
    });
    application.get('/jogo', function(req, res){
        application.app.controllers.index.jogo(application, req, res);
    });
}