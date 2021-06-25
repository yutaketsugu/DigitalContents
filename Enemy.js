class Enemy {
    int x, y, size = 50;
    boolean isAlive = true;
    Enemy(int x0, int y0) {
        x = x0;
        y = y0;
    }
    display() {
        if(isAlive) {
            ellipse(x, y, size, size);
            this.attack();
        }
    }
    move() {
        //donothing
    }
    judge() {
        if(dist(x, y, shoot.x, shoot.y) < (size + shoot.size)) {
            isAlive = false;
        }
    }
    attack() {
        
    }
}

