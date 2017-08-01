module.exports = function(application){
    application.get('/viajens_becodiagonal', function(req, res){
      application.app.controllers.viajar.viajens_becodiagonal(application, req, res);
    });
    application.get('/viajens_esgoto', function(req, res){
      application.app.controllers.viajar.viajens_esgoto_becodiagonal(application, req, res);
    });
    application.get('/viajens', function(req, res){
      application.app.controllers.viajar.viajens(application, req, res);
    });
    application.post('/viajar', function(req, res){
      application.app.controllers.viajar.viajar(application, req, res);
    });
    application.post('/viajar_becodiagonal', function(req, res){
      application.app.controllers.viajar.viajar_becodiagonal(application, req, res);
    });
    application.post('/viajar_becodiagonal_esgoto', function(req, res){
      application.app.controllers.viajar.viajar_becodiagonal_esgoto(application, req, res);
    });
}
