//module.exports.viajens_becodiagonal = function(application, req, res){
//    var locaisEnum = new application.app.models.Enums.LocaisEnum();
//    var viajens_possiveis = [
//            locaisEnum.getJSONByValue(1),
//            locaisEnum.getJSONByValue(2)
//    ]
//    var interacoes_possiveis = [
//    ]
//	res.render('possible_travel', {viajar : viajens_possiveis, interagir : interacoes_possiveis});
//}

//module.exports.viajens_esgoto_becodiagonal = function(application, req, res){
//    var locaisEnum = new application.app.models.Enums.LocaisEnum();
//    var viajens_possiveis = [
//            locaisEnum.getJSONByValue(0),
//            locaisEnum.getJSONByValue(1),
//            locaisEnum.getJSONByValue(2)
//    ]
//    var interacoes_possiveis = [
//
//    ]
//	res.render('possible_travel', {viajar : viajens_possiveis, interagir : interacoes_possiveis});
//}
//
//module.exports.viajar_becodiagonal_esgoto = function(application, req, res){
//    var conn = application.config.dbConnection;
//    var viajarDAO = new application.app.models.ViajarDAO(conn);
//    var locaisEnum = new application.app.models.Enums.LocaisEnum();
//    viajarDAO.viajar(req, res, locaisEnum.BecoDiagonalEsgoto1.value);
//}
//
//module.exports.viajar_becodiagonal = function(application, req, res){
//    var conn = application.config.dbConnection;
//    var viajarDAO = new application.app.models.ViajarDAO(conn);
//    var locaisEnum = new application.app.models.Enums.LocaisEnum();
//    viajarDAO.viajar(req, res, locaisEnum.BecoDiagonal.value);
//}

module.exports.viajar = function(application, req, res){
    var bodyR = req.body;
    var conn = application.config.dbConnection;
    var viajarDAO = new application.app.models.ViajarDAO(conn);
    var locaisEnum = new application.app.models.Enums.LocaisEnum();
    var codLocal =  locaisEnum.getJSONByValue(bodyR.acao);
    //var objeto = encontraAlgumItem();
    viajarDAO.viajar(req, res, codLocal.value);
}
module.exports.viajens = function(application, req, res){
    var locaisEnum = new application.app.models.Enums.LocaisEnum();
    console.log(req.session);
    var possiveisLocais = locaisEnum.getPossiveisLocais(req.session.local_atual);

    var interacoes_possiveis = [

    ]
	res.render('possible_travel', {viajar : possiveisLocais, interagir : interacoes_possiveis});
}
function encontraAlgumItem(){
    var d10 = Math.floor((Math.random() * 10) + 1);
    var d40 = 0;
    if(d10 >= 8){
        var item = { };
        var codItem = Math.floor((Math.random() * 39) + 1);
        var qtd = Math.floor((Math.random() * 4) + 1);
        console.log(item);
        return item[codItem] = qtd;
    } else {
        return null;
    }
}