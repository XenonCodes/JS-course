'use strict'

let mover = {
    /**
     * Функция проверки направления движения игрока
     * @returns Возвращает направление
     */
    getDirection() {
        let availableDirections = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 5, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 5, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },
    /**
     * Функция вычисления следующей точки
     * @param {number} direction Число которое указывает направление в соответствии со стрелками NumPad 
     * @returns возвращает объект с новыми координатами
     */
    getNextPosition(direction) {
        let nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 5:
                nextPosition.y++;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        return nextPosition;
    },
};