module.exports = function(application){
    application.get('/hunt', function(req, res){
      //application.app.controllers.viajar.viajens_becodiagonal(application, req, res);
      var criaturasEnum = new application.app.models.Enums.CriaturasEnum();
      var criatura = criaturasEnum.getJSONByValue(Math.floor(Math.random() * 5));
      var criatura_ferida = 
      {
        value: criatura.value, 
        nome: criatura.nome, 
        nd : criatura.nd, 
        vida_maxima: criatura.vida_maxima,
        vida_maxima2: criatura.vida_maxima, //? Por algum motivo desta forma a referência da variável vida_atual não se perde.
        vida_atual: criatura.vida_atual, 
        ataque : criatura.ataque, 
        defesa : criatura.defesa,  
        descricao : criatura.descricao
      };
      req.session.criatura = criatura_ferida;
      res.render("possible_hunts", {criatura : criatura_ferida});
    });

    application.get('/hunt_atacar', function(req, res){
      var criatura = req.session.criatura;
      var criatura_ferida = 
      {
        value: criatura.value, 
        nome: criatura.nome, 
        nd : criatura.nd, 
        vida_maxima: criatura.vida_maxima, 
        vida_atual: criatura.vida_atual - 2, 
        ataque : criatura.ataque, 
        defesa : criatura.defesa,  
        descricao : criatura.descricao
      };

      req.session.criatura = criatura_ferida;
      console.log(req.session.criatura);
      res.render("possible_hunts", {criatura : criatura_ferida});
    });
}