// Task 1
// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, '7', true, 'less'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) !== 'boolean' && !isNaN(+arr[i])) {
    sum += +arr[i];
  }
}

console.log(sum);



// Task 2
// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами 
// “Это здесь лишнее”

let arr = ['AngularJS', 'jQuery'];

arr.unshift('Backbone.js');
arr.push('ReactJS', 'Vue.js')
arr.splice(1, 0, 'CommonJS');
alert(arr.splice(arr.indexOf('jQuery'), 1) + '- this doesn\'t belong here!');



// Task 3
// Создайте массив из минимум 100 случайных целых чисел. Переберите массив и сгенерируйте 
// на его основе новый, который содержит только уникальные (неповторяющиеся) значения 
// исходного массива. Решите, используя только цикл for.

let arr = [];
let uniqueArr = [];


for (let i = 0; i < 100; i++) {
  arr.push(Math.random().toFixed(2));
  for (; uniqueArr.indexOf(arr[i]) === -1;) {
    uniqueArr.push(arr[i]);
  }
}

console.log(arr);
console.log(uniqueArr);



// Task 4
// Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. 
// Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых 
// методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите 
// в alert исходный и итоговый варианты.

let str = 'Как однажды Жак звонарь сломал городской фонарь';
let arr = str.split(' ');
arr.splice(4,1);
arr.splice(5, 0, 'сломал');

let correctStr = arr.join(' ');
alert(str + '\n' + correctStr);



// Task 5
// Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых 
// символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла 
// посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let arr = [];
let sum = 0;

while (true) {
  let newEl = prompt('Enter something', '');
  
  if (newEl === null) {
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(+arr[i])) {
        sum += +arr[i];
      }
    }
    break;
  } else {  
    arr.push(newEl);
  }
}
alert(sum);



// Task 6
// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения

let multTable = [];
let subTable = '';
let substr = '';

for(let i = 1; i <= 10; i++) {
  
    for (let j = 1; j <= 10; j++) {
      substr += `${i}*${j}=${i*j} `;
    }
  
    subTable = substr.split(' ');
    subTable.splice(10, 1)
    multTable.push(subTable);
    substr = '';

}

console.log(multTable);



// Level Up
// Создайте структуру(ы) для хранения данных, из которых можно составить таблицу соответствия 
// значениям переменной (value) в логическом контексте (истина, ложь). Изобразите на странице.

let table = document.createElement('table');
document.body.appendChild(table);

let valuesContainer = [true, false, 1, 0, '', `'1'`, `'0'`, null, undefined, {}, [], NaN];

for (let i = 0; i < 2; i++) {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let td = document.createElement('td');
  tr.appendChild(td);
  
  if (i === 0) {
    for (let j = 0; j < valuesContainer.length; j++) {
      let td = document.createElement('td');
  
      if (valuesContainer[j] instanceof Array) {
        td.innerText = '\[\]';
      } else if (valuesContainer[j] instanceof Object) {
        td.innerText = '\{\}';
      }
        else {
          switch (valuesContainer[j]) {
          case '': td.innerText = '\'\''; break; 
          case null: td.innerText = 'null'; break;
          default: td.innerText = valuesContainer[j];
        }
      }
      td.style.background = '#efefef'
      tr.appendChild(td);
    }
   
  } else if (i === 1) {
    td.innerText = 'if (value)';
    for (let j = 0; j < valuesContainer.length; j++) {
      let td = document.createElement('td');
      switch (Boolean(valuesContainer[j])) {
        case true: td.style.background = '#65bf6b'; break;
        case false: td.style.background = '#f77f60';
      }
      tr.appendChild(td);
    }  
  } 
}
