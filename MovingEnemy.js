class MovingEnemy extends Enemy {
    int A = 5;
    int t = 0;
    MovingEnemy(int x0, int y0) {
        super(x0, y0);
    }
    move() {
        x += Asin(PI/6 * t); //Aを振幅に反復運動
        t++;
    }
}