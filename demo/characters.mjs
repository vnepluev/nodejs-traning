export const characters = ['Фродо', 'Бильбо'];

export function greet(characters) {
	console.log('Поздравляю с победой - ' + characters + '!');
}

// экспорт по умолчанию
export default function log() {
	console.log('export default');
}