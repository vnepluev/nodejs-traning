fs = require('fs');

const data = fs.readFileSync('./data.txt');
console.log(data.toString());

// используем подключение через common js
const { characters, stealRing } = require('./characters.js');
let myChars = characters;

myChars = stealRing(myChars, 'Фродо');

for (const c of characters) {
	console.log(c);
}

// require можно подключать по условию
const a = 1;
if (a > 0) {
	const log = require('./log')
	log();
} else {
	console.log('Загружено из app.js');
}