// По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне. 
// Проверить и вывести на экран, улитка двигается вперед, назад или остается на 
// месте (скорость (вектор) положительная, отрицательная или ноль).

let speed = +prompt('How fast is the snail moving?');

if (speed > 0) {
    alert('Moving forward');
} else if (speed < 0) {
    alert('Moving backwards');
} else { alert('Not moving');}



// У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
// В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать
// английский язык или выпить пива. С помощью условного оператора определите ваши 
// возможности и отобразите на экране в alert.

let myMoney = +prompt('How much money do I have?');
let friendsMoney = +prompt('How much money does my friend have?');

if (myMoney + friendsMoney > 100) {
    alert('We\'re flying to Malta!');
} else {alert('We\'ll just go grab a beer:(');}



// В переменную age запишите возраст человека. Если значение больше или равно 20 
// и меньше 30, в alert выводится “Выслать повестку”.

let age = +prompt('How old are you?');

if (age >=20 && age < 30) {
    alert('Выслать повестку!');
} else {
    alert('Вы свободны.');
}



// Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. 
// Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, 
// в противном случае – ожидаете.

let route = +prompt('Введите номер маршрутки:');

if (route === 7 || route === 255 || route === 225) {
    alert('Едем домой!');
} else {
    alert('Ждем дальше.');
}



// В переменную day записан текущий день недели. Если это не суббота и не воскресенье, 
// выведите в alert сентенцию о необходимости идти на работу.

let date = new Date();
let day = date.getDay();

if (day !== 6 && day !== 7) {
    alert('Go to work!');
} else {
    alert('Today you can rest!');
}



// Получите из prompt значение для имени пользователя. Выведите на экран приветствие.
// Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.
 
let usrnm = prompt('Enter your username:');

if (usrnm === '' || usrnm === null) {
    alert('This username is invalid. Please double-check it.');
} else {
    alert('Hello ' + usrnm);
}



// Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции 
// (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. Используя 
// switch, рассчитайте результат конвертации. Результат выведите его в alert.

let exchType = prompt('Enter the type of the desired exchange:').toLowerCase();
let sum = +prompt('How much money would you like to exchange?');

switch (exchType) {
    case('uah-usd'):
        alert(sum*0.041 + ' USD');
        break;
    case('usd-uah'):
        alert(sum*24.57 + ' UAH');
        break;
    default: 
        alert('Incorrect type of exchange. Please reconsider.');
}



// Создайте две переменные: greeting и lang. Переменная greeting – 
	// пустая строка. Переменная lang может принимать три значения: 'ru', 
	// 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то
	// в переменную greeting запишите приветствие на русском языке, если 
	// имеет значение 'en' – то на английском, если 'de' – на немецком. 
	// Выведите на экран приветствие в зависимости от значения переменной 
	// lang. Решите задачу через if-else и через switch-case.

	let greeting = '';
	let lang = prompt('Enter your language:');

	//switch

	switch (lang) {

		case 'ru':
			greeting = 'Здравствуй!';
			break;
		case 'en':
			greeting = 'Hello!';
			break;
		case 'de':
			greeting = 'Hallo!';
		default:
			greeting = 'Unfortunately, this language is not supported';
	}

	alert(greeting);

	//if-else

	if (lang === 'ru') {
		greeting = 'Здравствуй!';
	} else if (lang === 'en') {
		greeting = 'Hello!';
	} else if (lang === 'de') {
		greeting = 'Hallo!';
	} else { greeting = 'Unfortunately, this language is not supported'; }

	alert(greeting);




// В переменной month хранится текущий месяц (new Date()). Определите в какую пору года
//  попадает этот месяц (зима, лето, весна, осень).

let month = new Date().getMonth();

switch (month) {

    case 0:
    case 1:
    case 11:
        alert('Winter');
        break;

    case 2:
    case 3:
    case 4:
        alert('Spring');
        break;

    case 5:
    case 6:
    case 7:
        alert('Summer');
        break;

    case 8:
    case 9:
    case 10:
        alert('Autumn');
        break;

}

// Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает
// значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result 
// запишите название дня недели на русском языке в соответствии со значением переменной 
// day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет 
// значение 'en' – то аналогично, но день недели будет на английском.

let lang = prompt('Enter your language');
let day = new Date().getDay();
let result = '';

if (lang !== 'en' && lang !== 'ru') {
    alert('Unfortunately, this langauge is not supported.')
} else if (lang === 'ru') {

    switch (day) {
        case 0:
            alert('воскресенье');
            break;
        case 1:
            alert('понедельник');
            break;
        case 2:
            alert('вторник');
            break;
        case 3:
            alert('среда');
            break;
        case 4:
            alert('четверг');
            break;
        case 5:
            alert('пятница');
            break;
        case 6:
            alert('суббота');
            break;
    }
} else if (lang === 'en') {

    switch (day) {
        case 0:
            alert('Sunday');
            break;
        case 1:
            alert('Monday');
            break;
        case 2:
            alert('Tuesday');
            break;
        case 3:
            alert('Wednesday');
            break;
        case 4:
            alert('Thursday');
            break;
        case 5:
            alert('Friday');
            break;
        case 6:
            alert('Saturday');
            break;
    }

}



//Найдите и исправьте ошибки в коде:

// var x = prompt('x', 0);
// var error = null;

// switch (x) {
//     case 0: error = 'На ноль делить нельзя';
//     case 1: error = 'На единицу делить бессмысленно';
//     case NaN: error = 'Не математическая операция';
// }

// if (error) {
//     alert(error);
// } else {
//     alert(100 / x);
// }

var x = parseInt(prompt('x', 0));
var error = null;

switch (x) {
    case 0: error = 'На ноль делить нельзя'; break;
    case 1: error = 'На единицу делить бессмысленно'; break;
    case NaN: error = 'Не математическая операция';
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}
