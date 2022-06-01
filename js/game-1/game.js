'use strict'

let game = {
    /**
     * Функция запуска игры
     * @returns 
     */
    start() {
        while (true) {
            let direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            let nextPoint = mover.getNextPosition(direction);
            if (nextPoint.x >= 0 && nextPoint.y >= 0 && nextPoint.x <= config.colsCount - 1 && nextPoint.y <= config.rowsCount - 1) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            } else {
                alert("Там стена!");
            }
        }
    },
    /**
     * Функция инициализации игры 
     */
    init() {
        console.log("Ваше положение на поле в виде i.");
        config.createConfig();
        renderer.render();
        console.log("Чтобы начать игру наберите game.start() и нажмите Enter.");
    }
};

game.init();