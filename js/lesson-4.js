'use strict'

/*1. (это задание делайте по желанию)
Написать функцию, преобразующую число в объект.
Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:
- Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее
здесь https://mzl.la/2XCVSsx
- Math.floor(value) - метод возвращает целое число, которое меньше или равно
данному числу (проще говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO
- Используйте также остаток от деления на 10, например 123 % 10 будет 3
- Вам также может пригодится делить число на 100 и на 10. */
function check() {
    let range = [0, 999];
    let userNumber = +prompt(`Введите целое число в диапазоне от ${range[0]} до ${range[1]}`);
    let result = {};
    if (userNumber < range[0] && userNumber > range[1] || !Number.isInteger(userNumber)) {
        alert(`Вы ввели не целое число в диапазона от ${range[0]} до ${range[1]}!`);
        console.log(result);
    } else {
        result = {
            units: userNumber % 10,
            tens: Math.floor((userNumber / 10) % 10),
            hundreds: Math.floor(userNumber / 100),
        }
        console.log(result);
    }
}

check();

/*1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке). */
/**
 * Конструктор объекта товара ES5
 * @param {string} name Название товара
 * @param {number} price Цена товара
 */
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}
ProductES5.prototype.make25PercentDiscount = function () {
    this.price *= 0.85;
};
let prod1 = new ProductES5("Товар-1", 100);
prod1.make25PercentDiscount();
console.log(prod1.price);
//--------------------------------------------------------------------------------
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.85;
    }
}
let prod2 = new ProductES6("Товар-2", 1000);
prod2.make25PercentDiscount();
console.log(prod2.price);

/*1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по
аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),

а) конструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
принимать текст и записывать его в свойство text объекта.

б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true. */
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
PostES5.prototype.edit = function (text) {
    this.text = text;
};
function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let user1 = new AttachedPostES5("Xenon", "Тут будет текст", new Date());
console.log(user1.text);
console.log(user1.highlighted);
user1.edit("Новый текст");
user1.makeTextHighlighted();
console.log(user1.text);
console.log(user1.highlighted);
//----------------------------------------------------------------------------------
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
let user2 = new AttachedPostES6("Neon", "Тут будет второй текст", new Date());
console.log(user2.text);
console.log(user2.highlighted);
user2.edit("Перепишем второй текст");
user2.makeTextHighlighted();
console.log(user2.text);
console.log(user2.highlighted);

/*2 (это задание не является частью учебной программы, делайте его по желанию).
Для игры бродилка (которая есть в дополнительных видео), добавить возможность
ходить по диагонали цифрами 1, 3, 7, 9.
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку,
т.е. при направлении в стенку и игрок оставался на том же месте где стоял.

Выполнено отдельными файлами */

/*3 (это задание не является частью учебной программы, делайте его по желанию). На базе
игры (приняв за пример), созданной в дополнительных видео, реализовать
игру «Кто хочет стать миллионером?».
Т.е. у вас должен быть главный объект, содержащий всю логику игры, который будет
иметь методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и
предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.

Выполнено отдельными файлами */