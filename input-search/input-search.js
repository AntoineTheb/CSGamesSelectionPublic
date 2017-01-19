module.exports = {timeAllowed: 5, points: 8, category: 'Reverse', isCodingChallenge: true, tests: [
	{name: 'Exemple', inputs: ['0x45cffe10'], outputs: ['ab','cb']},
	{name: 'Overflow test', inputs: ['0x63cdfe10'], outputs: ['f1','h1','eq','gq']},
	{name: 'Random test', inputs: ['0xc5cffe10'], outputs: ['bb', 'db']}
]};