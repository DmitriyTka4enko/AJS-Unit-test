export default function healthScale(unit) {
	if (unit.health > 50) {
		return 'healthy';
	} else if (unit.health >= 15) {
		return 'wounded';
	} else {
		return 'critical';
	}
}