'use strict'
/**
 * Объект позиции игрока
 */
let player = {
    x: 0,
    y: 0,
    /**
     * Функция передвижения игрока
     * @param {object} nextPoint Передает следующий координат по оси х и у
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};