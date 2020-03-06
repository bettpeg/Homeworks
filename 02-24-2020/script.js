// ООП в функциональном стиле
// Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. 
// На базе класса Figure создайте три класса – Line, Rect, Circle, каждый из которых создает 
// соответствующую фигуру. Пример создания экземпляров каждого класса и параметры фигур:

// var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
// var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
// var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

// Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими параметрами 
// (координаты, размеры, цвет).

// Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один класс – Canvas, в 
// котором инициализируется элемент <canvas> из DOM. Класс Canvas – final, он не наследуется. 
// В этом классе есть метод add, который и отображает созданные вами фигуры на странице. Обратите 
// внимание, добавлять фигуры на канвас можно как по отдельности, так и списком. Также у класса 
// есть свойства width и height, которые можно передать при вызове конструктора и которые меняют
// размер элемента canvas в html. Если в конструктор не передать значения для ширины/высоты, 
// то элементу canvas устанавливаются значения по умолчанию

// var drawArea = new Canvas('canvasID');
// drawArea.add(line);
// drawArea.add(circle, rect);

// <canvas id="canvasID"></canvas>

function Figure(x, y, color) {
  this.draw = function(canvasID) {
    let canvas = document.getElementById(canvasID);
    let context = canvas.getContext("2d");
    context.fillStyle = color;
  }
}

function Circle(x, y, r, color) {
  Figure.call(this, x, y, color);
  
  this.draw = function(canvasID) {
    let canvas = document.getElementById(canvasID);
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    //context.stroke();
    context.fillStyle = color;
    context.fill();
  }  
}

function Rect(x, y, w, h, color) {
  Figure.call(this, x, y, color);
  
  this.draw = function(canvasID) {
    let canvas = document.getElementById(canvasID);
    let context = canvas.getContext("2d");
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
  }  
}

function Line(x1, y1, x2, y2, color) {
  Figure.call(this, color);
  this.draw = function(canvasID) {
    let canvas = document.getElementById(canvasID);
    let context = canvas.getContext("2d");
    context.fillStyle = color;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }
}

function Ellipse(x, y, w, h, color) {
  Figure.call(this, x, y, color);
  
  this.draw = function(canvasID) {
    let canvas = document.getElementById(canvasID);
    let context = canvas.getContext("2d");
    context.fillStyle = color;
    context.save();
    context.beginPath();
    context.translate(x, y);
    context.scale(w / h, 1);
    context.arc(0, 0, h, 0, Math.PI * 2);
    context.restore();
    context.closePath();
    context.fill();
  }
}

function Canvas(canvasID, width = 800, height = 600) {
  
  let canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.id = canvasID;
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height)
  
  this.add = function(fig) {
    fig.draw(canvasID);
    if (typeof(fig) === 'object') {
      for(let i = 0; i < arguments.length; i++) {
        arguments[i].draw(canvasID);
      }
    }
  } 
}

let circle = new Circle(200, 200, 70, '#f0ebda');
let shadow = new Circle(210, 207, 70, '#a89f91');
let cup = new Circle(200, 200, 50, '#b8a991');
let cupHolder = new Circle(252, 190, 13, '#b8a991');
let coffeeShadow = new Circle(200, 200, 40, '#3d3627');
let coffee = new Circle(204, 205, 33, '#4d442f');

let avoShadow = new Ellipse(380, 267, 70, 100, '#a89f91');
let outerLayer = new Ellipse(370, 260, 70, 100, '#254d15');
let middleLayer = new Ellipse(370, 260, 65, 95, '#3c8221');
let innerLayer = new Ellipse(370, 260, 58, 88, '#1adb54');
let outerKernel = new Ellipse(370, 295, 30, 38, '#3d3627');
let innerKernel = new Ellipse(370, 295, 23, 30, '#4a4329');
let leftEye = new Circle(350, 210, 10, '#000000');
let rightEye = new Circle(390, 210, 10, '#000000');
let mouth = new Circle(368, 235, 10, '#000000');
let coverMouth = new Circle(368, 227, 11, '#1adb54');
let leftPupil = new Circle(348, 207, 3, '#ffffff');
let rightPupil = new Circle(388, 207, 3, '#ffffff');

let drawArea = new Canvas('canv1');

drawArea.add(shadow);
drawArea.add(circle);
drawArea.add(cup);
drawArea.add(coffeeShadow);
drawArea.add(coffee);
drawArea.add(cupHolder);

drawArea.add(avoShadow);
drawArea.add(outerLayer);
drawArea.add(middleLayer);
drawArea.add(innerLayer);
drawArea.add(outerKernel);
drawArea.add(innerKernel);
drawArea.add(leftEye);
drawArea.add(rightEye);
drawArea.add(mouth);
drawArea.add(coverMouth);
drawArea.add(leftPupil);
drawArea.add(rightPupil);


drawArea.add(ellipse);
