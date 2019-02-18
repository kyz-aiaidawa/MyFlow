function keisan() {
    text01 = document.getElementById("atai1");
    text02 = document.getElementById("atai2");
    x = parseInt(text01.value);
    y = parseInt(text02.value);
    if (text01.value==''){
        alert('１つ目の数値が入力されていません');
        return;
    }
    if (text02.value==''){
        alert('２つ目の数値が入力されていません');
        return;
    }
    if(isNaN(x)){
        alert('１つ目の数値が入力されていません');
        return;
    }
    if(isNaN(y)){
        alert('２つ目の数値が入力されていません');
        return;
    }
    z = x + y;
    kekka = document.getElementById("kekka");
    kekka.innerHTML = z;
    if(z > 100){
        kekka.style.color='red';
    }else{
        kekka.style.color='green';
    }
}