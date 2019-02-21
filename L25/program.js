function hajime() {
    backgamen = document.getElementById('back');
    cb = backgamen.getContext('2d');
    // 塗りを設定
    cb.fillStyle = '#cccccc';
    //線を設定
    cb.strokeStyle = '#333333';
    cb.lineWidth = 3;
    // 四角形を塗る
    cb.fillRect(0, 0, 20, 20); // (左上座標　幅　高)
    //四角形の枠線を描く
    cb.strokeRect(0, 0, 20, 20);
    //左の壁を描画する
    x = 0;
    y = 0;
    //２２回繰り返す
    for (i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        y = y + 20;
    }
    // 右の壁を描画する
    x = 220;
    y = 0;
    for (i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        y = y + 20;
    }
    // 下壁を描画する
    x = 0;
    y = 420;
    for (i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        x = x + 20;
    }
}