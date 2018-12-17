// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// O(n) (linear) runtime

function reverse(str) {
	return str.split("").reduce((rstr, char) => {
		return char + rstr;
	}, "");
}

module.exports = reverse;

// function reverse(str) {
// 	return str.split("").reverse().join("");
// }

// function reverse(str) {
// 	let rstr = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		rstr = rstr + str[i];
// 	}
// 	return rstr;
// }