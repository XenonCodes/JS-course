'use strict'
// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую
// температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
// Tf = (9 / 5) * Tc + 32;
// где Tf – температура по Фаренгейту, Tc – температура по Цельсию

let Tc = +prompt("Введите температура по Цельсию °C и я переведу в Фаренгейты°F");
let Tf = 9 / 5 * Tc + 32;
alert("Температура по Фаренгейту будет " + Tf + "°F");

// 2. Объявить две переменные: admin и name. Записать в name строку
// "Василий". Скопировать значение из name в admin. Вывести в
// консоль переменную admin (должно вывести "Василий").

let admin = null;
let name = null;
name = "Василий";
admin = name;
console.log(admin);

// 3. Вывести в консоль значения выражений и объяснить почему получились такие
// значения используя комментарии к каждому выражению:

/* 1. Объявляется переменная result. Число 10 складываем с числом 10 получаем число 20.
   2. Число 20 нельзя сложить со строкой "10", происходит неявное приведение типа number в string.
   3. Происходит конкатенация строк "20"+"10". Получаем "2010"
   4. C помощью console.log выводим result в консоль */
let result = 10 + 10 + "10";
console.log(result);

/* 1. Переменная result переназначается. Число 10 нельзя сложить со строкой "10", происходит неявное приведение типа number в string.
   2. Происходит конкатенация строк "10"+"10". Получаем "1010"
   3. Строку "1010" нельзя сложить с числом 10, происходит неявное приведение типа number в string.
   4. Происходит конкатенация строк "1010"+"10". Получаем "101010"
   5. C помощью console.log выводим result в консоль */
result = 10 + "10" + 10;
console.log(result);

/* 1. Переменная result переназначается. Строка "10" благодаря унарному + (у оператора + один операнд "10") и неявного приведения типа string в number становится числом 10.
   2. Число 10 складываем с числом 10 получаем число 20.
   3. Число 20 складываем с числом 10 получаем число 30.
   4. C помощью console.log выводим result в консоль */
result = 10 + 10 + +"10";
console.log(result);

/* 1. Переменная result переназначается.Пустую строку "" нельзя назвать операндом, она ни чего не содержит. Получается специальное значение null.
   2. null благодаря унарному - (у оператора - один операнд null), происходит неявное приведение специальное значение null в number. Это -0.
   3. 10 / -0 получаем числовое значение -infinity
   4. C помощью console.log выводим result в консоль */
result = 10 / -"";
console.log(result);

/* 1. Переменная result переназначается. Строка "2,5" благодаря унарному + (у оператора + один операнд "2,5") и неявного приведения типа string в number, но из-за символа запятой получается специальное числовое значение NaN (ошибка вычислений, not a number).
   2. 10 / NaN Это не число, результат NaN.
   C помощью console.log выводим result в консоль */
result = 10 / +"2,5";
console.log(result);