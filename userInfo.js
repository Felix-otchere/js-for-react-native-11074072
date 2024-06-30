// userInfo.js

const { formatArrayStrings } = require('./arrayManipulation');

// Test case for formatArrayStrings
const originalNames = ['Alice', 'Bob', 'Charlie'];
const modifiedNumbers = [1, 2, 3]; // Example numbers

const formattedNames = formatArrayStrings(originalNames, modifiedNumbers);
console.log(formattedNames); // Output: ['alice', 'BOB', 'charlie']

function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error('Arrays must be of the same length');
    }

    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Additional test case for createUserProfiles
const profiles = createUserProfiles(originalNames, formattedNames);
console.log(profiles);
// Output: [
//     { id: 1, originalName: 'Alice', modifiedName: 'alice' },
//     { id: 2, originalName: 'Bob', modifiedName: 'BOB' },
//     { id: 3, originalName: 'Charlie', modifiedName: 'charlie' }
// ]
