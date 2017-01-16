const randArr = (end, start = 0) => {
	function randomsort(a, b) {
		return Math.random() > 0.5 ? -1 : 1;
	}

	function getRandomArr() {
		var arr = [];
		if (typeof end == 'undefined') {
			end = start;
			start = 0;
		}
		for (var i = start; i < end; i++) {
			arr.push(i);
		}
		return arr.sort(randomsort);
	}
	return getRandomArr();
};

export default {
	randArr
};