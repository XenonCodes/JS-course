'use strict'

// 1. Объясните почему код даёт именно такие результаты?

/*пример 1
   Объявляются переменные a, b и им присваивается значение число 1.
   Объявляется переменные с, d и они получает значение undefined
   Потом переменная A благодаря префиксному инкременту ++.. увеличивается на 1 и становится 2
   Потом C присваивается значение 2 */
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

/*пример 2
   В переменную D копируется значение 1 из переменной B
   Потом B благодаря постфиксному инкременту ..++ увеличивается на 1 и становится 2 */
d = b++;
alert(d); //ответ: 1

/*пример 3
   Переменная A благодаря префиксному инкременту ++.. увеличивается на 1 и становится 3
   Потом происходит сложение 2 + 3
   Потом 5 перезаписывается в переменную C */
c = 2 + ++a;
alert(c); //ответ: 5

/*пример 4
   Происходит сложение 2 + 2
   Потом B благодаря постфиксному инкременту ..++ увеличивается на 1 и становится 3
   Результат 2 + 2 записывается в переменную D */
d = 2 + b++;
alert(d); //ответ: 4

alert(a); //3 Пример 3
alert(b); //3 Пример 4

/* 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
 (описать последовательность действий).
    Переменная А получает новое значение число 2
    Объявляется переменная X в которую присваивается следующие:
      Вначале выполняется действие в (a *= 2). Переменная А вначале * на 2, а потом присвается новое значение 4
      Потом происходит сложение 1 + 4 и число 5 записывается в переменную X */
a = 2;
let x = 1 + (a *= 2);


/*3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму; */
a = +prompt("Укажите первое целое число");
b = +prompt("Укажите второе целое число");
if (a >= 0 && b >= 0) {
    alert("Разность " + a + " и " + b + " это " + (a - b));
} else if (a < 0 && b < 0) {
    alert("Произведение " + a + " и " + b + " это " + (a * b));
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    alert("Сумма " + a + " и " + b + " это " + (a + b));
} else {
    alert("Вы ввели что то не понятное");
}

// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с
// двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
// складывать их и возвращать результат. Обязательно использовать оператор return.
/**
 * Функция сложения чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат суммы
 */
function numberAddition(num1, num2) {
    return num1 + num2;
}
/**
 * Функция вычитания чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат разности
 */
function numberSubtraction(num1, num2) {
    return num1 - num2;
}
/**
 * Функция умножения чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат произведения
 */
function numberMultiplication(num1, num2) {
    return num1 * num2;
}
/**
 * Функция деления чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат деления – частное
 */
function numberDivision(num1, num2) {
    return num1 / num2;
}

// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.
/**
 * Функция калькулятора
 * @param {number} arg1 Первое число
 * @param {number} arg2 Второе число
 * @param {string} operation Арифметическая операция +, -, *, /.
 * @returns Рузультат арифметических операций
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return numberAddition(arg1, arg2);
        case "-":
            return numberSubtraction(arg1, arg2);
        case "*":
            return numberMultiplication(arg1, arg2);
        case "/":
            return numberDivision(arg1, arg2);
    }
}

mathOperation(2, 3, "+");

// 6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
// обычных заданий, требует времени и возможно гугления, делайте по желанию.)

// Программа должна спросить у пользователя число, это будет количество денег, которое
// он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
// То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
let userMoney = prompt("Сколько вы хотите положить на счёт в банке?");
let numberLength = userMoney.length
if (userMoney < 11) {
    switch (userMoney.charAt(numberLength - 1)) {
        case "0":
            alert("Это шутка?!?!");
            break;
        case "1":
            alert(`Ваша сумма в ${userMoney} рубль успешно зачислена.`);
            break;
        case "2":
        case "3":
        case "4":
            alert(`Ваша сумма в ${userMoney} рубля успешно зачислена.`);
            break;
        default:
            alert(`Ваша сумма в ${userMoney} рублей успешно зачислена.`);
    }
} else if (userMoney > 10) {
    let newString = userMoney.charAt(numberLength - 2) + userMoney.charAt(numberLength - 1);
    switch (newString) {
        case "21":
        case "31":
        case "41":
        case "51":
        case "61":
        case "71":
        case "81":
        case "91":
        case "01":
            alert(`Ваша сумма в ${userMoney} рубль успешно зачислена.`);
            break;
        case "22":
        case "23":
        case "24":
        case "32":
        case "33":
        case "34":
        case "42":
        case "43":
        case "44":
        case "52":
        case "53":
        case "54":
        case "62":
        case "63":
        case "64":
        case "72":
        case "73":
        case "74":
        case "82":
        case "83":
        case "84":
        case "92":
        case "93":
        case "94":
        case "02":
        case "03":
        case "04":
            alert(`Ваша сумма в ${userMoney} рубля успешно зачислена.`);
            break;
        default:
            alert(`Ваша сумма в ${userMoney} рублей успешно зачислена.`);
    }
} else {
    alert("Введите число!");
}