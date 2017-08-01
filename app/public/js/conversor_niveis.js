function converterNiveisMagia(experiencia){
    if(experiencia < 100){
        return 1;
    } else if(experiencia < 250){
        return 2;
    } else if(experiencia < 400){
        return 3;
    } else if(experiencia < 800){
        return 4;
    } else if(experiencia < 1600){
        return 5;
    } else if(experiencia < 4000){
        return 6;
    } else if(experiencia < 8000){
        return 7;
    } else if(experiencia < 18000){
        return 8;
    } else if(experiencia < 31000){
        return 9;
    } else if(experiencia < 50000){
        return 10;
    } else if(experiencia < 75000){
        return 11;
    } else if(experiencia < 107000){
        return 12;
    } else if(experiencia < 147000){
        return 13;
    } else if(experiencia < 200000){
        return 14;
    } else {
        return 15;
    }
}
function somaTotalNiveis(){
    var total = 0;
    $( ".niveis_magia" ).each(function( index ) {
        total = total + parseInt($( this ).text());
    });
    return Math.floor(total / 4);
}
window.onload = function() {
    $( ".niveis_magia" ).each(function( index ) {
        $( this ).text(converterNiveisMagia($( this ).text()));
    });

    $("#nivel_total").text(somaTotalNiveis());
};