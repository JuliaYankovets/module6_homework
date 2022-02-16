// Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
// определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function getNumberType(i) {
    if (i === 0 || i === 1) {
        console.log(`Число ${i} не является простым или составным`);
        return;
    } else if (i > 1000) {
        console.log('Данные не верны');
        return;
    }
    if ((i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) && (i !== 2 && i !== 3 && i !== 5 && i !== 7)) {
        console.log(`Число ${i} является составным`);
    } else {
        console.log(`Число ${i} является простым`);
    }
}
getNumberType(1005);



// ТАК, ВРОДЕ, ТОЖЕ РАБОТАЕТ:


function getNumberType(i) {
    let divider;
    let simpleNumber = true;
    if (i === 0 || i === 1) {
        console.log('число не попадет под категории простое/составное');
        return;
    } else if (i > 1000) {
        console.log('Данные не верны');
        return;
    }
    for (divider = 2; divider <= 1000; divider++) {
        if (i % divider === 0 && i !== divider) {
            simpleNumber = false;
            break;
        }
    }
    if (simpleNumber) {
        console.log('Число простое');
    } else {
        console.log('число составное');
    }
}
getNumberType(993);