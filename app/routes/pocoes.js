module.exports = function(application){
    application.get('/pocoes', function(req, res){
      application.app.controllers.pocoes.pocoes(application, req, res);
    });
}