function kurikaeshi(){
    kekka = 0;
    for(i = 0; i <= 100 ; i++ ){
        kekka = kekka +i ;
    }
    alert(kekka);
}
function keisan(){
    kekka = 0;
    text01 = document.getElementById('text01');
    x = parseInt(text01.value);

    ketasuu = 0;
    do {
        x = x / 10;
        x = Math.floor(x);
        ketasuu = ketasuu + 1;
    } while (x != 0);
    alert(ketasuu);
    
}