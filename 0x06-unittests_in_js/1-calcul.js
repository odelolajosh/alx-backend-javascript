const calculateNumber = (a, b, type) => {
	switch (type) {
		case 'SUM':
			return Math.round(a) + Math.round(b);
		case 'SUBTRACT':
			return Math.round(a) - Math.round(b);
		case 'DIVIDE':
			if ((b = Math.round(b)) === 0) {
				return 'Error'
			}
			return Math.round(a) / Math.round(b);
		default:
			return 'Error'
	}
}

module.exports = calculateNumber;
