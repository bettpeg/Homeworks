//task 1
// Создайте функцию p и a, которые будут служить короткими именами для 
// prompt и alert соответственно, то есть запрашивать окно с полем ввода
// и выводить любое пользовательское сообщение в стандартном модальном окне. 
// Напишите функцию d, которая будет служить коротким именем для debugger, 
// то есть запускать процесс отладки. Используя эти псевдонимы получите 
// значение из prompt и отобразите в alert. А процесс работы скрипта 
// проконтролируйте с помощью функции, которая служит для дебага.

let a = alert;
let p = prompt;
function d() {
  debugger;
}

d();
let smth = p("Enter something here:");
a(smth);



//task 2
// Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), 
// которая сравнивает два числа и возвращает большее:

let findMax = (a, b) => { return a > b ? a : b };
console.log(findMax(3,7));



//task3
// Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает 
// любое количество чисел и возвращает меньшее из них:

function findMin() {
   let min = arguments[0];
   for (let i = 0; i < arguments.length; i++) { 
     if (arguments[i] < min) {
        min = arguments[i];
      }
   }
  return min;
 }

console.log(findMin(4, 8, 12, -1, 1, -13));




//task 4
//Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив 
// объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age 
// с разными значениями, у некоторых есть поле middlename. Используя встроенные функции 
// массивов:	
// Отфильтруйте пользователей младше 18 лет
// Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, 
// middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
// Сформируйте новый массив, который содержит только полное имя пользователей

let users = [
  
    {
      firstname: 'Adam',
      lastname: 'Trask',
      age: 33
    },
    {
      firstname: 'Jonathan',
      lastname: 'Jones',
      middlename: 'Luther',
      age: 37
    },
    {
      firstname: 'Neil',
      lastname: 'McCauley',
      age: 41
    },
    {
      firstname: 'Laurel',
      lastname: 'Juspeczyk',
      middlename: 'Jane',
      age: 27
    },
    {
      firstname: 'Ethan',
      lastname: 'Hawley',
      middlename: 'Allen',
      age: 34 
    },
    {
      firstname: 'Jean',
      lastname: 'Finch',
      middlename: 'Louise',
      age: 12
    },
    {
      firstname: 'Rick',
      lastname: 'Blaine',
      age: 43
    },
    {
      firstname: 'Ilsa',
      lastname: 'Lund',
      age: 27
    },
    {
      firstname: 'Claire',
      lastname: 'Keesey',
      age: 15
    },
    {
      firstname: 'Eliot',
      lastname: 'Ness',
      age: 30
    }
  ];
  
  let under18 = users.filter(user => user.age < 18);
  console.log(under18);
  
  users.forEach(user => {
    if ('middlename' in user) {
      user.fullName = user.firstname + ' ' + user.middlename + ' ' + user.lastname;
    } else {
      user.fullName = user.firstname + ' ' + user.lastname;
    }
  });
  
  let usersFullNames = users.map(user => user = user.fullName);
  console.log(users);
  console.log(usersFullNames);


// task 5
//   Не используя методы массива, напишите функцию аналог метода shift. Функция 
//   удаляет из переданного в параметре массива первый элемент и возвращает новый массив.

  function shift(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length -1;
    return arr;
  }
  
  let array = [7, 'ghj', 67, 'gtrd', 'hyu', true, 6, 'lesas'];
  
  shift(array);
  console.log(array);
  

  
//task 6
//   Не используя методы массива, напишите функцию аналог метода массива push. 
//   Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

  function push(arr, ...elements) {
    for (let i = 0; i < elements.length; i++) {
      arr[arr.length] = elements[i];
    }
    return arr;
  }
  
  push(array, 2, 4, 6, 'frlos');
  console.log(array);


  
//task 7
//   Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - 
//   целевой объект, поля которого будут изменены или расширены. Остальные параметры - 
//   объекты-источники, полями которых будет расширяться целевой объект.

  function assign(target, source) {
    
    let sourceKeys = Object.keys(source);
    
    for (let i = 0; i < sourceKeys.length; i++) {
      if (sourceKeys[i] in target) {
        target[sourceKeys[i]] = source[sourceKeys[i]];
      } else {
        target[sourceKeys[i]] = source[sourceKeys[i]];
      }
    }
    return target;
  }
  
  let user = {
    firstname: 'Frank',
    lastname: 'Sandow',
  }
  
  let userUpd = {
    firstname: 'Francis',
    lastname: 'Sandow',
    age: 121
  }
  
  assign(user, userUpd);
  
  console.log(user);
 
  

//task8
//   Напишите функцию ask с тремя параметрами: question, defaultValue, callback. 
//   Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - 
//   defaultValue. Что делать с полученным значением - определяет callback
  
  function ask(question, defaultValue, callback) {
    let response = prompt(`${question}`,`${defaultValue}`);
    callback(response);
  }
  
  ask('Have you finished your Math homework?', 'Yes, I\'ve done everything.', alert);
 
  

//   task 9
//   Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, 
//   находит максимальное и минимальное и возвращает их 
  
  function highAndLow(str) {
  
    let strToArr = str.split(' ');
    let numArr = strToArr.map(item => +item);
    let max = numArr[0];
    let min = numArr[0];
    
     for (let i = 0; i < numArr.length; i++) {
       if(numArr[i] > max) {
         max = numArr[i];
       } 
     }
     for (let j = 0; j < numArr.length; j++) {
       if (numArr[j] < min) {
         min = numArr[j]; 
       }
    }
    return (max + ' ' + min);
  }
  
  var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
  console.log(result);
  


//task10
//   Напишите функцию checkNumber, которая получает на вход как параметр массив любых 
//   значений и возвращает true, если все элементы - числа, и false - если в массиве 
//   хотя бы  одно не число. Для проверки массива используйте метод every или some

  function checkNumber(arr) {
     let allNums = arr.some((element) => isNaN(+element));
    return !allNums;
  }
  
  console.log( checkNumber([1, 2, '3', 'a']) ); // false
  console.log( checkNumber([1, 2, '3', '4']) ); // true