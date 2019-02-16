function oshita(){
    youso=document.getElementById('text01');
    let t = "";
    let hyouji="こんにちは";
    /* let gamenyouso ="";  */
    t = youso.value;
    hyouji = hyouji+t+"さん";


    gamenyouso = document.getElementById('gamen');

    /*alert(hyouji); */
    gamenyouso.innerHTML = hyouji;
}