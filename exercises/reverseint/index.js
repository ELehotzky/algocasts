// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let rInt = n.toString().split("").reverse("").join("");
	return parseInt(rInt) * Math.sign(n);
}

module.exports = reverseInt;


// My first try
// function reverseInt(n) {
//   if (n < 0) {
//     let num = n * -1;
//     return parseInt(num.toString().split("").reverse().join(""))*-1;
//   } else {
//     return parseInt(n.toString().split("").reverse().join(""));
//   }
// }

// function reverseInt(n) {
// 	let rInt = n.toString().split("").reverse("").join("");
// 	if (n < 0) {
// 		return parseInt(rInt) * -1;
// 	}
// 	return parseInt(rInt);
// }