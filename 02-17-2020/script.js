//FUNCTIONS-II

//task1
// Напишите функцию setComment с параметрами: date, message, author. Дата и 
// текст сообщения - обязательные параметры, если какой-то из них или оба 
// отсутствуют, то выполнение функции должно обрываться, а пользователю 
// выдаваться предупреждение (alert) о том, что данные переданы некорректно. 
// Параметр author - опциональный, но должна происходить проверка: если 
// параметр не передан, то вместо него подставляется значение ‘Anonymous’. 
// Функция распечатывает на странице текст в формате: 
// 				<имя_автора>, <дата>
// 				<текст_сообщения>

function setComment(date, message, author = 'Anonymous') {
  if (!date || !message) {
    alert('The initial parameters are incorrect!');
    return;
  }
  
  let comment = document.createElement('div');
  let commentHead = document.createElement('span');
  let commentMessage = document.createElement('p');
  
  commentHead.innerText = author + ', ' + date;
  commentHead.setAttribute('class', 'comment-head');
  commentMessage.innerText = message;
  
  comment.appendChild(commentHead);
  comment.appendChild(commentMessage);
  document.body.appendChild(comment);
  comment.setAttribute('class', 'comment-container');
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');



//task2
// Напишите функцию, которая возвращает куб переданного числа, аналог 
// Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

//a)
// function cube(x) {
//  let y = x;
//   for (let i = 1; i < 3; i++) {
//     y *= x;
//   }
//   return y;
// }

//b)
function cube(x) {
  let y = x*x;
  if (y = x*x*x) {
    return y;
  } else {
   return y = cube(x/x);
  }
}

console.log(cube(5));
console.log(cube(10));
console.log(cube(2));
console.log(cube(4));



//task 3
// Напишите функцию extraCube, которая принимает в качестве параметра или число, 
// или массив числовых значений и возвращает либо куб числа, либо массив кубов, 
// в зависимости от типа входящего параметра (typeof). Для расчета куба числа 
// вместо встроенного метода Math.pow используйте собственную функцию.

function extraCube(num) {
  
  if (typeof(num) === 'object') {
    let cubeArr = num.map((item) => cube(item));
    return cubeArr;
  } else {
    let cubeNum = cube(num);
    return cubeNum;
  }
  
}

console.log( extraCube([0, 1, 2, 3]) );
console.log( extraCube(2) );



//task 4
// Hапишите функцию, которая вызывается и работает следующим образом:
// console.log( multi(2)(3)(4) ); // 24

function multi(a) {
  return function(b) {
    return function(c) {
      let result = a * b * c;
      return result;
    } 
  }
}

console.log(multi(3)(3)(4));



//task 5
// Создайте объект, описывающий html-разметку. Напишите функцию, 
// которая добавляет разметку в произвольный контейнер на странице.

{/* <section id="methods">
	<article>
		<h1>Array.prototype.every()</h1>
		<p>Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.</p>
	</article>
	<article>
		<h1>Array.prototype.some()</h1>
		<p>Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.</p>
	</article>
	<article>
		<h1>Array.prototype.reduce()</h1>
		<p>Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.</p>
	</article>
	<article>
		<h1>Array.prototype.reduceRight()</h1>
		<p>Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.</p>
	</article>
</section> */}

//task 5

let markup = [{
  tag: 'section',
  attributes: [
    {
      attrName: 'id', 
      value: 'methods'
    }
  ],
  children: [
    {
      tag: 'article',
      children: [
        {
          tag: 'h1',
          content: 'Array.prototype.every()',
        },
        {
          tag: 'p',
          content: 'Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.',
        }
      ]
    },
    {
      tag: 'article',
      children: [
        {
          tag: 'h1',
          content: 'Array.prototype.some()',
        },
        {
          tag: 'p',
          content: 'Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.',
        }
      ]
    },
    {
      tag: 'article',
      children: [
        {
          tag: 'h1',
          content: 'Array.prototype.reduce()',
        },
        {
          tag: 'p',
          content: 'Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.',
        }
      ]
    },
    {
      tag: 'article',
      children: [
        {
          tag: 'h1',
          content: 'Array.prototype.reduceRight()',
        },
        {
          tag: 'p',
          content: 'Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.',
        }
      ]
    }
  ]
}];

function addMarkup(markup, container) {

markup.forEach ((elem) => {
 let $tag = $(`<${elem.tag}>`)
              .appendTo(container);
 
 if (elem.attributes) {
   elem.attributes.forEach((attr) =>
   $tag.attr(`${attr.attrName}`, `${attr.value}`));
 }
 
 if (elem.content) {
   $tag.text(elem.content);
 }
 
 if (elem.children) {
    addMarkup(elem.children, $tag);
 }
});

}

addMarkup(markup, 'div');


// task 6
// Дан массив, элементами которого могут быть любые значения, включая другие массивы. 
// Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на 
// глубину depth, указанную в параметре функции. По умолчанию flat поднимает элементы 
// на одну глубину (то есть если depth не указан).


function flat (arr, n = 1) {
  
  if (n === 1) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
          arr.push(item[i]);
        }
        arr.splice(arr.indexOf(item), 1);
      }            
    });
    return arr;
  } else {
    return arr = flat(arr, n-1);
  } 
  
}

var data1 = [1, 2, [3, 4, [5, 6]]];
var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log( flat(data2, 1) ); 
console.log( flat(data2, 2) ); 



//task 7
// “История в картинках”. Создайте массив тематически связанных строковых картинок. 
// Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на 
// страницу один из элементов массива (одну из картинок). Тема - свободная, 
// ограничена только набором доступных строковых картинок.

let story = ['&#x1F468&#x200D&#x1F469&#x200D&#x1F467&#x200D&#x1F466', '&#x2694', '&#x1F468&#x200D&#x1F469&#x200D&#x1F467&#x200D&#x1F466', '&#x1F469&#x200D&#x2764&#xFE0F&#x200D&#x1F468', '&#x274C', '&#x1F466', '&#x1F489', '&#x1F377', '&#x2620', '&#x1F469', '&#x1F5E1', '&#x2620', '&#x1F494']; 

let $emojiCont = $('<div>').appendTo('body').addClass('emojiCont');

for (let i = 0; i < story.length; i++) {
  setTimeout((() => $emojiCont.html(`${story[i]}`)), 1000*i);
}



//task 8
// Найдите и исправьте ошибки в коде:

// function foo() {
// 	function bar(a) {
// 		i = 3;
// 		return i + a;
// 	}
	
// 	for (var i = 0; i < 10; i++) {
// 		console.log( bar(i * 2) );
// 	}
// }

// foo(); // 3 5 7 9 11 13 15 17 19 21

function foo() {
	function bar(a) {
		let i = 3;
		return i + a;
	}
	
	for (let i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21



// Замыкания
// task 1
// Используя замыкание, напишите функцию createTimer, которая использует метод 
// performance.now() для получения текущей временной метки и служит для замера 
// времени выполнения другого кода:

function createTimer() {
  let startTime = performance.now();
  return function() {
    let endTime = performance.now();
    return endTime - startTime;
  }
}

let timer = createTimer();
alert('Hello World!');
alert(timer());


//task 2
// Используя замыкания, создайте функцию createAdder(), которая принимает на вход 
// любой примитивный параметр и возвращает функцию, которая добавляет к первому 
// параметру второй. Функция работает по следующему принципу:

function createAdder(a) {
  return function toAdd(b) {
    return a + b;
  } 
}

let hello = createAdder('Hello, ');
alert( hello('John') );
alert( hello('Harry') );

let plus = createAdder(5);
alert( plus(1) );
alert( plus(5) );

