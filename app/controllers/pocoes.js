module.exports.pocoes = function(application, req, res){
    var nome_personagem = req.session.nome_personagem;
    var ingredientesEnum = new application.app.models.Enums.IngredientesEnum();
    var ingrediente = ingredientesEnum.RaizAsfodelo.value;
    var conn = application.config.dbConnection;
    var pocoesDAO = new application.app.models.PocoesDAO(conn);
    pocoesDAO.getIngredientesPersonagem(res, nome_personagem, ingredientesEnum, req);
}
