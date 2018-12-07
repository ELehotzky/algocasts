// let x = () => { return "test" }
// console.log(x())


// 1. given a sentence output this in reverse order
// "this is a test string"
// "string test a is this"

// take string, split on " ", reverse
// function reverse(str) {
//     return str.split(" ").reverse().join(" ");
// }

// console.log(reverse("this is a test string"));

// 2. given a word output true if it's a palindrome and false if it is not
// NOTE: you cannot use the built in reverse method this time
// racecar, hannah, bob are palidromes output true
// aaaaaaaaaaaaaaz, is not  output false

// function palindrome(str) {
//     return str.split("").every((char, i) => {        
//         return char === str[str.length - i - 1];
//     });
// }
// console.log(palindrome("racecar"));
// console.log(palindrome("aaaaaaaaaaaaaaaaaaaaaaaaz"));

// 3. given a sentence find the frequency of each letter in the sentence
// ignore whitespace characters
// "this is a test string"
// output: t:4,h:1,i:3, ..etc..

// function numChar(sentence) {
//     const charHash = {};
//     sentence.split("").forEach(obj => {
//         if (charHash[obj]) {
//             charHash[obj] += 1;
//         }
//         else {
//             if (obj != " ") {
//                 charHash[obj] = 1;
//             }
//         }

//     });
//     return charHash;
// }

// console.log(numChar("this is a test string"));

// 4. given an index N find the value in the fibonacci sequence recursively at index N
// fib sequence : 1,1,2,3,5,8,13,21
// indices:       1,2,3,4,5,6,7, 8
// if N = 6, output 8

// function fib(N) {
//     if (N < 2) {
//         return N;
//     } 
//     return (fib(N - 1) + fib(N - 2));
// }

// console.log(fib(2));

// 5. given a number N where  1 billion > N > 0, whole numbers only
// ouput N into words
// N = 3984795 output: three million nine hundred eighty four thousand seven hundred ninety five

x = ["". "one" .. "19"]
x[1] => "one"
]
if (N.length === 1) {
     if (N === 1) {
        return "one"
     }
     if (N.length === 2) {
         if (N.first === 2) {
            return "twenty"
         }
         if (N.first === 1) {
             if (N === 10) {
                return "ten"
            }
        }
    }
}
