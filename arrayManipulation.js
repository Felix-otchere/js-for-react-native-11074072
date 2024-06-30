// arrayManipulation.js

function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number ** 2;
        } else {
            return number * 3;
        }
    });
}

// Test case
const testNumbers = [3, 6,8 ,7, 9];
console.log(processArray(testNumbers)); // Should output: [9, 36, 64, 21, 27]





// arrayManipulation.js

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}
// Test case 1: Basic example
const strings1 = ['Apple', 'Banana', 'Cherry'];
const numbers1 = [2, 3, 4]; // [even, odd, even]
const result1 = formatArrayStrings(strings1, numbers1);
console.log(result1); // Expected output: ['APPLE', 'banana', 'CHERRY']




module.exports = { formatArrayStrings };
