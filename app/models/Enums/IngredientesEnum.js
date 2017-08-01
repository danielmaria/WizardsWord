function IngredientesEnum(){
        this.Losna = {value: 1, nome: "Losna", code: "L"};
        this.RaizValeriana = {value: 2, nome: "Raízes de valeriana", code: "RV"};
        this.RaizAsfodelo = {value: 3, nome: "Raiz de asfódelo em pó", code: "RA"};
        this.VagemSudorifera = {value: 4, nome: "Vagem sudorífera", code: "VS"};
        this.Hemerobios = {value: 5, nome: "Hemeróbios", code: "H"};
        this.Sanguessuga = {value: 6, nome: "Sanguessuga", code: "SS"};
        this.Descurainia = {value: 7, nome: "Descurainia", code: "D"};
        this.Sanguinaria = {value: 8, nome: "Sanguinária", code: "S"};
        this.ChifreBicornio = {value: 9, nome: "Pó de chifre de bicórnio", code: "CB"};
        this.PedraLua = {value: 10, nome: "Pedra-da-Lua", code: "PL"};
        this.PeleAraramboia = {value: 11, nome: "Pele de ararambóia picada", code: "PA"};
        this.CascaWiggentree = {value: 12, nome: "Casca de Wiggentree", code: "CW"};
        this.MucoVerme = {value: 13, nome: "Muco de Verme", code: "MV"};
        this.Ditamno = {value: 14, nome: "Ditamno", code: "D"};
        this.Moly = {value: 15, nome: "Moly", code: "M"};
        this.Aconito = {value: 16, nome: "Acônito", code: "AC"};
        this.VenenoAcromantula = {value: 17, nome: "Veneno de Acromântula", code: "VA"};
        this.BileTatu = {value: 18, nome: "Bile de Tatu", code: "BT"};
        this.OvoCinzal = {value: 19, nome: "Ovo de Cinzal", code: "OC"};
        this.Asfodelo = {value: 20, nome: "Asfódelo", code: "AS"};
        this.Bezoar = {value: 21, nome: "Bezoar", code: "BZ"};
        this.Beladona = {value: 22, nome: "Beladona", code: "BL"};
        this.PartesBicornio = {value: 23, nome: "Partes do Bicórnio", code: "PB"};
        this.PartesGiraGira = {value: 24, nome: "Partes do Gira-Gira", code: "PGG"};
        this.PartesBesouro = {value: 25, nome: "Partes do Besouro ", code: "PBE"};
        this.PartesAraramboia = {value: 26, nome: "Partes da Ararambóia", code: "PAR"};
        this.Bubotubera = {value: 27, nome: "Bubótubera", code: "BB"};
        this.Descurainia = {value: 28, nome: "Descuraínia", code: "DS"};
        this.SecrecaoBandinho = {value: 29, nome: "Secreção de Bandinho", code: "SB"};
        this.RepolhoChinesGlutao = {value: 30, nome: "Repolho Chinês Glutão", code: "RCG"};
        this.Lagartas = {value: 31, nome: "Lagartas ", code: "LAG"};
        this.Besouros = {value: 32, nome: "Besouros", code: "BES"};
        this.Margaridas = {value: 33, nome: "Margaridas", code: "MA"};
        this.OvoFadaMordente = {value: 34, nome: "Ovo de Fada Mordente", code: "OFM"};
        this.OvoDragao = {value: 35, nome: "Ovo de Dragão", code: "OD"};
        this.Gengibre = {value: 36, nome: "Gengibre", code: "GG"};
        this.BesouroMelancolia = {value: 37, nome: "Besouro da Melancolia", code: "BM"};
        this.Hellebore = {value: 38, nome: "Hellebore", code: "HLL"};
        this.Mandragora = {value: 39, nome: "Mandrágora", code: "MAN"};
    }

IngredientesEnum.prototype.getJSONByValue = function(value){
    switch(value){
        case 1:
            return this.Losna;
            break;
        case 2:
            return this.RaizValeriana;
            break;
        case 3:
            return this.RaizAsfodelo;
            break;
        case 4:
            return this.VagemSudorifera;
            break;
        case 5:
            return this.Hemerobios;
            break;
        case 6:
            return this.Sanguessuga;
            break;
        case 7:
            return this.Descurainia;
            break;
        case 8:
            return this.Sanguinaria;
            break;
        case 9:
            return this.ChifreBicornio;
            break;
        case 10:
            return this.PedraLua;
            break;
        case 11:
            return this.PeleAraramboia;
            break;
        case 12:
            return this.CascaWiggentree;
            break;
        case 13:
            return this.MucoVerme;
            break;
        case 14:
            return this.Ditamno;
            break;
        case 15:
            return this.Moly;
            break;
        case 16:
            return this.Aconito;
            break;
        case 17:
            return this.VenenoAcromantula;
            break;
        case 18:
            return this.BileTatu;
            break;
        case 19:
            return this.OvoCinzal;
            break;
        case 20:
            return this.Asfodelo;
            break;
        case 21:
            return this.Bezoar;
            break;
        case 22:
            return this.Beladona;
            break;
        case 23:
            return this.PartesBicornio;
            break;
        case 24:
            return this.PartesGiraGira;
            break;
        case 25:
            return this.PartesBesouro;
            break;
        case 26:
            return this.PartesAraramboia;
            break;
        case 27:
            return this.Bubotubera;
            break;
        case 28:
            return this.Descurainia;
            break;
        case 29:
            return this.SecrecaoBandinho;
            break;
        case 30:
            return this.RepolhoChinesGlutao;
            break;
        case 31:
            return this.Lagartas;
            break;
        case 32:
            return this.Besouros;
            break;
        case 33:
            return this.Margaridas;
            break;
        case 34:
            return this.OvoFadaMordente;
            break;
        case 35:
            return this.OvoDragao;
            break;
        case 36:
            return this.Gengibre;
            break;
        case 37:
            return this.BesouroMelancolia;
            break;
        case 38:
            return this.Hellebore;
            break;
        case 39:
            return this.Mandragora;
            break;
    }
}
module.exports = function(){
	return IngredientesEnum;
}