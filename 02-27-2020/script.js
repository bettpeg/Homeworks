// Прототипы

// task 1
// Расширьте глобальный объект Date методом getWeek, с помощью которого можно узнать номер 
// недели в году. А также добавьте в прототип метод getQuarter - для получения номера годового квартала

// var date = new Date();
// console.log( date.getWeek() ); // 9
// console.log( date.getQuarter() ); // 1

Date.prototype.getWeek = function(){
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), 0, 1);
  const passedDays = (today - firstDay) / 86400000;
  return Math.ceil((passedDays + firstDay.getDay() + 1) / 7); 
}

var date = new Date();
console.log(date.getWeek()); 

Date.prototype.getQuarter = function() {
  const month = this.getMonth() + 1;
  let quarter;

  switch (month) {
    case 1, 2, 3: quarter = 1;
    break;
    case 4, 5, 6: quarter = 2;
    break;
    case 7, 8, 9: quarter = 3;
    break;
    case 10, 11, 12: quarter = 4;
    break; 
  }

  return quarter;
}

console.log(date.getQuarter());


// task 2
// Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива 
// местами по индексам. Метод изменяет исходный массив

Array.prototype.swap = function(indx1, indx2) {
  let indx1Data = this[indx1]
  this[indx1] = this[indx2];
  this[indx2] = indx1Data;

  return this;
}

var data = ['a', 'c', 'b', 'g', 'j'];
data = data.swap(2, 4);
console.log(data)



// task 3
// В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. Игроки должны иметь 
// свойство health - которое определяет базовые боевые возможности игрока (выносливость), и 
// power - сила удара. Оба свойства определяются при создании экземпляра класса. Также игрок должен 
// иметь метод hit для нанесения удара другому игроку. При нанесении удара “жертва” теряет 
// энергии (health) соответственно значению power игрока, который наносит удар. Также все игроки 
// имеют возможность лечиться - метод heal.
// Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
// Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями. 
// И напишите пример боя, используя соответствующие методы и свойства.

function addToThePage(source) {

  let cont = document.createElement('div');
    
  let photo = document.createElement('img');
  photo.setAttribute('src', source);
  photo.className += 'gif-img';
  
  document.body.appendChild(cont);
  cont.appendChild(photo);
}

function Warrior(health, power, name) {

  this.status = 'alive';

  this.health = health;
  this.power = power;
  this.name = name;

  this.rank = 'Legioner';
  this.killCount = 0;
  this.timeToUpgrade = 0;

  this.specialPower = '';
  this.sPCount = 0;

  this.canHeal = 1;
  this.canHit = 1;
  this.canBeHit = 1;

}

Warrior.prototype.getKillCount = function() {
  return this.killCount;
}

Warrior.prototype.hit = function(rival) {

  if (this.status === 'dead') {
    document.body.append(`\nOoops! Looks like you have been killed and can't hit. The game is over for you:(`);
    return;
  } else if (!this.canHit) {
    document.body.append(`\nOoops! You can't hit for now.`);
    setTimeout(() => {this.canHit = 1}, 10000);
    return;
  } else if (!rival.canBeHit) {
    document.body.append(`\nOoops! ${rival.name} cannot be hit currently!`)
    setTimeout(() => {rival.canBeHit = 1}, 10000);
    return;
  }

  rival.health -= this.power;
  addToThePage('https://thumbs.gfycat.com/SelfishWarlikeEastsiberianlaika-size_restricted.gif');

  if (rival.health < 0) {

    rival.status = 'dead';
    document.body.append(`\nOoops! You\'ve killed ${rival.name}`);
    addToThePage('https://thumbs.gfycat.com/GrouchySlimAnole-size_restricted.gif');
    this.killCount += 1;
    this.checkKillCount();

    if (this.timeToUpgrade === 1) {
      this.upgradeRank();
      document.body.append(`\nLooks like you've been promoted! Congrats! \nYour new rank is ${this.rank}`);
    }
  }

}

Warrior.prototype.checkSP = function() {
  return this.specialPower;
}

Warrior.prototype.checkSPCount = function() {
  return this.sPCount;
}

Warrior.prototype.checkKillCount = function() {
  const currentCount = this.getKillCount();
  
  if (currentCount === 10 || currentCount === 25 || currentCount === 45 || currentCount === 80 || currentCount === 150) {
    this.timeToUpgrade = 1;
  }
}

Warrior.prototype.upgradeRank = function() {
  switch(this.rank) {
    case 'Legioner': 
        this.rank = 'Decanus';
        this.health += 10;
        this.power += 10;
        break;
    case 'Decanus': 
        this.rank = 'Optio';
        this.health += 25;
        this.power += 25;
        break;
    case 'Optio': 
        this.rank = 'Centurion';
        this.health += 30;
        this.power += 30;
        break;
    case 'Centurion': 
        this.rank = 'Primipilus';
        this.health += 40;
        this.power += 40;
        break;
    case 'Centurion': 
        this.rank = 'Tribune';
        this.health += 50;
        this.power += 50;
        break;
  }
}

Warrior.prototype.heal = function() {
  if (!this.canHeal) {
    document.body.append(`You can't heal currently.`);
    setTimeout(function() {
      this.health += 5;
      document.body.append(`${this.name} can heal again.`);
    }.call(this), 20000);
  }
  this.health += 7;
}

