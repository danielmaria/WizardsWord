module.exports = function(application){
     application.get('/', function(req, res){
          application.app.controllers.index.index(application, req, res);
     });
     application.get('/home', function(req, res){
          application.app.controllers.index.home(application, req, res);
     }); //corrigir
     application.get('/cadastro', function(req, res){
          application.app.controllers.index.cadastro(application, req, res);
     });
     application.post('/cadastro', function(req, res){
          application.app.controllers.index.cadastrar(application, req, res);
     });
}