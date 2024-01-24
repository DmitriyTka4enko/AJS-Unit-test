import healthScale from '../index';

test.each([
	[90, { name: 'Маг', health: 90 }, 'healthy'],
	[35, { name: 'Маг', health: 35 }, 'wounded'],
	[5, { name: 'Маг', health: 5 }, 'critical'],
])(
	('should check a health-scale of unit %s and show the %i health-status'),
	(_, unit, expected) => {
		const result = healthScale(unit);
		expect(result).toBe(expected)
	}
)