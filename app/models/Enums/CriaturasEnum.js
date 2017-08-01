function CriaturasEnum(){
    this.Murtisco = 
    {   value: 0, 
        nome: "Murtisco", 
        nd : 32, 
        vida_maxima: 200, 
        vida_atual: 200, 
        ataque : "1d14", 
        defesa : "1d10", 
        descricao : "O Murtisco (em inglês Murtlap) é muito parecido com um rato, é econtrado nas áreas litorâneas da Grã-Bretanha. Em suas costas a uma saliência que se assemelha a uma anêmona do Mar"
    };
    this.Niffler = 
    {   value: 1, 
        nome: "Niffler", 
        nd : 30, 
        vida_maxima: 150, 
        vida_atual: 150, 
        ataque : "1d10", 
        defesa : "1d4", 
        descricao : "Nativo da Grã-Bretanha. É dito como sendo fofo, preto e com focinho longo. Ele adora objetos brilhantes e faz tocas subterrâneas que podem chegar a 6 metros."
    };
    this.Augurey = 
    {   value: 2, 
        nome: "Augurey", 
        nd : 20, 
        vida_maxima: 55, 
        vida_atual: 55, 
        ataque : "1d4", 
        defesa : "1d8", 
        descricao : "Pássaro magro e de aspecto tristonho, que lembra um abutre pequeno e malnutrido, o agoureiro é preto-esverdeado. É extremamente tímido, faz ninho em moitas espinhosas, come grandes insetos e fadas."
    };
    this.Horklump = 
    {   value: 3, 
        nome: "Horklump", 
        nd : 13, 
        vida_maxima: 55, 
        vida_atual: 55, 
        ataque : "1d2", 
        defesa : "1d4", 
        descricao : "Lembra um cogumelo carnudo e rosado coberto de pêlos ralos, negros e duros. Procriador prodigioso, ele cobre um jardim de tamanho médio em questão de dias."
    };
    this.Flobberworm = 
    {   value: 4, 
        nome: "Flobberworm", 
        nd : 10, 
        vida_maxima: 35, 
        vida_atual: 35, 
        ataque : "Não ataca", 
        defesa : "1d4", 
        descricao : "Animal de cor castanha que chega a atingir vinte e cinco centímetros de comprimento, ele se mexe muito pouco. Suas duas extremidades são indistinguíveis uma da outra."
    };
    this.Mooncalf = 
    {   value: 5, 
        nome: "Mooncalf", 
        nd : 26, 
        vida_maxima: 75, 
        vida_atual: 75, 
        ataque : "1d12", 
        defesa : "1d14", 
        descricao : "Costuma fazer danças em áreas grandes banhadas pela luz do luar, apoiado em suas patas traseiras."
    };
    
}
     
CriaturasEnum.prototype.getJSONByValue = function(value){
    switch(parseInt(value)){
        case 0:
            return this.Murtisco;
            break;
        case 1:
            return this.Niffler;
            break;
        case 2:
            return this.Augurey;
            break;
        case 3:
            return this.Horklump;
            break;
        case 4:
            return this.Flobberworm;
            break;
        case 5:
            return this.Mooncalf;
            break;
    }
}
   
module.exports = function(){
	return CriaturasEnum;
}