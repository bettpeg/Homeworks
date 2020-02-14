 //Objects
//  1. Создайте объект person, описывающий персону, с произвольным количеством 
//  произвольных полей. С помощью оператора in или typeof проверьте 
//  наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. 
//  Если свойства нет, то добавляйте его в объект со значением, которое также 
//  запрашивается из prompt.

var person = {
    'first name': 'Jonothan',
    'last name': 'Hacker',
    age: 32,
    occupation: 'solicitor',
    'marital status': 'engaged',
};

let key = prompt('What do you want to know?').toLowerCase();

if (key in person) {
    alert(person[key]);
} else if (person.key === undefined) {
    person[key] = prompt('Enter the information you know:');
    alert('Thank you! The informatin has been added.' + '\n' + key + ' = ' + person[key]);
}



// 2. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
// прочитанными из prompt (например: brand, model, resolution, color...), не 
// используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

let phone = {};
let propertiesNum = prompt('How many properties does the phone have?', 'No phone');

if (propertiesNum !== 'No phone') {

    for (let i = 0; i < propertiesNum; i++){
        let key = prompt('Property:');
        phone[key] = prompt('Description:');
    }

    person[phone] = phone;

} else {
    person[phone] = 'This person doesn\'t have a phone';
}



// 3. Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, 
// либо update. В зависимости от указанного действия, удаляйте или добавляйте 
// (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно 
// свойство удалять или добавлять - также читается из prompt. Какое значение будет у 
// добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt 
// редактирование person заканчивается. И обновленные данные распечатываются в консоли.

while (true) {

    let instr = prompt('What would you like to do (update info/delete info)?', '');
    let key = '';

    if (instr.toLowerCase() === 'delete') {

        key = prompt('Which property would you like to delete?').toLowerCase();

        if (key in person) {
            delete person[key];
            alert('The following information has been deleted from \"person\":\n' + key);
        } else {
            alert('Nothing to delete! There is no \"' + key + '\" in \"person\".');
        }

    } else if (instr.toLowerCase() === 'update') {

        key = prompt('Which property would you like to update?').toLowerCase();
        

        if (key in person) {
            person[key] = prompt('Enter the new info: ');
            alert('Thank you! The following information has been updated:\n' + key + ' = ' + person[key]);
        } else if (person.key === undefined){
            person[key] = prompt('Enter the new info: ');
            alert('Thank you! The following information has been added:\n' + key + ' = ' + person[key]);
        }

    } else if (instr.toLowerCase() !== 'update' && instr.toLowerCase() !== 'delete' && instr !== null) {
 
        alert('Sorry! Instructions are unknown. Please enter \"update\" or \"delete\".');

    } else if (instr === null) {

        break;

    }

}



// 4. Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле 
// (for..in) сгенерированный ранее объект person, добавляя dt - для имени 
// свойства и dd - для значения свойства (работа с DOM - с использованием 
// методов Native JS).

let dl = document.createElement('dl');
document.body.append(dl);

for (let key in person) {
  let dt = document.createElement('dt');
  let prop = document.createTextNode(`${key}`);
  dt.append(prop);
  dl.append(dt);
  
  let dd = document.createElement('dd');
  let value = document.createTextNode(`${person[key]}`);
  dd.append(value);
  dl.append(dd);
}



// 5. Создайте объект dates для хранения дат. Первая дата – позавчера. 
// Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается 
// дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон 
// дат объекта dates.

let date = new Date();
let dates = {
    'firstDate': `${date.setDate(date.getDate()-2)}`,
    'lastDate': `${date.setDate(date.getDate() - 365)}`,
}

let userDate = Date.parse(prompt('Enter date in the format yyyy-mm-dd:'));

if (userDate >= dates['lastDate'] && userDate <= dates['firstDate']) {
  alert('Your date falls into the given period.');
} else {
  alert('Your date does not fall into the given period.');
}



// 6. Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью
// методов браузера добавьте ее на страницу со всеми атрибутами, читая значения 
// свойств из созданного объекта.

/* <img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" 
alt="" style="border: 1px solid #ccc" width="200" /> */

let image = {
    src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
    alt: '\"\"',
    style: {
      border: '1px solid #ccc',
      width: '200'
    }
};

let img = document.createElement('img');
document.body.append(img);

for (key in image) {
  let attr = `${key}`;
  let value = `${image[key]}`;
  
  img.setAttribute(attr, value);
}