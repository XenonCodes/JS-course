'use strict'
/**
 *  Объект настройки поля
 */
let config = {
    rowsCount: null,
    colsCount: null,
    /**
     * Функция задает размер поля, спрашивая у user
     */
    createConfig() {
        while (true) {
            this.rowsCount = prompt("Введите количество строк на карте.");
            this.colsCount = prompt("Введите количество колонок на карте.");
            if (this.rowsCount !== null && this.rowsCount !== "" && this.rowsCount > 0 && Number.isInteger(+this.rowsCount) === true) {
                if (this.colsCount !== null && this.colsCount !== "" && this.colsCount > 0 && Number.isInteger(+this.colsCount) === true) {
                    break;
                }
            }
        }
    }
};