Warrior.prototype.useLightning = function(rival) {
  let sP = this.checkSP();
  if (!sP) {
    document.body.append(`\nYou don't have any special powers!`);
    return;
  } else if (sP !== 'lightning') {
    document.body.append(`\nThis is not your super power!`);
    return;
  }

  let usedSP = this.checkSPCount();

  if (usedSP > 3) {
    document.body.append(`You can't use your spesial power anymore!`);
    return;
  }

  addToThePage('https://vignette.wikia.nocookie.net/vsbattles/images/8/87/Thunderstruck.gif/revision/latest?cb=20190219135924');
  rival.health -= 50;
  this.sPCount += 1;
}

Warrior.prototype.teleportate = function() {

  let sP = this.checkSP();
  if (!sP) {
    document.body.append(`\nYou don't have any special powers!`);
    return;
  } else if (sP !== 'teleportation') {
    document.body.append(`\nThis is not your super power!`);
    return;
  }

  let usedSP = this.checkSPCount();

  if (usedSP >= 1) {
    document.body.append(`You can't use your spesial power anymore!`);
    return;
  }

  this.status = 'teleportated';
  addToThePage('https://66.media.tumblr.com/1134da19621e524f13517befdc0a1434/tumblr_mw3ynbOlgX1qzjtx0o3_250.gifv');
  document.body.append(`Ooops! ${this.name} has teleportated out of this battle.`);
  this.sPCount += 1;
}

Warrior.prototype.takePower = function(rival) {
  let sP = this.checkSP();
  if (!sP) {
    document.body.append(`\nYou don't have any special powers!`);
    return;
  } else if (sP !== 'powerTaking') {
    document.body.append(`\nThis is not your super power!`);
    return;
  }

  let usedSP = this.checkSPCount();

  if (usedSP > 3) {
    document.body.append(`You can't use your spesial power anymore!`);
    return;
  }

  rival.power -= 10;
  rival.canHit = 0;
  rival.canHeal = 0;
  addToThePage('https://66.media.tumblr.com/f382890e94ead02552ef145475883737/tumblr_pse8ribpsU1vjcz9zo3_500.gifv');
  document.body.append(`You've taken the power of ${rival.name}!`);
}

function Doctor(health, treatAb) {

  this.status = 'alive';
  this.health = health;
  this.treatAb = treatAb;

}

Doctor.prototype.treat = function(victim) {

  victim.health += this.treatAb;
  addToThePage('https://thumbs.gfycat.com/WaryRectangularGallinule-small.gif');

}

Doctor.prototype.shield = function(victim) {
  victim.canBeHit = 0;
  addToThePage('https://mooreawaits.files.wordpress.com/2019/08/forcefieldgl.gif?w=800');
}

function Magician(health, ally) {
  this.status = 'alive';
  this.ally = ally;
}

Magician.prototype.killAll = function(players) {
  let self = this;
  players.forEach((player) => {
    if (player === this.ally || player === self || player.status === 'teleportated') return;
    player.status = 'dead';
  });
  addToThePage('https://i.giphy.com/media/8cNat9ERyyzH8w7x9w/giphy.webp');
  document.body.append(`\nOoops! The game is over. ${this.ally.name} and the Magician won, everyone else has been killed.`);
}

let alger = new Warrior(90, 25, 'Alger');
alger.specialPower = 'lightning';

let einar = new Warrior(125, 40, 'Einar');
einar.rank = 'Decanus';
einar.killCount = 9;

let lothar = new Warrior(110, 40, 'Lothar');
lothar.specialPower = 'teleportation';

let nassor = new Warrior(75, 15, 'Nassor');
nassor.specialPower = 'powerTaking';

let osbourne = new Warrior(140, 45, 'Osbourne');

let doc = new Doctor(100, 30);

let rink = new Magician(130, einar);

let players = [alger, einar, lothar, nassor, osbourne, doc, rink];

//round 1
document.body.append(`\nWelcome to the Round 1!`);

setTimeout(() => alger.hit(einar), 2000);
setTimeout(() => alger.useLightning(einar), 2100);

setTimeout(() => einar.heal(), 2150);
setTimeout(() => einar.hit(alger), 2300);

setTimeout(() => alger.useLightning(einar), 2500);
setTimeout(() => alger.heal(), 2550);
setTimeout(() => doc.treat(einar), 2600);

setTimeout(() => einar.hit(alger), 2700);
setTimeout(() => einar.hit(alger), 2800);

//round 2

setTimeout(() => document.body.append(`\nWelcome to the Round 2!`), 3000);

setTimeout(() => nassor.hit(lothar), 3200);
setTimeout(() => lothar.teleportate(), 3300);

//round 3

setTimeout(() => document.body.append(`\nWelcome to the Round 3!`), 3500);

setTimeout(() => nassor.hit(osbourne), 3600);
setTimeout(() => osbourne.hit(einar), 3650);

setTimeout(() => nassor.heal(), 3700);

setTimeout(() => nassor.hit(osbourne), 3800);
setTimeout(() => einar.hit(osbourne), 3900);
setTimeout(() => einar.hit(nassor), 4000);

setTimeout(() => doc.shield(osbourne), 4050);

setTimeout(() => nassor.takePower(einar), 4200);

setTimeout(() => rink.killAll(players), 4400);
