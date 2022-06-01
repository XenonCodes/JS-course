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
    }
}

let score = 0
