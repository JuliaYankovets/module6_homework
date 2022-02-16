// Написать функцию, которая принимает число как аргумент и 
// возвращает функцию, которая также принимает число как аргумент 
// и возвращает сумму этих двух чисел. Выведите в консоль результат.

function one(x) {
    return function two(y) {
        let c = (y + x);
        console.log(c);
        return;
    }
}
(one(4))(10);


// ИЛИ


function getNumber(numberOne) {
    return function getSum(numberTwo) {
        let sum = (numberOne + numberTwo);
        return sum;
    }
}
let resultSum = getNumber(5);
console.log(resultSum(2));