
const array = [6, 10, 15, 51, 55, 44, 4474];
//1.2 сумма всех элементов
let sum = 0
for (let item of array) {
    sum = sum + item;
}
console.log('Сумма элементов:', sum);


//1.3 сумма всех нечетных элементов
let sumEven = 0;
for (let item of array) {
    if (!(item % 2)) sumEven = sumEven + item;
}
console.log('Сумма четных элементов:', sumEven);


//task 4
const detail = [
    { name: 'cover', weight: 5.4 },
    { name: 'frame', weight: 1.2 },
    { name: 'body', weight: 10.5 },
    { name: 'screw', weight: 0.5 },
    { name: 'tube', weight: 32.4 }];

for (let item of detail) {
    if (item.weight > 10) console.log(item.name);
}


//task5
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница',]
let newWeek = [];

for (let day of week) {
    newWeek.push({
        word: day,
        length: day.length
    })
}
console.log(newWeek);

//5.1
for (let day of newWeek) {
    console.log(day.word + ' - ' + day.length);
}

//*6
/* Задать число n. Запустить цикл от 1 до n с шагом 0.5. Вывести в консоль текущее число (i), целое ли оно. Пример: "1 integer"..."2.5 decimal"...*/

let n = 3;
for (let i = 1; i < n; i = i + 0.5) {
    if (i % 1 == 0) {
        console.log(i + ' integer');
    } else {
        console.log(i + ' decimal');
    }
}


//На вход подается строка цвета светофора на английском. Программа должна вернуть команду водителю в зависимости от цвета

function processData(input) {
    let message = 0;
    if (input == 'green') {
        message = 'go';
    } else if (input == 'red') {
        message = 'stop';
    } else if (input == 'yellow') {
        message = 'wait';
    } else {
        message = 'broken';
    }
    console.log(message);
}

let a = prompt('Bведите цвет светофора на английском', 'green');

processData(a);

