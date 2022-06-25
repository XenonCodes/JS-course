'use strict'

class Questions {
    constructor(text, rightAnswer, a, b, c, d) {
        this.text = text;
        this.rightAnswer = rightAnswer;
        this.responseOptions = {
            "a": a,
            "b": b,
            "c": c,
            "d": d,
        };
        this.result = '';
    }
    /**
     * Функция ввода ответа пользователя
     */
    prompt() {
        this.result = prompt(`${this.text}\n
        A:  ${(this.responseOptions.a)}          B:  ${(this.responseOptions.b)}\n
        C:  ${(this.responseOptions.c)}          D:  ${(this.responseOptions.d)}`);
    }
    /**
     * Функция проверки ответа
     */
    check() {
        if (this.result.toLocaleLowerCase() == this.rightAnswer) {
            alert(`Вы угадали! Ваш счёт ${score += 100}`)
        } else {
            alert(`Вы не угадали! Ваш счёт ${score = reducingScore(score)}`)
        }
    }
}

let score = 0
/**
 * Функция уменьшения счёта. Если больше 50, то уменьшает его на 50 очков.
 * @param {Number} score Количество очков.
 * @returns Возвращает или 0 очкво или меньше на 50 очков.
 */
function reducingScore(score) {
    if (score <= 50) {
        return 0;
    } else {
        return score -= 50;
    }
}
