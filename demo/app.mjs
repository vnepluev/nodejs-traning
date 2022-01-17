// базовый пример импорта
// import { characters, greet } from './characters.mjs'

// for (const c of characters) {
// 	greet(c);
// }

// дополнительный возможности импорта (char - это константа)
// import * as char from './characters.mjs'

// import log from './characters.mjs'
// log();

// можно так же использовать следующий формат
// в лог принимаем export default
//import log, { greet, characters } from './characters.mjs'

// можно принять export default и все остальные поля
// import log, * as char from './characters.mjs'

// если имя переменной занято мы можем каждой переменной
// с помощью as задать новое имя при импорте
// import log, { greet as hello, characters } from './characters.mjs'
// const greet = ''

// асинхронный импорт модуля, который позволяет динамически, в любом
// месте кода импортировать наши параметры, при этом создается
// не блокирующий поток, который позволяет коду выполняться
async function main() {
	try {
		const { greet, characters } = await import('./characters.mjs');
		for (const c of characters) {
			greet(c);
		}		
		//log();
	} catch (error) {
		console.log('Ошибка!');
	}
}

main();
