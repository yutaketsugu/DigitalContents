class JumppingEnemy extends Enemy {
    int h = 5;
    int t = 0;
    JumppingEnemy(int x0, int y0) {
        super(x0, y0);
    }
    move() {
        y += abs(hsin(PI/6 * t)); //hの高さで跳ねる
        t++;
    }
}