// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function formatStr(str) {
	return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
	return (formatStr(stringA) === formatStr(stringB));
}



module.exports = anagrams;


// // Helper Function
// function makeCharMap(str) {
// 	const charMap = {};
// 	let formattedStr = str.replace(/[^\w]/g, "").toLowerCase();
// 	for (let char of formattedStr) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
// 	return charMap;
// }

// function anagrams(stringA, stringB) {
// 	const charMapA = makeCharMap(stringA);
// 	const charMapB = makeCharMap(stringB);
// 	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false;
// 	}
// 	for (let char in charMapA) {
// 		if (charMapA[char] !== charMapB[char]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
