// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных 
// элементов в массиве. Если в массиве есть нулевой элемент, 
// то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может 
// содержать не только числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой 
// функции корректное название, вызовите функцию, проанализируйте синтаксис.


let numArray = [1, 5, 10, null, 8, 0, 55, NaN, '', 0];

function getNumberElements(numberEven, numberAdd, numberZero, numberAnother) {

    for (let i = 0; i < numArray.length; i++) {
        if (typeof(numArray[i]) === 'number' && numArray[i] !== 0 && !isNaN(numArray[i])) {
            numArray[i] % 2 === 0 ? (numberEven += 1) : (numberAdd += 1)
        } else if (numArray[i] === 0) {
            numberZero += 1;
        } else {
            numberAnother += 1;
        }

    }
    console.log(`Четных элементов - ${numberEven}`)
    console.log(`Нечетных элементов - ${numberAdd}`);
    console.log(`Количество нулей - ${numberZero}`);
    console.log(`Количество других элементов массива - ${numberAnother}`);

}

getNumberElements(0, 0, 0, 0)