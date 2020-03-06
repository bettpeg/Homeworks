// //this, call, apply, bind



// task 1
// Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

let calculator = {
  read: function() {
    this.x = +prompt('Enter a number:');
    this.y = +prompt ('Enter another number:');
  },

  sum: function() {
    return this.x + this.y;
  },

  diff: function() {
    return this.x - this.y;
  },

  multi: function() {
    return this.x * this.y;
  },

  div: function() {
    return this.x / this.y;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );


// task 2
// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ 
// и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды 
// появляется окно с сообщением, записанным в свойстве объекта message.

let coffeeMachine = {
  message: 'Your coffee is ready!',
  start: function() {
    setTimeout(() => alert(this.message), 3000)
  }
}

coffeeMachine.start();



// task 3
// Создайте объект array с методом инициализации начального значения массива, c методами 
// добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. 
// Используйте концепцию chaining для создания цепочки вызовов.
// array
// .setValue([1])
// .push(2)
// .push(3)
// .push(3)
// .pop();

// var currentValue = array.getValue();
// console.log(currentValue); // [1, 2, 3]

let array = {
  
  setValue(val) {
      this.value = val;
      return this;
  },
  
  getValue() {
    return this.value;
  },
  
  push(item) {
    this.value[this.value.length] = item;
    return this;
  },
  
  pop() {
    this.value.length = this.value.length - 1;
    return this;
  }
}

array.setValue([1]).push(2).push(3).push(3).pop();

var currentValue = array.getValue();
console.log(currentValue);



// task 4
// Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два 
// объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() 
// приветствуйте каждого из пользователей персонально.

function hello() {
  alert(`Hello ${this.firstname} ${this.lastname}!`);
}

let user1 = {
  firstname: 'Sean',
  lastname: 'Devine'
}

let user2 = {
  firstname: 'Jimmy',
  lastname: 'Markum'
}

hello.apply(user1);
hello.apply(user2);



// task 5
// Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
// Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ 
// или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного 
// калькулятора.

// alert(me.getSum());
// alert(me.getDiv());

let obj = {
  x: 5,
  y: 4,
  
  getSum() {
    alert(`${this.x} + ${this.y} = ${calculator.sum.call(this)}`);
  },
  
  getDiff() {
    alert(`${this.x} - ${this.y} = ${calculator.diff.call(this)}`);
  },
  
  getMulti() {
    alert(`${this.x} * ${this.y} = ${calculator.multi.call(this)}`);
  },
  
  getDiv() {
    alert(`${this.x} / ${this.y} = ${calculator.div.call(this)}`);
  }
  
}

obj.getSum();
obj.getDiff();
obj.getMulti();
obj.getDiv();



// task 6
// “Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText. 
// Метод appendTo с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода. 
// Метод appendText может дописывать текст в добавленный элемент. Создайте массив строк и 
// запустите цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст 
// добавленного html-элемента добавляется соответствующий по порядку элемент массива. Учтите, 
// что для доступа к вашему элементу не должен производиться поиск по DOM-дереву.

let typeWriter = {
  
  delay: 500, 
  
  p: '',
  
  appendTo(cont) {
    let par = document.createElement('p');
    this.p = par;
    cont.appendChild(par);
  },
  
  appendText(letter) {
    this.p.innerHTML += letter;
    return this;
  }
  
}

let txt = 'Lorem ipsum dolor sit amet'; 
let text = txt.split('');

typeWriter.appendTo(document.body);
for (let i = 0; i < text.length; i++) {
  setTimeout(function() {
    typeWriter.appendText(text[i]);
  }.bind(typeWriter), typeWriter.delay * i);
}



// task 7
// Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined

var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66
  }
};

function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply(country.language, ["", ""]); // undefined



// task 8
// Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя

// userFormat('<<<', '>>>'); // <<<John>>>

// Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
// 2. Метод bind().

var user = {
  name: "Andrew Martin"
};

//1
function format(start, end) {
    console.log(start + this.name + end);
};

let userFormat = format.bind(user);
userFormat('<<<', '>>>');

//2
let userFormat = function(start, end) {
  console.log(start + this.name + end);
};

userFormat.call(user, "<<<", ">>>");



// task 9
// Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
// разделитель и строки передаются в параметрах функции. Используя карринг, создайте 
// новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

// hello('World'); // Hello World
// hello('John'); // Hello John

function concat(strA, c, strB) {
  return console.log(strA + c + strB);
}

let hello = concat.bind(null, "Hello", " ");

hello("John");



// Level Up
// Используя дескрипторы свойств создайте объект для описания местности со свойствами 
// latitude, longitude и title. Свойства latitude и longitude могут содержать только цифры, 
// все, что будет попадать в эти поля, становится числом. Если при преобразовании к 
// числу получается NaN, то в качестве значения записывается null. То же для поля title, 
// только все данные будут преобразовываться к строке.

let geoPosition = {};

Object.defineProperties(geoPosition, {
  latitude: {
    set(value) {
      this._latitude = Number(value);
      if (isNaN(this._latitude)) this._latitude = null;
    },

    get() {
      return this._latitude;
    }
  },

  longtitude: {
    set(value) {
      this._longtitude = Number(value);
      if (isNaN(this._longtitude)) this._longtitude = null;
    },

    get() {
      return this._longtitude;
    }
  },

  title: {
    set(value) {
      this._title = String(value);
    },

    get() {
      return this._title;
    }
  }
});

geoPosition.latitude = "garry";
geoPosition.longtitude = "15";
geoPosition.latitude = false;

console.log(geoPosition.latitude);
console.log(geoPosition.longtitude);
console.log(geoPosition.title);