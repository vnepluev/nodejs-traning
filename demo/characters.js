const characters = [
	{name: 'Фродо', hasRing: false},
	{name: 'Бильбо', hasRing: false}
]

function stealRing(characters, owner) {
	// возвращает модифицированный объект
	return characters.map(c => {
		(c.name === owner) ? c.hasRing = true : c.hasRing = false
	})
}

module.exports = { characters, stealRing }