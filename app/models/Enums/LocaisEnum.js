function LocaisEnum(){
    this.BecoDiagonal= 
    {
        value: 0, 
        nome: "Beco Diagonal", 
        code: "BD", 
        nome_cod: "becodiagonal", 
        view : "interaction",
        can_move : [1 , 2]
    };

    this.BecoDiagonalEsgoto = 
    {
        value: 1, 
        nome: "Esgoto Beco Diagonal nível 1", 
        code: "BDE", 
        nome_cod: "esgoto", 
        view : "hunt",
        can_move : [0]
    };
    this.KnockturnAlley = 
    {
        value: 2, 
        nome: "Knockturn Alley (Travessa do Tranco)", 
        code: "KA", 
        nome_cod: "knockturn_alley", 
        view : "hunt",
        can_move : [1,2]
    };
}
     
LocaisEnum.prototype.getPossiveisLocais = function(valueLocalAtual){
    var localAtual = this.getJSONByValue(valueLocalAtual);
    var locais = [];
    for(var i = 0; i < localAtual.can_move.length; i++) {
        var localPossivel = this.getJSONByValue(localAtual.can_move[i]);
        locais = locais.concat(localPossivel);
    }
    return locais;
}
LocaisEnum.prototype.getJSONByValue = function(value){
    switch(parseInt(value)){
        case 0:
            return this.BecoDiagonal;
            break;
        case 1:
            return this.BecoDiagonalEsgoto;
            break;
        case 2:
            return this.KnockturnAlley;
            break;
        
    }
}
   
module.exports = function(){
	return LocaisEnum;
}